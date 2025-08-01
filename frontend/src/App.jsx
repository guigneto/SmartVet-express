import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import AnimaisPage from './pages/AnimaisPage';
import HomePage from './pages/InicioPage';
import FilaPage from './pages/FilaPage';
import ProtectedRoute from './components/ProtectedRoute';

// Componente simples para a página inicial
function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login não tem a Navbar */}
        <Route path="/" element={<LoginPage />} />

        <Route path="/registrar" element={<RegistroPage />} />

        {/* Rotas dentro do MainLayout (com a Navbar) */}
        <Route path="/home" element={
          <ProtectedRoute>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/animais" element={
          <ProtectedRoute>
            <MainLayout>
              <AnimaisPage />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/fila-atendimento" element={
          <ProtectedRoute>
            <MainLayout>
              <FilaPage />
            </MainLayout>
          </ProtectedRoute>
        } />

        {/* Redireciona qualquer outra rota para a página inicial */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;