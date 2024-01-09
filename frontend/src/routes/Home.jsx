import React from 'react';
import ProductList from '../Products/ProductList'; 
import { ProductData, ProductDataVerao } from '../Products/HomeItens';
import { CssBaseline, Stack } from '@mui/material';
import './styles.css';

const Home = () => {
  return (
    <div className='Home'>
      <CssBaseline />
      <Stack spacing={4} alignItems={'center'}>
        <br /> <br /> <br /> <br /> <br /> 

        <div className='imgHome'>
          <img src="imagemHome.jpg" alt="Crochet confort" />
        </div>

        <div className='ProductListHome'>
        <h3 style={{top: "10px", textAlign: 'center'}}> <b>Novidade</b> <br /></h3>
        <ProductList products={ProductData} />
        </div>

        <div className='ProductListHome'>
          <h3 style={{top: "10px", textAlign: 'center'}}> <b>Promoção do Natal</b></h3>
        <ProductList products={ProductDataVerao} />
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        </Stack>
    </div>
  );
}

export default Home;
