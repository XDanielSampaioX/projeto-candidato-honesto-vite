import { SetStateAction, useState } from "react"

type PorqueVotarProps = {
    children: React.ReactNode
}

export default function PorqueVotar({children}: PorqueVotarProps) {

    const [sugestoes, setSugestoes] = useState("")

    const quandoMudar = (e: { target: { value: SetStateAction<string> } }) => {
        setSugestoes(e.target.value)
    }
    return (
        <>
            <form className="flex flex-col ">
                <label className="py-1" htmlFor="sugestoes">Sugestões</label>
                <input onChange={quandoMudar} value={sugestoes} className="shadow-md bg-gray-300 p-2 rounded-md h-10" type="text" id="sugestoes" />
                <div className="flex fle-col justify-between">
                    <button
                        className="mt-4 bg-blue-600 text-white px-14 py-2 rounded-md hover:bg-blue-800">
                        Enviar
                    </button>
                    {children}
                </div>
            </form>
        </>
    )
};
