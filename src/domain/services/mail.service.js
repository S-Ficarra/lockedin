import nodemailer from 'nodemailer';

export class MailService {
    async sendMail(message) {
        try {
            // Création d'un transporteur SMTP
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            // Définit les détails de l'e-mail
            let mailOptions = {
                from: process.env.SMTP_USER,
                to: 'workshop2425.b3g19@gmail.com',
                subject: 'INCIDENT',
                text: message
            };

            // Envoi l'e-mail
            let info = await transporter.sendMail(mailOptions);

            console.log(`Email envoyé : ${info.response}`);
            return { success: true, message: 'Email envoyé avec succès.' };

        } catch (error) {
            console.error(`Erreur lors de l'envoi de l'e-mail : ${error.message}`);
            throw new Error(`Erreur lors de l'envoi de l'e-mail : ${error.message}`);
        }
    }
}
