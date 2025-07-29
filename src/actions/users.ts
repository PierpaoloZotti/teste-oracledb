"use server"

import User from "@/models/User"

export async function getUsers(){
    const users = await User.findAll({
        order: [["createdAt", "asc"]]
    })
    return {users}
}

export async function createUser(formData: FormData){
    const data = {
        name : formData.get("name"),
        email: formData.get("email") || ""
    }
    await User.create({
        name: data.name,
        email: data.email
    }
        
    )
}