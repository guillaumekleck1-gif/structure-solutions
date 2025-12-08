import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, company });

    // Send notification email to Dynamix
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dynamix Ingénierie <onboarding@resend.dev>",
        to: ["guillaume.kleck1@gmail.com"],
        subject: `Nouvelle demande de contact - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">Dynamix Ingénierie</h1>
              <p style="margin: 10px 0 0;">Nouvelle demande de contact</p>
            </div>
            
            <div style="padding: 30px; background-color: #f8f9fa;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Informations du contact</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 150px;">Nom :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                    <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Téléphone :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${phone}</td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Société :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${company}</td>
                </tr>
                ` : ''}
              </table>
              
              <h3 style="color: #1e3a5f; margin-top: 30px;">Message</h3>
              <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="padding: 20px; background-color: #1e3a5f; color: white; text-align: center; font-size: 12px;">
              <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact du site Dynamix Ingénierie</p>
            </div>
          </div>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const error = await notificationResponse.text();
      console.error("Error sending notification email:", error);
      throw new Error(`Failed to send notification email: ${error}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the user
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dynamix Ingénierie <onboarding@resend.dev>",
        to: [email],
        subject: "Nous avons bien reçu votre demande - Dynamix Ingénierie",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">Dynamix Ingénierie</h1>
            </div>
            
            <div style="padding: 30px; background-color: #f8f9fa;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Bonjour ${name},</h2>
              
              <p style="line-height: 1.6;">
                Nous avons bien reçu votre demande et nous vous en remercions.
              </p>
              
              <p style="line-height: 1.6;">
                Notre équipe d'ingénieurs analysera votre demande et vous contactera dans les plus brefs délais pour échanger sur votre projet.
              </p>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6; margin: 20px 0;">
                <h3 style="color: #1e3a5f; margin-top: 0;">Récapitulatif de votre demande</h3>
                <p style="margin: 0; white-space: pre-wrap; color: #666;">${message}</p>
              </div>
              
              <p style="line-height: 1.6;">
                À très bientôt,<br>
                <strong>L'équipe Dynamix Ingénierie</strong>
              </p>
            </div>
            
            <div style="padding: 20px; background-color: #1e3a5f; color: white; text-align: center; font-size: 12px;">
              <p style="margin: 0;">79 rue de la Plaine des Bouchers, 67100 Strasbourg</p>
              <p style="margin: 5px 0 0;">contact@dynamix-ingenierie.com</p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      console.error("Error sending confirmation email:", await confirmationResponse.text());
      // Don't throw here - notification was sent successfully
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails envoyés avec succès" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
