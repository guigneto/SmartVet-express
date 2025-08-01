import api from "./api";

const endpoint = `/SmartVet/auth`;

// Armazena o token no localStorage
const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Recupera o token
const getToken = () => {
  return localStorage.getItem('token');
};

// Remove o token
const clearToken = () => {
  localStorage.removeItem('token');
};

export const signUp = async (formData) => {
  const response = await api.post(`${endpoint}/sign-up`, formData);
  const { token } = response.data;
  if (token) setToken(token);
  return response.data;
};

export const signIn = async (formData) => {
  const response = await api.post(`${endpoint}/sign-in`, formData);
  const token = response.data.data.token;
  if (token) setToken(token);
  return response.data;
};

export const signOut = () => {
  clearToken();
  // Redirecionamento opcional
  window.location.href = '/login';
};

export const isAuthenticated = () => {
  return !!getToken();
};

export default {
  signUp,
  signIn,
  signOut,
  isAuthenticated,
  getToken,
};
