import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import AnimaisPage from './pages/AnimaisPage';
import HomePage from './pages/InicioPage';
import FilaPage from './pages/FilaPage';

// Componente simples para a página inicial
function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login não tem a Navbar */}
        <Route path="/" element={<LoginPage />} />

        {/* Rotas dentro do MainLayout (com a Navbar) */}
        <Route path="/home" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/animais" element={
          <MainLayout>
            <AnimaisPage />
          </MainLayout>
        } />
        <Route path="/fila-atendimento" element={
          <MainLayout>
            <FilaPage />
          </MainLayout>
        } />

        {/* Redireciona qualquer outra rota para a página inicial */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;