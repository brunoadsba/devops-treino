import { useState, useCallback } from 'react';
import { Produto } from '../types/Produto';
import React from 'react';

interface CarrinhoProps {
  // ... outras props existentes ...
}

export function Carrinho({ /* ... outras props ... */ }: CarrinhoProps) {
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);

  const adicionarAoCarrinho = useCallback((produto: Produto) => {
    setItensCarrinho(prevItens => {
      const itemExistente = prevItens.find(item => item.id === produto.id);
      if (itemExistente) {
        return prevItens.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prevItens, { ...produto, quantidade: 1 }];
    });
  }, []);
  const removerDoCarrinho = useCallback((id: number) => {
    setItensCarrinho(prevItens => prevItens.filter(item => item.id !== id));
  }, []);

  const total = itensCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div>
      {/* ... código existente ... */}
      <ul>
        {itensCarrinho.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)}
            <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R$ {total.toFixed(2)}</p>
      {/* ... código existente ... */}
    </div>
  );
}