import React from 'react';
import { Produto as ProdutoType } from '../types/Produto';

interface ProdutoProps {
  produto: ProdutoType;
  adicionarAoCarrinho: (produto: ProdutoType) => void;
}

export const Produto: React.FC<ProdutoProps> = ({ produto, adicionarAoCarrinho }) => {
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