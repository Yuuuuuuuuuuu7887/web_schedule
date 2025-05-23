"use server"

import { revalidatePath } from "next/cache"

export const createCamps = async(formData)=>{
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    revalidatePath('/student')
}