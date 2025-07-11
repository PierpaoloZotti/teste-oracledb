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
        prefered_name: formData.get("prefered_name") || ""
    }
    await User.create({
        name: data.name,
        prefered_name: data.prefered_name
    }
        
    )
}