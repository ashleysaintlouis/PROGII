import React from 'react';
import { CssBaseline, Stack } from '@mui/material';
import { ContatoData } from '../Products/HomeItens';
import { Link } from "react-router-dom";

const Contato = () => {
  return (
    <div className='Contato'>
      <CssBaseline />
      <Stack spacing={4} alignItems={'center'}>
        <br /> <br /> <br /> <br /> <br /> 
        <stack direction="row" spacing={2}>
        <div className='imgContato'>
          <img src="./atendimento.png" alt="Atendimento" style={{ width: '100%', height: 'auto' }} />
        </div>
        </stack>
        <div className='Contato'>
          <ul style={{ listStyle: 'none' }}>
            {ContatoData.map((item, index) => (
              <li key={index}>
                <Stack spacing={4} alignItems={'center'}>
                  <Link className={item.cName} target="_blank" rel={item.URL}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </Stack>
              </li>
            ))}
          </ul>
          <br /><br /><br /><br /> <br /> <br />
        </div>
      </Stack>
    </div>
  );
};

export default Contato;
