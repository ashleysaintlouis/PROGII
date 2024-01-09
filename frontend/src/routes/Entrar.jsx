import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import validation from '../ValidationPages/LoginValidation';

const Entrar = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));

    if (!errors.email && !errors.password) {
      try {
        const response = await axios.post('http://localhost:3010/entrar', values);
        
        if (response.data === 200) {
          navigate('/');
        } else {
          alert('Credenciais inválidas. Por favor, verifique e tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
      }
    }
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2><b>Entrar</b></h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>E-mail</strong>
            </label>
            <input
              type='email'
              placeholder='Enter E-mail'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Senha</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Entrar
          </button>
          <p></p>
          <Link to='/inscrever' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Criar uma conta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Entrar;
