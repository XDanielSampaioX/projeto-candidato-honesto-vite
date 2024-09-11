type PorqueVotarProps = {
    children: React.ReactNode
}

export default function PorqueVotar(props: PorqueVotarProps) {

    return (
        <>
            <div className="flex fle-col justify-between">
                {props.children}
            </div>
        </>
    )
};
