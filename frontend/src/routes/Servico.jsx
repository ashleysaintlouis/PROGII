import React from 'react'
import { CssBaseline, Stack } from '@mui/material';
import './styles.css';
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";



const colunas = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nome", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
];

const Serviço = () => {

  const [listaUsuarios, setlistaUsuarios] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
      try {
          const res = await axios.get("/servico");
          setlistaUsuarios(res.data);
          console.log(res.data);
      } catch (error) {
          setlistaUsuarios([]);
      }
  }

  return (
    <div className='Servico'>
      <CssBaseline />
        <Stack spacing={4} alignItems={'center'}>
          <br /> <br /> <br /> <br /> <br /> 
          <stack direction="row" justifyContent="center" alignItems="center" mt={2} spacing={5}>
              <img src="./pessoasSacolas.jpeg" alt="Serviços ofertos" style={{ width: '300px', height: 'auto' }} />
              <img src="./caminhaoEntrega.jpg" alt="Serviços de entrega " style={{ width: '300px', height: 'auto' }} />
          </stack>
          <div className='TextoSobre'>
            <p>
              <br />
              Compras na loja.<br/>
              Entregas. <br />
              <br />
            </p>
            <Box style={{ height: "500px" }}>
                    <DataGrid rows={listaUsuarios} columns={colunas} />
                </Box>
            <br /><br /><br /><br /> <br /> <br />
            </div>
          </Stack>
    </div>
  )
}

export default Serviço

