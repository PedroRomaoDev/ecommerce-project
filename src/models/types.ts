export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
}

export interface ItemPedido {
  produto: Produto;
  quantidade: number;
}

export interface Pedido {
  id: number;
  cliente: Cliente;
  itens: ItemPedido[];
  data: Date;
}

// relatorio
export interface RelatorioVendas {
  valorTotalVendido: number;
  totalDeItensVendidos: number;
  categoriasMaisVendidas: Record<string, number>;
}