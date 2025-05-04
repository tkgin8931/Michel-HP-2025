"use server"

import { sendEmail } from "../lib/mailer"

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export async function submitContactForm(formData: ContactFormData) {
    try {
        if(!formData.name || formData.email || !formData.message){
            return { success :false, message:"すべての必須項目を入力してください"}
        }
    }
}