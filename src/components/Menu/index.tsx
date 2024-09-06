import { useContext } from "react";
import { Search } from "../../assets/Search";
import { InputContext } from "../../hooks/contexts/InputContext";
import { Link } from "react-router-dom";

export default function Menu() {

    const { termoDeBusca, setTermoDeBusca } = useContext(InputContext)

    const quandoMudar = (e: { target: { value: string; }; }) => {
        setTermoDeBusca(e.target.value);
    };

    return (
        <div className="flex justify-around items-center w-full m-auto -mx-5 bg-blue-900 rounded-md gap-10 p-4">
            <div className="flex items-center gap-10">
                <div className="w-14 h-14 rounded-full bg-white" />
                <nav className="text-white font-semibold">
                    <ul className="flex gap-10">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-white font-semibold relative">
                <label className="max-md:hidden" htmlFor="inputCandidato">Buscar Candidato:</label>
                <input className="rounded-sm m-3 px-2 text-black max-lg:w-36" type="text"
                    id="inputCandidato" placeholder="Procurar registro..."
                    value={termoDeBusca} onChange={quandoMudar} />
                <Search className="absolute top-3.5 right-5 textAzul" />
            </div>
        </div>
    )
};
