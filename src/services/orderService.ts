import type { Pedido, ItemPedido, RelatorioVendas } from "../models/types.js";

export function calcularTotalCarrinho(
  itens: ItemPedido[],
  percentualDesconto: number = 0
): number {
  const subtotal = itens.reduce((acumulador, item) => {
    return acumulador + item.produto.preco * item.quantidade;
  }, 0);
  const valorDesconto = subtotal * (percentualDesconto / 100);
  const total = subtotal - valorDesconto;
  return parseFloat(total.toFixed(2));
}

export function buscarPedidosDeUmCliente(
  pedidos: Pedido[],
  clienteId: number
): Pedido[] {
  return pedidos.filter((pedido) => pedido.cliente.id === clienteId);
}

export function criarRelatorioDeVendas(pedidos: Pedido[]): RelatorioVendas {
  return pedidos.reduce<RelatorioVendas>(
    (relatorio, pedido) => {
      const valorPedidoAtual = pedido.itens.reduce((subtotal, item) => {
        return subtotal + item.produto.preco * item.quantidade;
      }, 0);

      relatorio.valorTotalVendido += valorPedidoAtual;

      pedido.itens.forEach((item) => {
        relatorio.totalDeItensVendidos += item.quantidade;
        const categoria = item.produto.categoria;
        relatorio.categoriasMaisVendidas[categoria] =
          (relatorio.categoriasMaisVendidas[categoria] || 0) + item.quantidade;
      });

      return relatorio;
    },
    {
      valorTotalVendido: 0,
      totalDeItensVendidos: 0,
      categoriasMaisVendidas: {},
    }
  );
}
