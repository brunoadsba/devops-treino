import React, { useState, useEffect } from 'react';
import { Carrinho } from './Carrinho';
import { Produto } from './Produto';
import { Produto as ProdutoType } from '../types/Produto';

const App: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  useEffect(() => {
    // Buscar produtos do backend
    fetch('/api/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div className="App">
      <h1>Minha Loja</h1>
      <div className="produtos">
        {produtos.map(produto => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
      <Carrinho />
    </div>
  );
};

export default App;