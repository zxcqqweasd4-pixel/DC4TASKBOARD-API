import { useState } from 'react';
import { api } from '../api';

export default function AddProjectForm({ token, onAdded }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const data = await api('/projects', {
        method: 'POST',
        token,
        body: { name },
      });
      onAdded(data.data);
      setName('');
    } catch (err) {
      setError('Could not add project.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="New project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add project</button>
    </form>
  );
}
