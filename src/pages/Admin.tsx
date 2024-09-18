import { useContext, useState } from "react";
import * as Yup from "yup"; // Importando Yup para a validação
import { InputContext } from "../hooks/contexts/InputContext";
import CandidatosContext from "../hooks/contexts/CandidatosContext";
import Adicionar from "../assets/Adicionar";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Lista from "../components/Lista";

export default function Admin() {
  const { candidatos, postCandidato } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);

  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    imagem: "",
    nome: "",
    numero: "",
    partido: "",
    biografia: "",
    propostas: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Estado para armazenar erros de validação

  // Schema de validação com Yup
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O nome é obrigatório"),
    numero: Yup.string().required("O número do partido é obrigatório").matches(/^[0-9]+$/, "Apenas números são permitidos").max(4, "Número máximo de 4 caracteres"),
    partido: Yup.string().required("O partido é obrigatório"),
    biografia: Yup.string().required("A biografia é obrigatória"),
    propostas: Yup.string().required("As propostas são obrigatórias"),
    imagem: Yup.mixed().required("A imagem é obrigatória"),
  });

  // Função para lidar com a alteração de inputs e upload de imagem
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "imagem") {
      const file = files && files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, imagem: reader.result as string });
        };
        reader.readAsDataURL(file); // Converte o arquivo para Base64
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Tenta validar os dados usando o schema do Yup
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      postCandidato(formData); // Se não houver erros, envia os dados
      setFormData({
        imagem: "",
        nome: "",
        numero: "",
        partido: "",
        biografia: "",
        propostas: "",
      });
      fecharModal();
      setErrors({}); // Limpa os erros
    } catch (validationErrors) {
      // Captura e organiza os erros de validação
      const formattedErrors: { [key: string]: string } = {};
      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            formattedErrors[error.path] = error.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <main className="flex flex-col items-center max-w-screen py-16">
        <div className="flex flex-col items-center space-y-6 py-3 relative">
          <div className="flex items-center justify-around">
            <h1 className="text-3xl text-white font-bold max-md:hidden mt-8">
              Administração de Candidatos
            </h1>
            <button
              onClick={abrirModal}
              className="flex gap-2 bg-blue-600 text-white font-semibold rounded-lg p-2 max-md:static max-md:mt-8 absolute top-10 right-0"
            >
              <Adicionar />Adicionar
            </button>
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
              ? candidatos
                  .filter((candidato) =>
                    candidato.nome
                      .toLowerCase()
                      .includes(termoDeBusca.toLowerCase()) ||
                    candidato.numero.toString().includes(termoDeBusca)
                  )
                  .map((candidato, index) => (
                    <Lista
                      key={index}
                      id={candidato.id}
                      nome={candidato.nome}
                      numero={candidato.numero}
                      partido={candidato.partido}
                      biografia={candidato.biografia}
                      propostas={candidato.propostas}
                    />
                  ))
              : candidatos.map((candidato, index) => (
                  <Lista
                    key={index}
                    id={candidato.id}
                    nome={candidato.nome}
                    numero={candidato.numero}
                    partido={candidato.partido}
                    biografia={candidato.biografia}
                    propostas={candidato.propostas}
                  />
                ))}
          </div>
        </div>
        <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
          <div className="bg-blue-900 text-black p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Formulário de Cadastro</h2>
            <form onSubmit={handleSubmit} className="py-1">
              {/* Input da imagem */}
              <label htmlFor="imagem_candidato"/>
              <input
                type="file"
                id="imagem_candidato"
                name="imagem"
                accept="image/*"
                onChange={handleChange}
              />
              {errors.imagem && <p className="text-red-500">{errors.imagem}</p>}

              <div className="flex flex-col">
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
                {errors.nome && <p className="text-red-500">{errors.nome}</p>}
              </div>

              <div className="flex flex-col">
                <Input
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                />
                {errors.numero && <p className="text-red-500">{errors.numero}</p>}
              </div>

              <div className="flex flex-col">
                <Input
                  id="partido"
                  name="partido"
                  value={formData.partido}
                  onChange={handleChange}
                />
                {errors.partido && <p className="text-red-500">{errors.partido}</p>}
              </div>

              <div className="flex flex-col">
                <Input
                  id="biografia"
                  name="biografia"
                  value={formData.biografia}
                  onChange={handleChange}
                />
                {errors.biografia && (
                  <p className="text-red-500">{errors.biografia}</p>
                )}
              </div>

              <div className="flex flex-col">
                <Input
                  id="propostas"
                  name="propostas"
                  value={formData.propostas}
                  onChange={handleChange}
                />
                {errors.propostas && (
                  <p className="text-red-500">{errors.propostas}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white font-semibold rounded-lg p-2 my-2 hover:bg-green-700 transition"
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
