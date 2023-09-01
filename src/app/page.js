"use client";

import Navbar from "./components/navbar/Navbar"
import { useSessionContext } from "./context/SessionProvider";
import useSession from "./hooks/useSession";
import { redirect } from 'next/navigation'

export default function Home() {

  const { hasSession } = useSessionContext()
  const isUserLogged = true;

  return (
  <main>
    <Navbar />
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Painel da Universidade</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Notícias Recentes</h2>
        <ul className="list-disc list-inside">
          <li>Novos cursos disponíveis para inscrição.</li>
          <li>Prazo para inscrição em bolsas de estudo se encerra em breve.</li>
          <li>Evento de pesquisa científica marcado para a próxima semana.</li>
        </ul>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Avisos Importantes</h2>
        <ul className="list-disc list-inside">
          <li>As aulas do próximo semestre iniciarão em 15 de setembro.</li>
          <li>Confira os horários das provas finais na seção de Calendário Acadêmico.</li>
        </ul>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Eventos</h2>
        <ul className="list-disc list-inside">
          <li>Workshop de Empreendedorismo: Inscrições Abertas</li>
          <li>Palestra sobre Sustentabilidade no Campus Central</li>
        </ul>
      </div>
    </div>
  </main>
  )
}
