import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-center items-center justify-around flex-col py-4 bg-blue-900 text-white font-semibold">
          <ul className="flex justify-around gap-10 max-sm:flex-col max-sm:gap-2">
            <li>© 2024 - Todos os direitos reservados.</li>
            <div className="flex gap-10 max-sm:flex-col max-sm:gap-2">
              <li> <button>Política de Privacidade</button> </li>
              <li> <Link to="/contato">Contato</Link> </li>
            </div>
          </ul>
    </footer>
  );
};

export default Footer;
