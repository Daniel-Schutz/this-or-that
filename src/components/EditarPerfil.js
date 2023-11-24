import React, { useState } from 'react';
import '../styles/EditarPerfil.css';
import { useNavigate, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app'

function EditarPerfil() {
  const user = firebase.auth().currentUser;
  const [formData, setFormData] = useState({
    username: user.displayName,
    email: user.email,
    senhaAtual: '',
    novaSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (formData.novaSenha){
      await user.updatePassword(formData.novaSenha)
    }
    if (formData.email !== user.email){
      await user.updateEmail(formData.email)
    }
    if (formData.username !== user.username){
      await user.updateProfile({
        displayName: formData.username
      })
    }
    console.log(user);
  };

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
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="senhaAtual">Senha Atual:</label>
          <input
            type="password"
            id="senhaAtual"
            name="senhaAtual"
            value={formData.senhaAtual}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="novaSenha">Nova Senha:</label>
          <input
            type="password"
            id="novaSenha"
            name="novaSenha"
            value={formData.novaSenha}
            onChange={handleChange}
          />
        </div>
        <div className='Botoes'>
          <button onClick={handleVoltar}>Cancelar edições</button>
          <button type="submit">Salvar edições</button>
        </div>
          
   
        
      </form>
      </main>

      <footer>
        <p>&copy; This or That - The Game. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default EditarPerfil;
