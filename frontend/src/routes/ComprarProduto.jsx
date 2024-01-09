import React from 'react';
import ProdutoSelecionado from '../Products/ProdutoSelecionado';
import { ProductData } from '../Products/HomeItens';
import { CssBaseline, Stack } from '@mui/material';

const ComprarProduto = () => {
  const sampleProduct = ProductData[0]; // Vamos usar o primeiro produto como exemplo

  const handleBuy = (product) => {
    // Lógica para comprar o produto
    console.log(`Produto comprado: ${product.title}`);
  };

  const handleAddToCart = (product) => {
    // Lógica para adicionar o produto à sacola
    console.log(`Produto adicionado à sacola: ${product.title}`);
  };

  return (
    <div>
      <CssBaseline />
      <Stack spacing={5}>
      <br /> <br /> <br /> <br /> <br /> 
      <h1>Página de Produto</h1>
      <ProdutoSelecionado product={sampleProduct} onBuy={handleBuy} onAddToCart={handleAddToCart} />
      </Stack>
    </div>
  );
};

export default ComprarProduto;
