import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import ComprarProduto from "./routes/ComprarProduto";
import NavigateBar from "./component/NavigateBar";
import Home from "./routes/Home";
import Servico from "./routes/Servico";
import Inscrever from "./routes/Inscrever";
import Contato from "./routes/Contato";
import Sobre from "./routes/Sobre";
import Entrar from "./routes/Entrar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigateBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/inscrever" element={<Inscrever />} />
          <Route path="/ComprarProduto" element={<ComprarProduto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
