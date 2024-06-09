import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const Home = () => {
  const { formData } = useContext(FormContext);

  return (
    <div className="home-container">
      <h1 className="home-title">Eventos</h1>
      <p className="home-subtitle">Bienvenido!</p>
      <div className="eventos">
        {formData.length > 0 ? (
          <ul className="eventos-list">
            {formData.map((data, index) => (
              <li key={index} className="evento-item">
                <h3 className="evento-name">{data.username}</h3>
                <p className="evento-info"><strong>Fecha:</strong> {data.password}</p>
                <p className="evento-info"><strong>Descripción:</strong> {data.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay eventos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default Home;