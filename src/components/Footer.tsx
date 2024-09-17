import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-center items-center justify-around flex-col py-7 bg-blue-900 text-white font-semibold">
      <div className="flex justify-around max-md:flex-col">
          <div>
            <p>© 2024 - Todos os direitos reservados.</p>
          </div>
          <div>
            <ul className="flex justify-around gap-10">
              <li> <Link to="/contato">Contato</Link> </li>
              <li> <button>Política de Privacidade</button> </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
