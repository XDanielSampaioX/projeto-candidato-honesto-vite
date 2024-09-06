import { createContext, useEffect, useState } from "react";
import axios from 'axios';

type CandidatosContextType = {
    candidatos: Candidato[],
    postCandidato: (newCandidatos: Candidato) => Promise<void>;
    putCandidato: (newCandidatos: Candidato) => Promise<void>;
}

type CandidatosContextProps = {
    children: React.ReactNode
}

const initializeValue: CandidatosContextType = {
    candidatos: [],
    // inicializando a promise vazia
    postCandidato: async () => { },
    putCandidato: async () => { },
};

const CandidatosContext = createContext<CandidatosContextType>(initializeValue);

export const CandidatosContextProvider = ({ children }: CandidatosContextProps) => {
    const [candidatos, setCandidatos] = useState<Candidato[]>([])

    // GET

    const fetchCandidatos = async () => {
        try {
            const response = await axios.get<Candidato[]>(`http://localhost:3000/candidatos`)
            setCandidatos(response.data)
        } catch (error) {
            console.log("erroror ao buscar os candidatos" + error);
        }
    };
    useEffect(() => {
        fetchCandidatos();
    }, []);


    // POST
    const postCandidato = async (candidatos: Candidato) => {
        try {
            await axios.post(`http://localhost:3000/candidatos`, candidatos)
            fetchCandidatos();
        } catch (error) {
            console.log("erro ao adicionar candidato", error)
        }
    }

    // PUT
    const putCandidato = async (candidatos: Candidato) => {
        try {
            await axios.put(`http://localhost:3000/candidatos/${candidatos.id}`, candidatos)
            fetchCandidatos();
        } catch (error) {
            console.log("Erro ao atualizar candidato:", error)
        }
    }


    return (
        <CandidatosContext.Provider value=
            {
                { candidatos, postCandidato, putCandidato  }
            }
        >{children}</CandidatosContext.Provider>
    )
}

export default CandidatosContext;

