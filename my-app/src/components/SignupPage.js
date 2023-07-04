import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Aqui você pode adicionar a lógica de registro do usuário
    console.log('Nome de usuário:', username);
    console.log('E-mail:', email);
    console.log('Senha:', password);
    // Adicione a lógica de registro adequada, como chamar uma API para criar um novo usuário
  };

  return (
    <div>
      <h2>Página de Cadastro</h2>
      <form>
        <div>
          <label>Nome de usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="button" onClick={handleSignup}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
