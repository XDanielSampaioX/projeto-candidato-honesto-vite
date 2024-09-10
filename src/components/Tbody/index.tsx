import { FaTrash, FaPen } from "react-icons/fa";
import Modal from "../Modal";
import { useContext, useState } from "react";
import CandidatosContext from "../../hooks/contexts/CandidatosContext";

export default function Tbody(props: Candidato) {
  const { putCandidato, deleteCandidato } = useContext(CandidatosContext);

  const [modalAberto, setModalAberto] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    id: props.id || "",
    nome: props.nome || "",
    numero: props.numero || "",
    partido: props.partido || "",
    biografia: props.biografia || "",
    propostas: props.propostas || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    putCandidato(formData);
    fecharModal();
  };

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <tbody className="flex flex-col space-y-4">
        <tr className="flex text-center justify-between p-3">
          <td className="w-1/12 font-semibold">{props.id}</td>
          <td className="w-1/6 font-semibold">{props.nome}</td>
          <td className="w-1/6 ">{props.numero}</td>
          <td className="w-1/6 ">{props.partido}</td>
          <td className="w-1/4">{props.biografia}</td>
          <td className="w-1/6 flex justify-center h-9 gap-1">
            <button onClick={abrirModal} className="bg-teal-800 p-2 rounded-lg">
              <FaPen />
            </button>
            <button onClick={() => deleteCandidato} className="bg-red-700 p-2 rounded-lg">
              <FaTrash />
            </button>
          </td>
        </tr>
      </tbody>

      <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
        <div className="flex flex-col justify-center bg-blue-900 text-black items-center gap-4 p-3 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Formulário de Cadastro</h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-2">
              <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
              <input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="numero" className="block text-sm font-medium mb-1">Número</label>
              <input
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="partido" className="block text-sm font-medium mb-1">Partido</label>
              <input
                id="partido"
                name="partido"
                value={formData.partido}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="biografia" className="block text-sm font-medium mb-1">Biografia</label>
              <textarea
                id="biografia"
                name="biografia"
                value={formData.biografia}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="propostas" className="block text-sm font-medium mb-1">Propostas</label>
              <textarea
                id="propostas"
                name="propostas"
                value={formData.propostas}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Salvar
            </button>
          </form>
        </div>
      </Modal>

    </>
  );
}
