import { useContext } from "react";
import LikeAndDisLikeContext from "../hooks/contexts/LikeAndDisLikeContext";
import DisLike from "../assets/DisLike";
import Like from "../assets/Like";

export default function LikeAndDisLike(candidato: Candidato) {
    const { like, disLike, patchLike, patchDisLike } = useContext(LikeAndDisLikeContext);

    return (
            <div className="flex gap-2 w-full">
                <button className="w-full" onClick={() => patchLike(candidato)}>
                    <div className="flex p-2 justify-center gap-2 bg-blue-800 text-white rounded-md">
                        <Like />
                        {like}
                    </div>
                </button>
                <button className="w-full" onClick={() => patchDisLike(candidato)}>
                    <div className="flex p-2 justify-center gap-2 bg-red-700 text-white rounded-md">
                        <DisLike />
                        {disLike}
                    </div>
                </button>
            </div>
    );
}