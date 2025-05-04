import nodemailer from "nodemailer"

export function getMailTransporter() {
    if(process.env.EMAIL_SERVER && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD){
        return nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: Number.parseInt(process.env.EMAIL_PASSWORD || "587"),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })
    }

    return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user:"ethereal.user@ethereal.email",
            pass: "ethereal_pass",
        },
    })
}

export async function sendEmail({
    to,
    subject,
    html,
    from = process.env.EMAIL_FROM || "noreply@example.com",
} : {
    to: string
    subject: string
    html: string
    from? : string
}){
    const transpoter = getMailTransporter();

    try {
        const info = await transpoter.sendMail({
            from,
            to,
            subject,
            html,
        })

        console.log("Message Sent: %s",info.messageId)

        return { success: true, messageId: info.messageId }
    } catch(error) {
        console.error("Failed to send email:",error)
        return { success: false, error}
    }
}