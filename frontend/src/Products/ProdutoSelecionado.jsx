import Container from '@mui/material/Container';
import { CssBaseline, Stack } from '@mui/material';

const ProdutoSelecionado = ({ product, onBuy, onAddToCart }) => {
    const { img, title, price } = product;
  
    return (
      <div>
        <Container sx={{ flexGrow: 1 }} maxWidth="lg">
        <CssBaseline />
        <Stack spacing={4}>
            <div className='itemSelecionado'>
            <Stack spacing={4}>

              <div className="product-image">
                <img src={img} alt={title} />
              </div>

              <div className="product-info">
                <div className="product-name">{title}</div>
                <div className="product-price">${price}</div>
              </div>

              <div className="product-comprar">
                <button onClick={() => onBuy(product)}>Comprar</button>
              </div>

              <div className='product-sacola'>
              <button onClick={() => onAddToCart(product)}>Adicionar à Sacola</button>
              </div>
            </Stack>
            </div>
          </Stack>
        </Container>
      </div>
    );
  };
  export default ProdutoSelecionado;