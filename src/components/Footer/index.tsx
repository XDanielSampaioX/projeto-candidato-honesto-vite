const Footer = () => {
  return (
    <div className="w-full text-center items-center justify-around flex-col py-8 bg-blue-900 text-white font-semibold fixed bottom-0">
      <footer className=" ">
        <div className="flex justify-around">
          <p>© 2024 - Todos os direitos reservados.</p>
          <ul className="flex  gap-10">
            <li> <button> Sobre nós</button></li>
            <li> <button>Contato</button> </li>
            <li> <button>Política de Privacidade</button> </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
