import { createUser } from "@/actions/users";


export default async function Home() {
  
  return (
    <div>
      Bom dia
      <form action={createUser}>
        <label htmlFor="name">
          Nome
        </label>
        <input type="text" placeholder="Digite o nome...." name="name" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
