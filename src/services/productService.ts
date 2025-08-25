import type { Produto } from "../models/types.js";

export function filtrarProdutosPorCategoria(
  produtos: Produto[],
  categoria: string
): Produto[] {
  return produtos.filter((produto) => produto.categoria === categoria);
}
