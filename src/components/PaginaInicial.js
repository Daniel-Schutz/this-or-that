import React from 'react';
import '../styles/PaginaInicial.css';
import { useNavigate, Link } from 'react-router-dom';


function PaginaInicial() {
 
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); 
  };

  return (
    <div>
      <header>
      <nav>
          <ul>
            <li><Link to="/pagina-inicial">Página Inicial</Link></li>
            <li><Link to="/escolher-opcoes">Jogar</Link></li>
            <li><Link to="/ranking">Ranking</Link></li>
          </ul>
        </nav>
        <h1 className='TituloHeader'>This or That - The Game</h1>
        <div className="usuario-editar">
          <p>Olá Usuário!</p>
          <p><Link to="/editar-perfil" className="underlink">Editar Perfil</Link></p>
        </div>
      </header>

      <main>
        <h1>This or That - The Game</h1>
        <div className="corpo">
          <div className="botoes-principais">
            <Link to="/escolher-opcoes">
              <button>Jogar</button>
            </Link>
            <Link to="/ranking">
              <button>Ranking</button>
            </Link>
          </div>
          <div className='voltar'>
            <button onClick={handleVoltar}>Voltar</button>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 Minha Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default PaginaInicial;
