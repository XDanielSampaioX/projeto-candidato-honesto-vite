import { useContext } from "react";
import Card from "../components/Card";
import CandidatosContext from "../hooks/contexts/CandidatosContext";
import { InputContext } from "../hooks/contexts/InputContext";

export default function Home() {
  const { candidatos } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);

  // Filtra os registros se houver um termo de busca, caso contrário retorna todos
  const registros = Array.isArray(
    termoDeBusca.length > 0
      ? candidatos.filter(candidato =>
          candidato.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
          candidato.numero.toString().includes(termoDeBusca)
        )
      : candidatos
  ) ? (termoDeBusca.length > 0
      ? candidatos.filter(candidato =>
          candidato.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
          candidato.numero.toString().includes(termoDeBusca)
        )
      : candidatos
    ) : [];
  

  return (
    <>
    <header className="flex flex-col justify-center items-center max-w-screen mx-auto">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-5 p-5">
        {registros.map((candidato) => (
          <Card
            key={candidato.id}
            nome={candidato.nome}
            numero={candidato.numero}
            biografia={candidato.biografia}
            propostas={candidato.propostas}
          />
        ))}
      </div>
      <button className="bg-white">
      </button>
    </header>
    </>
  );
}
