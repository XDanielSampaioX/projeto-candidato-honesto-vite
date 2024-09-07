import { createContext, useEffect, useState } from "react";
import axios from 'axios';

type CandidatosContextType = {
    candidatos: Candidato[],
    postCandidato: (newCandidato: Candidato) => Promise<void>;
    putCandidato: (candidato: Candidato) => Promise<void>;
    deleteCandidato: (id: number) => Promise<void>
}

type CandidatosContextProps = {
    children: React.ReactNode;
}

const deleteCandidato = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/candidatos/${id}`);
      fetchCandidatos(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.log("Erro ao deletar candidato:", error);
    }
  };

const CandidatosContext = createContext<CandidatosContextType>(
    {
        candidatos: [],
        postCandidato: async () => {},
        putCandidato: async () => {},
        deleteCandidato: async () => {},
    }
);

export const CandidatosContextProvider = ({ children }: CandidatosContextProps) => {
    const [candidatos, setCandidatos] = useState<Candidato[]>([]);

    // GET
    const fetchCandidatos = async () => {
        try {
            const response = await axios.get<Candidato[]>(`http://localhost:3000/candidatos`);
            setCandidatos(response.data);
        } catch (error) {
            console.log("Erro ao buscar os candidatos:", error);
        }
    };

    useEffect(() => {
        fetchCandidatos();
    }, []);

    // POST
    const postCandidato = async (candidato: Candidato) => {
        try {
            await axios.post(`http://localhost:3000/candidatos`, candidato);
            fetchCandidatos();
        } catch (error) {
            console.log("Erro ao adicionar candidato:", error);
        }
    };

    // PUT
    const putCandidato = async (candidato: Candidato) => {

        try {
            await axios.put(`http://localhost:3000/candidatos/${candidato.id}`, candidato);
            console.log(candidato.id)
            fetchCandidatos();
        } catch (error) {
            console.log("Erro ao atualizar candidato:", error);
        }
    };

    return (
        <CandidatosContext.Provider value={{ candidatos, postCandidato, putCandidato, deleteCandidato}}>
            {children}
        </CandidatosContext.Provider>
    );
}

export default CandidatosContext;