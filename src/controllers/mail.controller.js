import { MailService } from "../domain/services/mail.service.js";

const mailService = new MailService();

export const sendEmail = async (req, res) => {
    try {
        const { firstName, lastName, campus, lockerNumber, message } = req.body;

        const result = await mailService.sendMail({firstName, lastName, campus, lockerNumber, message});
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
