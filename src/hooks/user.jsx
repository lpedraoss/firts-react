import React, { useEffect, useState } from 'react';

function User() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://646d4d739c677e232189e51a.mockapi.io/user');
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://646d4d739c677e232189e51a.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdate = async (userId) => {
    try {
      const response = await fetch(`https://646d4d739c677e232189e51a.mockapi.io/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const updatedUser = await response.json();
      const updatedUsers = users.map((user) => (user.id === userId ? updatedUser : user));
      setUsers(updatedUsers);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await fetch(`https://646d4d739c677e232189e51a.mockapi.io/user/${userId}`, {
        method: 'DELETE',
      });
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleCreate}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Create</button>
      </form>
      {users.length === 0 ? (
        <h2>No users</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}: <span>{user.email.toLowerCase()}</span>
              <button onClick={() => handleUpdate(user.id)}>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default User;
