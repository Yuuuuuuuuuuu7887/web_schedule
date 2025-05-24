"use server"

export async function loginAction(formData: FormData) {
    const values = Object.entries(formData.entries())
    console.log(values)
}
