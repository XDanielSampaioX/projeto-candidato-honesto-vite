import axios from "axios";
import { createContext, useState } from "react";

type LikeAndDisLikeContextType = {
    like: number;
    disLike: number;
    patchLike: (candidato: Candidato) => Promise<void>;
    patchDisLike: (candidato: Candidato) => Promise<void>;
};

type LikeAndDisLikeContextProps = {
    children: React.ReactNode;
};

const initialValue = {
    like: 0,
    disLike: 0,
    patchLike: async () => { },
    patchDisLike: async () => { },
};

const LikeAndDisLikeContext = createContext<LikeAndDisLikeContextType>(initialValue);

export const LikeAndDisLikeContextProvider = ({ children }: LikeAndDisLikeContextProps) => {
    const [like, setLike] = useState<number>(0);
    const [disLike, setDisLike] = useState<number>(0);

    const fetchCandidato = async (id: string | undefined) => {
        try {
            const response = await axios.get(`http://localhost:3000/candidatos/${id}`);
            return response.data;
        } catch (error) {
            console.log("Erro ao buscar zzz:", error);
        }
    };

    const patchLike = async (candidato: Candidato) => {

        await fetchCandidato(candidato.id);
        const candidatoAtual = await fetchCandidato(candidato.id);
        try {
            const novoLike = (candidatoAtual.like || like) + 1; // Incrementa o like
            await axios.patch(`http://localhost:3000/candidatos/${candidato.id}`, {
                like: novoLike, // Atualiza o like no servidor
            });
            setLike(novoLike); // Atualiza o estado localmente
        } catch (error) {
            console.log("Erro ao atualizar like:", error);
        }
    };

    const patchDisLike = async (candidato: Candidato) => {
        try {
            const candidatoAtual = await fetchCandidato(candidato.id);
            const novoDisLike = (candidatoAtual.disLike || disLike) + 1; // Incrementa o dislike
            await axios.patch(`http://localhost:3000/candidatos/${candidato.id}`, {
                disLike: novoDisLike, // Atualiza o dislike no servidor
            });
            setDisLike(novoDisLike); // Atualiza o estado localmente
        } catch (error) {
            console.log("Erro ao atualizar dislike:", error);
        }
    };

    return (
        <LikeAndDisLikeContext.Provider value={{ like, disLike, patchLike, patchDisLike }}>
            {children}
        </LikeAndDisLikeContext.Provider>
    );
};

export default LikeAndDisLikeContext;
