import React from 'react'
import { CssBaseline, Stack } from '@mui/material';
import './styles.css';

const Sobre = () => {
  return (
    <div className='Sobre'>
      <CssBaseline />
        <Stack spacing={4} alignItems={'center'}>
          <br /> <br /> <br /> <br /> <br /> 
          <div className='imgHome'>
            <img src="imagemSobre.jpg" alt="Crochet Praia" />
          </div>
          <div className='TextoSobre'>
           <h1><b>
            Quem somos 
            </b></h1>
            <br />
            <p>
             Virtuous Styles & Crochets é uma loja dedicada ao crochê,
             oferecendo uma variedade de produtos, <br />
             incluindo Cropped De Crochê  elegantes e Sousplat De Crochê. 
             Nosso compromisso com a qualidade artesanal destaca-se em cada peça, 
             combinando estilo e conforto. <br />
             Na essência da Virtuous Styles & Crochets, valorizamos a criatividade, 
             dedicação e a singularidade de cada item, proporcionando aos clientes 
             uma experiência única no universo do crochê. <br />
             Bem-vindo ao nosso mundo de elegância e exclusividade. <br />
            </p>

          <p>Top de crochê tomara que caia com amarração nas costas e forro 
            com tecido na mesma cor da linha predominante (preta).<br/>
             Combinação de cores vibrantes.<br/>
            Aproveite a temporada com estilo e confiança, escolhendo esse o top verão como 
            o complemento perfeito para looks marcantes e autênticos.<br/>
            </p>
            <br /><br /><br /><br />
          </div>
        </Stack>
    </div>
  )
}

export default Sobre;

