import React, { useState, useContext } from 'react';
import { FormContext } from './FormContext';

const FormularioCompleto = () => {
  const { addFormData } = useContext(FormContext);

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? event.target.checked : value,
    });

    let fieldErrors = errors;
    switch (name) {
      case 'username':
        fieldErrors.username = value.length < 1 ? 'Este campo es requerido' : '';
        break;
      case 'password':
        fieldErrors.password = value.length < 1 ? 'Este campo es requerido' : '';
        break;
      case 'email':
        fieldErrors.email = value.length < 1 ? 'Este campo es requerido' : '';
        break;
      default:
        break;
    }
    setErrors({ ...fieldErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, email } = formValues;
    if (username && password && email && !Object.values(errors).some((error) => error)) {
      addFormData(formValues);
      alert('Evento  registrado');
      setFormValues({
        username: '',
        password: '',
        email: '',
      });
    //   setTimeout(() => {
    //     window.location.href = '/ruta-de-home'; // Reemplaza '/ruta-de-home' con la ruta real de tu componente Home
    //   }, 1000);
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Registro de Evento</h1>
      <div className="row">
        <div className="col-lg-6 mb-6">
          <label>Nombre de evento:</label>
          <input type="text" className="form-control" name="username" value={formValues.username} onChange={handleChange} />
          {errors.username && <span className='error'>{errors.username}</span>}
        </div>
        <div className="col-lg-6 mb-6">
          <label>Fecha:</label>
          <input type="date" className="form-control" name="password" value={formValues.password} onChange={handleChange} />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-6">
          <label>Descripción:</label>
          <textarea className="form-control" name="email" value={formValues.email} onChange={handleChange} />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </form>
  );
};

export default FormularioCompleto;
