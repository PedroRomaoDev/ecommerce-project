import type { Cliente, Pedido, Produto } from "../models/types.js";

export const clientes: Cliente[] = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@example.com" },
  { id: 2, nome: "Bruno Costa", email: "bruno.costa@example.com" },
];

export const produtos: Produto[] = [
  { id: 101, nome: "Notebook Pro", preco: 7500.0, categoria: "Eletrônicos" },
  { id: 102, nome: "Mouse Sem Fio", preco: 150.0, categoria: "Eletrônicos" },
  { id: 103, nome: "Teclado Mecânico", preco: 350.0, categoria: "Eletrônicos" },
  {
    id: 201,
    nome: "Cadeira de Escritório",
    preco: 1200.0,
    categoria: "Móveis",
  },
  {
    id: 202,
    nome: "Mesa Digitalizadora",
    preco: 500.0,
    categoria: "Acessórios",
  },
];

export const pedidos: Pedido[] = [
  {
    id: 1001,
    cliente: clientes[0]!,
    itens: [
      { produto: produtos[0]!, quantidade: 1 },
      { produto: produtos[1]!, quantidade: 1 },
    ],
    data: new Date("2025-08-20"),
  },
  {
    id: 1002,
    cliente: clientes[1]!,
    itens: [
      { produto: produtos[2]!, quantidade: 1 },
      { produto: produtos[3]!, quantidade: 1 },
      { produto: produtos[4]!, quantidade: 1 },
    ],
    data: new Date("2025-08-22"),
  },
  {
    id: 1003,
    cliente: clientes[0]!,
    itens: [{ produto: produtos[1]!, quantidade: 2 }],
    data: new Date("2025-08-23"),
  },
];
