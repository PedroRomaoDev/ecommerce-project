import { produtos, pedidos } from "./data/mockDatabase.js";
import { filtrarProdutosPorCategoria } from "./services/productService.js";
import {
  calcularTotalCarrinho,
  buscarPedidosDeUmCliente,
  criarRelatorioDeVendas,
} from "./services/orderService.js";

console.log("=============== E-COMMERCE ===============");
console.log(
  "\n🛒 1. Calculando total do carrinho do pedido 1001 com 5% de desconto:"
);
const pedidoAna = pedidos[0]!;
const totalPedidoAna = calcularTotalCarrinho(pedidoAna.itens, 5);
console.log(`O total do pedido ${pedidoAna.id} é: R$ ${totalPedidoAna}`);

console.log("\n💻 2. Filtrando produtos da categoria 'Eletrônicos':");
const produtosEletronicos = filtrarProdutosPorCategoria(
  produtos,
  "Eletrônicos"
);
console.log(produtosEletronicos);

console.log("\n👩‍💼 3. Buscando todos os pedidos da cliente Ana (ID 1):");
const pedidosDaAna = buscarPedidosDeUmCliente(pedidos, 1);
console.log(JSON.stringify(pedidosDaAna, null, 2));

console.log("\n📊 4. Criando relatório geral de vendas:");
const relatorioFinal = criarRelatorioDeVendas(pedidos);
console.log("Relatório Final de Vendas:", relatorioFinal);

console.log("TAMO JUNTO LUQUINHAS");
