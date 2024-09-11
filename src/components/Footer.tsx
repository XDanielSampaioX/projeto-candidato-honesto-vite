const Footer = () => {
  return (
    <footer className="w-full text-center items-center justify-around flex-col py-8 bg-blue-900 text-white font-semibold fixed bottom-0">
      <div className="flex justify-around max-md:flex-col">
          <div>
            <p>© 2024 - Todos os direitos reservados.</p>
          </div>
          <div>
            <ul className="flex justify-around gap-10">
              <li> <button> Sobre nós</button></li>
              <li> <button>Contato</button> </li>
              <li> <button>Política de Privacidade</button> </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
