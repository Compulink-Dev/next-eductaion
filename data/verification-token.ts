import { db } from "@/lib/db";

export const getVerificationTokeById = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { token }
        })
        return verificationToken
    } catch (error) {
        return null
    }
}

export const getVerificationTokeByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { email }
        })
        return verificationToken
    } catch (error) {
        return null
    }
}