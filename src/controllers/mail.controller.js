import { MailService } from "../domain/services/mail.service.js";

const mailService = new MailService();

export const sendEmail = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ success: false, error: 'Le message est requis.' });
        }

        const result = await mailService.sendMail(message);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
