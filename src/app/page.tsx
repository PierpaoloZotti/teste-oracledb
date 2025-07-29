import { createUser } from "@/actions/users";
import Link from "next/link";


export default async function Home() {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      <form action={createUser} className="mx-auto gap-4 mt-4 border rounded-xl p-4 flex flex-col justify-center w-full md:w-1/3 lg:w-1/4 ">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="name">
          Nome
          </label>
          <input type="text" placeholder="Digite o nome...." name="name" />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="email">
          Email
          </label>
          <input type="email" placeholder="john@wayne.com" name="email" />
        </div>
        
        <button type="submit" className="w-full rounded-md bg-blue-950 hover:bg-blue-950/90 hover:shadow-sm shadow-black/80 text-white">Enviar</button>
      </form>
      <Link href={"/users"}>Ver lista usuarios</Link>
    </div>
  );
}
