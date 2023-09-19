"use client";

import Navbar from "./components/navbar/Navbar"
import { useSessionContext } from "./context/SessionProvider";
import useSession from "./hooks/useSession";
import { redirect } from 'next/navigation'

export default function Home() {

  const { hasSession } = useSessionContext()
  const isUserLogged = true;

  // Gestão Simplificada: Com o Studio Manager, você pode gerenciar facilmente os horários de seus artistas, garantindo que sua programação esteja sempre organizada e que nenhum cliente seja esquecido.

  // Monitoramento de Desempenho: Acompanhe o desempenho de seus artistas com base no feedback dos clientes e nas avaliações, identificando áreas de aprimoramento e reconhecendo o talento excepcional.

  // Aumento da Receita: Aproveite ao máximo seus horários disponíveis, evitando faltas com nossos lembretes automáticos, garantindo que seu estúdio esteja sempre ocupado.

  // Privacidade e Segurança: Saiba que os dados de seus clientes são tratados com o mais alto padrão de segurança e privacidade.

  // Lembre-se de que estamos sempre disponíveis para ajudar. Se você tiver alguma dúvida, precisar de suporte técnico ou desejar explorar ainda mais os recursos do Studio Manager, nossa equipe está à sua disposição.

  // Eleve Seu Estúdio de Tatuagem

  // O Studio Manager está pronto para ajudá-lo a elevar o nível de seu estúdio de tatuagem. Tire o máximo proveito de nossa plataforma e ofereça aos seus clientes uma experiência de agendamento e tatuagem de alta qualidade.

  // Agradecemos por escolher o Studio Manager como seu parceiro de agendamento. Estamos comprometidos em ajudá-lo a alcançar o sucesso em seu estúdio de tatuagem.

  // Comece agora mesmo a explorar todas as vantagens que o Studio Manager pode oferecer para o seu negócio. Estamos ansiosos para acompanhá-lo nesta jornada de sucesso!

  return (
    <main>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Painel do Estúdio Manager</h1>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Entenda mais sobre o Studio Manager:</h2>
          <ul className="list-disc list-inside" >
            <li>Gestão Simplificada: Com o Studio Manager, você pode gerenciar facilmente os horários de seus artistas, garantindo que sua programação esteja sempre organizada e que nenhum cliente seja esquecido.</li>

            <li>Monitoramento de Desempenho: Acompanhe o desempenho de seus artistas com base no feedback dos clientes e nas avaliações, identificando áreas de aprimoramento e reconhecendo o talento excepcional.</li>

            <li>Aumento da Receita: Aproveite ao máximo seus horários disponíveis, evitando faltas com nossos lembretes automáticos, garantindo que seu estúdio esteja sempre ocupado.</li>

            <li>Privacidade e Segurança: Saiba que os dados de seus clientes são tratados com o mais alto padrão de segurança e privacidade.</li>
          </ul>
          <br />
          <h3 className="text-m font-semibold mb-2">Lembre-se de que estamos sempre disponíveis para ajudar. Se você tiver alguma dúvida, precisar de suporte técnico ou desejar explorar ainda mais os recursos do Studio Manager, nossa equipe está à sua disposição.</h3>
        </div>
        <div className="mt-4 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Eleve seu estúdio de tatuagem!</h2>
          <ul className="list-disc list-inside" style={{ textAlign: "justify"}}>
            <p>O Studio Manager está pronto para ajudá-lo a elevar o nível de seu estúdio de tatuagem.
              Tire o máximo proveito de nossa plataforma e ofereça aos seus clientes uma experiência de agendamento e tatuagem de alta qualidade.<br />
              Agradecemos por escolher o Studio Manager como seu parceiro de agendamento. Estamos comprometidos em ajudá-lo a alcançar o sucesso em seu estúdio de tatuagem.<br /> 
              Comece agora mesmo a explorar todas as vantagens que o Studio Manager pode oferecer para o seu negócio. 
              Estamos ansiosos para acompanhá-lo nesta jornada de sucesso!
            </p>
          </ul>
        </div>
      </div>
    </main >
  )
}
