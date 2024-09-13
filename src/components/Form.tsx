import { useContext, useState } from "react";
import CandidatosContext from "../hooks/contexts/CandidatosContext";

export default function Form(props: Candidato) {

    const { putCandidato } = useContext(CandidatosContext);

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
    };
    return (
        <>
            <h2 className="text-2xl font-semibold mb-3">Formulário de Cadastro</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-md mb-2">
                <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="mb-2">
                    <label htmlFor="numero" className="block text-sm font-medium mb-1 ">Número</label>
                    <input
                        id="numero"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="partido" className="block text-sm font-medium mb-1 text-white">Partido</label>
                    <input
                        id="partido"
                        name="partido"
                        value={formData.partido}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="biografia" className="block text-sm font-medium mb-1 text-white">Biografia</label>
                    <textarea
                        id="biografia"
                        name="biografia"
                        value={formData.biografia}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="propostas" className="block text-sm font-medium mb-1 text-white">Propostas</label>
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
        </>
    )
};
