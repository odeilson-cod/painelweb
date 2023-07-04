import React, { useState } from 'react';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simula a autenticação bem-sucedida
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simula o logout
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Bem-vindo!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;

