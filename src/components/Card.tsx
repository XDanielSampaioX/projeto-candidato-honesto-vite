import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";
import LikeAndDisLike from "./LikeAndDisLike";

export default function Card(props: Candidato) {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <div className="relative text-center bg-white rounded-md w-72 h-auto">
            <button onClick={abrirModal} className="w-full h-full">
                <div className="flex max-lg:flex-col items-center justify-evenly gap-10 p-4 h-96">
                    {props.imagem ?
                        <div className="bg-blue-900 flex justify-center items-center rounded-full absolute top-3 w-28 h-28">
                            <img src={props.imagem} alt="Imagem" className="w-24 h-24 object-cover rounded-full" />
                        </div> :
                        <div className="bg-blue-900 flex justify-center items-center rounded-full absolute top-3 w-28 h-28">
                            <FaUser className="w-10 h-10 " />
                        </div>
                    }

                    <div className="flex flex-col items-center pt-28">
                        <div className="font-bold text-lg">{props.nome}</div>
                        <div className="flex flex-col">
                            <div>{props.numero}</div>
                            <div>{props.partido}</div>
                        </div>
                        <div className="p-2">{props.propostas}</div>
                    </div>
                </div>
            </button>

            <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
                <div className="flex flex-col justify-center items-center gap-3 mb-4 -m-5">
                    {/* Caso a imagem não esteja setada, o FaUser sera exibido no lugar da imagem */}
                    {props.imagem ?
                        <div className="bg-blue-900 flex justify-center items-center rounded-full w-28 h-28">
                            <img src={props.imagem} alt="Imagem" className="w-24 h-24 object-cover rounded-full" />
                        </div> :
                        <div className="bg-blue-900 flex justify-center items-center rounded-full w-28 h-28">
                            <FaUser className="w-10 h-10 " />
                        </div>
                    }
                    <p className="text-xl font-semibold">{props.nome}</p>
                    <p>Número do partido: {props.numero}</p>
                    <p>Partido: {props.partido}</p>
                    <p>{props.biografia}</p>
                    <p>{props.propostas}</p>
                </div>
                <LikeAndDisLike id={props.id} nome={props.nome} numero={props.numero} biografia={props.biografia}></LikeAndDisLike>
            </Modal>
        </div>
    );
}
