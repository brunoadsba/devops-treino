import React from 'react';
import { Produto as ProdutoType } from '../types/Produto';
import { Carrinho } from './Carrinho'; // Corrigido para importar 'Carrinho'

interface ProdutoProps {
  produto: ProdutoType;
}

export const Produto: React.FC<ProdutoProps> = ({ produto }) => {
  const adicionarAoCarrinho = (produto: ProdutoType) => {
    // Lógica para adicionar o produto ao carrinho
    console.log(`${produto.nome} adicionado ao carrinho.`);
  };

  return (
    <div className="produto">
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};