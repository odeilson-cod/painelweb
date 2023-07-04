import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação real
    if (username === 'admin' && password === '12345') {
      onLogin();
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Página de Login</h2>
        <form>
          <div>
            <label>usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
