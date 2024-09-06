interface ModalProps {
    abrirModal: boolean;
    fecharModal: () => void;
    children: React.ReactNode
}

export default function Modal({ abrirModal, fecharModal, children }: ModalProps) {
    if (!abrirModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex justify-end">
                    <button onClick={fecharModal} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
};
