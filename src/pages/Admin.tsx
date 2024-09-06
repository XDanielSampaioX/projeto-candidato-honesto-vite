import { useContext, useState } from "react";
import { InputContext } from "../hooks/contexts/InputContext";

import CandidatosContext from "../hooks/contexts/CandidatosContext";

import Tbody from "../components/Tbody";
import Modal from "../components/Modal";

export default function Admin() {

  const { candidatos, postCandidato } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);


  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    nome: "",
    numero: "",
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
      biografia: "",
      propostas: "",
    })
    fecharModal();
  };

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const registrosFiltrados = candidatos.filter((candidato) =>
    candidato.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
    candidato.numero.toString().includes(termoDeBusca)
  );

  return (
    <>
        <header className="flex flex-col items-center max-w-screen">
          <div className="flex flex-col items-center space-y-6 py-3 relative">
            <div className="flex gap-5">
              <h1 className="text-3xl text-white font-bold">Administração de Candidatos</h1>
              <button onClick={abrirModal} className="bg-blue-600 text-white font-semibold rounded-lg p-2 absolute right-5">Adicionar Candidato</button>
            </div>
            <table className="bg-gray-800 text-white rounded-lg shadow-lg w-full mx-auto">
              <thead className="flex justify-center">
                <tr className="flex text-center justify-between bg-gray-700 p-3 rounded-t-lg w-full">
                  <th className="w-1/6">Nome</th>
                  <th className="w-1/6">Número</th>
                  <th className="w-1/4">Propostas</th>
                  <th className="w-1/6">Ações</th>
                </tr>
              </thead>
                {registrosFiltrados.length > 0 ? (
                  registrosFiltrados.map((candidato, index) => (
                    <Tbody
                      key={index}
                      nome={candidato.nome}
                      numero={candidato.numero}
                      biografia={candidato.biografia}
                      propostas={candidato.propostas}
                    />
                  ))
                ) : (
                  candidatos.map((candidato) => (
                    <Tbody
                      key={candidato.id}
                      nome={candidato.nome}
                      numero={candidato.numero}
                      biografia={candidato.biografia}
                      propostas={candidato.propostas}
                    />
                  ))
                )}
            </table>
          </div>
          <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
            <div className="bg-blue-900 text-black p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Formulário de Cadastro</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="nome" className="font-semibold">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="numero" className="font-semibold">Número</label>
                  <input
                    id="numero"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="biografia" className="font-semibold">Biografia</label>
                  <textarea
                    id="biografia"
                    name="biografia"
                    value={formData.biografia}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="propostas" className="font-semibold">Propostas</label>
                  <textarea
                    id="propostas"
                    name="propostas"
                    value={formData.propostas}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                  />
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
        </header>
    </>
  );
}
