import { useContext, useState } from "react";
import { InputContext } from "../hooks/contexts/InputContext";

import CandidatosContext from "../hooks/contexts/CandidatosContext";

import Adicionar from "../assets/Adicionar";
import InputPost from "../components/Input";
import Modal from "../components/Modal";
import Lista from "../components/Lista";

export default function Admin() {

  const { candidatos, postCandidato } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);


  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    nome: "",
    numero: "",
    partido: "",
    biografia: "",
    propostas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postCandidato(formData);
    setFormData({
      nome: "",
      numero: "",
      partido: "",
      biografia: "",
      propostas: "",
    })
    fecharModal();
  };

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <main className="flex flex-col items-center max-w-screen py-16">
        <div className="flex flex-col items-center space-y-6 py-3 relative">
          <div className="flex items-center justify-around ">
            <h1 className="text-3xl text-white font-bold max-md:hidden mt-8">Administração de Candidatos</h1>
            <button onClick={abrirModal} className="flex gap-2 bg-blue-600 text-white font-semibold rounded-lg p-2 max-md:static max-md:mt-8 absolute top-10 right-0"><Adicionar/>Adicionar</button>
          </div>
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full mx-auto">
            <ul className="flex justify-center">
              <li className="flex text-center justify-between bg-gray-700 p-3 rounded-t-lg w-full">
                <span className="w-1/12">Id</span>
                <span className="w-1/6">Nome</span>
                <span className="w-1/12">Número</span>
                <span className="w-1/4">Partido</span>
                <span className="w-1/4 max-md:hidden">Propostas</span>
                <span className="w-1/6">Ações</span>
              </li>
            </ul>
            {termoDeBusca.length > 0
              ? candidatos.filter(candidato =>
                candidato.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
                candidato.numero.toString().includes(termoDeBusca)
              ).map((candidato, index) => (
                <Lista
                  key={index}
                  id={candidato.id}
                  nome={candidato.nome}
                  numero={candidato.numero}
                  partido={candidato.partido}
                  biografia={candidato.biografia}
                  propostas={candidato.propostas}
                />
              )) : candidatos.map((candidato, index) => (
                <Lista
                key={index}
                id={candidato.id}
                  nome={candidato.nome}
                  numero={candidato.numero}
                  partido={candidato.partido}
                  biografia={candidato.biografia}
                  propostas={candidato.propostas}
                />))}
                
          </div>
        </div>
        <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
          <div className="bg-blue-900 text-black p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Formulário de Cadastro</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <InputPost id="nome" name="nome" value={formData.nome} onChange={handleChange}></InputPost>
              </div>
              <div className="flex flex-col">
                <InputPost id="numero" name="numero" value={formData.numero} onChange={handleChange}></InputPost>
              </div>
              <div className="flex flex-col">
                <InputPost id="partido" name="partido" value={formData.partido} onChange={handleChange}></InputPost>
              </div>
              <div className="flex flex-col">
                <InputPost id="biografia" name="biografia" value={formData.biografia} onChange={handleChange}></InputPost>
              </div>
              <div className="flex flex-col">
                <InputPost id="propostas" name="propostas" value={formData.propostas} onChange={handleChange}></InputPost>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold rounded-lg p-2 hover:bg-green-700 transition"
              >
                Salvar
              </button>
            </form>
          </div>
        </Modal>
      </main>
    </>
  );
}
