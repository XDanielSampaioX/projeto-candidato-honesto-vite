import { FaTrash, FaPen } from "react-icons/fa";
import Modal from "../Modal";
import { useContext, useState, useEffect } from "react";
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
    id: "",
    nome: "",
    numero: "",
    partido: "",
    biografia: "",
    propostas: "",
  });

  // Atualiza formData com os valores de props ao abrir o modal
  useEffect(() => {
    if (modalAberto) {
      setFormData({
        id: props.id || "",
        nome: props.nome || "",
        numero: props.numero || "",
        partido: props.partido || "",
        biografia: props.biografia || "",
        propostas: props.propostas || "",
      });
    }
  }, [modalAberto, props]);


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
        <div className="flex flex-col justify-center bg-blue-900 text-black items-center gap-3 mb-4 -m-5">
          <h2 className="text-xl font-semibold">Formulário de Cadastro</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="numero">Partido</label>
              <input
                id="partido"
                name="partido"
                value={formData.partido}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="biografia">Biografia</label>
              <textarea
                id="biografia"
                name="biografia"
                value={formData.biografia}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="propostas">Propostas</label>
              <textarea
                id="propostas"
                name="propostas"
                value={formData.propostas}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Salvar</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
