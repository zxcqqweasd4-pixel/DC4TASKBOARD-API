import { api } from '../api';

export default function LogoutButton({ token, onLogout }) {
  async function handleLogout() {
    try {
      await api('/logout', { method: 'POST', token });
    } finally {
      localStorage.removeItem('token');
      onLogout();
    }
  }

  return <button onClick={handleLogout}>Log out</button>;
}
