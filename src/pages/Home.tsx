import { useContext } from "react";
import Card from "../components/Card";
import CandidatosContext from "../hooks/contexts/CandidatosContext";
import { InputContext } from "../hooks/contexts/InputContext";

export default function Home() {
  const { candidatos } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);

  return (
    <>
      <main className="flex flex-col justify-center items-center max-w-screen mx-auto py-24">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-5 p-5">
          {/* Lista os candidatos apartir do filtro */}
          {termoDeBusca.length > 0
            ? candidatos.filter(candidato =>
              candidato.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
              candidato.numero.toString().includes(termoDeBusca)
            ).map((candidato) => (
              <Card
                key={candidato.id}
                id={candidato.id}
                imagem={candidato.imagem}
                nome={candidato.nome}
                numero={candidato.numero}
                partido={candidato.partido}
                biografia={candidato.biografia}
                propostas={candidato.propostas}
              />
            )): candidatos.map((candidato) => ( // Caso não haja filtro, ele exibe tudo
              <Card
                key={candidato.id}
                id={candidato.id}
                imagem={candidato.imagem}
                nome={candidato.nome}
                numero={candidato.numero}
                partido={candidato.partido}
                biografia={candidato.biografia}
                propostas={candidato.propostas}
              />))}
        </div>
        <button className="bg-white" />
      </main>
    </>
  )
}