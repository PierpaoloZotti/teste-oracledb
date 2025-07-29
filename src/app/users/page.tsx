import { getUsers } from "@/actions/users";
import User from "@/models/User";

export const dynamic = "force-dynamic"



export default async function UsersPage() {
    const {users} =await getUsers()
  return (
    <main className="flex flex-col p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">Users's list</h1>
        {users.map((user)=>(
            <div key={user.id} className="w-1/2 mx-auto grid grid-cols-6 py-2 px-4 bg-slate-200/70 border border-slate-400/40 rounded-md shadow-md">
                <div className="flex flex-col gap-2 col-span-3">
                    <span className="uppercase font-semibold">Nome Completo</span>
                    <span>{user.name}</span>
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                    <span className="uppercase font-semibold">Email</span>
                    <span>{user.email}</span>
                </div>
                
                <div className="flex flex-col gap-2 col-span-1">
                    <span className="uppercase font-semibold">Criado em</span>
                    <span>{user.createdAt.toLocaleDateString("pt-BR")}</span>
                </div>
               
            </div>
        ))}
    </main>
  )
}
