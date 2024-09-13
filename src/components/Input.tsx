type InputPostProps = {
    id : string,
    name : string,
    value : string | undefined,
    onChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function Input(props: InputPostProps) {
    return (
        <>
            <label htmlFor={props.id} className="block text-sm font-medium text-white">{props.name}</label>
            <input
                id= {props.id}
                name= {props.name}
                value= {props.value}
                onChange={props.onChange}
                className="p-2 border border-gray-300 rounded"
            />
        </>
    )
};
