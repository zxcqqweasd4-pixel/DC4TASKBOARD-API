import { useEffect, useState } from 'react';
import { api } from '../api';

export default function ProjectList({ token, projects, setProjects }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await api('/projects', { token });
        if (!ignore) setProjects(data.data);
      } catch (err) {
        if (!ignore) setError('Could not load projects.');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => { ignore = true; };
  }, [token, setProjects]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} — {project.tasks_count ?? 0} tasks
          </li>
        ))}
      </ul>
    </div>
  );
}
