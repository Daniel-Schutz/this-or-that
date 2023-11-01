import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import '../styles/PaginaInicial.css';
import { useNavigate } from 'react-router-dom';


function PaginaInicial() {
  const handleJogarClick = () => {
    // Adicione a lógica para redirecionar para a página de jogo
    console.log('Clicou em Jogar');
  };

  const handleVerRankingClick = () => {
    // Adicione a lógica para redirecionar para a página de ranking
    console.log('Clicou em Ver Ranking');
  };

  const handleEditarPerfilClick = () => {
    // Adicione a lógica para redirecionar para a página de edição de perfil
    console.log('Clicou em Editar Perfil');
  };

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); 
  };

  return (
  <div>
      <header>
        <h1>Meu Cabeçalho</h1>
        <nav>
            <ul>
                <li><a href="#">Página Inicial</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
    <h1>This or That - The Game</h1>
    <div className="corpo">
      <div className="header">

        <Link to="/editar-perfil">
        <p className="editar-perfil">Olá Usuário! <a className='underlink'>Editar Perfil</a></p>
        </Link>
      </div>
      <div className="botoes-principais">
        <Link to="/escolher-opcoes">
        <button onClick={handleJogarClick}>Jogar</button>
        </Link>
        <Link to="/ranking">
        <button onClick={handleVerRankingClick}>Ranking</button>
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
