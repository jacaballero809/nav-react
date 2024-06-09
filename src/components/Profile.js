import React, { useState, useEffect } from 'react';
//Importación de Hooks: Se importan los hooks useState y useEffect desde react

const Profile = () => {
  const [name, setName] = useState('');// defino los estados name y email usando useState.
  const [email, setEmail] = useState('');

  useEffect(() => { //useEffect Simula la carga de datos iniciales cuando el componente se monta.
    const fetchData = () => {
      setName('Jaime');
      setEmail('jaime.doe@example.com'); // valores iniciales para name y email.
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Administre la información de su perfil aquí.</p>
      <div>
        <p>Nombre: {name}</p> 
        <p>Correo: {email}</p>
      </div>
    </div>
  );
};

export default Profile;
