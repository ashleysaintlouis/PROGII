import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../ValidationPages/SignupValidation';
import axios from 'axios';

const Inscrever = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3010/inscrever', values);
        
        if (response.status === 200) {
          setSuccessMessage('Inscrição realizada com sucesso! Redirecionando para a página de login...');
          setTimeout(() => {
            navigate('/entrar');
          }, 2000);
        } else {
          alert('Erro ao processar a inscrição. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao processar a inscrição:', error);
        alert('Ocorreu um erro ao processar a inscrição. Tente novamente mais tarde.');
      }
    }
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-10 w-25">
        <h2>Inscrever-se</h2> <br />
        {successMessage && <div className="text-success">{successMessage}</div>}
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome">
              <strong>Nome</strong>
            </label>
            <input
              type="text"
              placeholder="Digite seu nome Completo"
              name="name"
              onChange={handleInput}
              className="form-control rounded-1"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>E-mail</strong>
            </label>
            <input
              type="email"
              placeholder="Enter E-mail"
              name="email"
              onChange={handleInput}
              className="form-control rounded-1"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Senha</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              autoComplete="current-password"
              className="form-control rounded-1"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button className="btn btn-success w-100 rounded-1"> Inscrever-se</button>
          <p></p>
          <Link to="/entrar" className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none">
            Entrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Inscrever;
