import { useState } from 'react';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import LogoutButton from './components/LogoutButton';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [projects, setProjects] = useState([]);

  if (!token) {
    return <LoginForm onLogin={setToken} />;
  }

  return (
    <div>
      <LogoutButton
        token={token}
        onLogout={() => {
          setToken(null);
          setProjects([]);
        }}
      />
      <ProjectList token={token} projects={projects} setProjects={setProjects} />
      <AddProjectForm
        token={token}
        onAdded={(project) => setProjects((prev) => [...prev, project])}
      />
    </div>
  );
}
