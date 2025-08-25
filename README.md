# E-commerce
Aluno: Pedro Henrique Romão (UC24101671)

Atividade final para a disciplina do Luquinhas!


## ✨ Funcionalidades Implementadas

-   **Modelagem de Dados**: Criação de interfaces para `Produto`, `Cliente` e `Pedido`.
-   **Lógica de Negócio**:
    -   Função para calcular o total de um carrinho, com aplicação de descontos.
    -   Função para filtrar produtos por uma categoria específica.
    -   Função para buscar todos os pedidos de um determinado cliente.
-   **Manipulação de Dados**:
    -   Uso de arrays e métodos (`.filter`, `.reduce`) para gerenciar coleções de dados.
    -   Criação de um relatório de vendas usando o método `reduce`.

## 📂 Estrutura do Projeto

A arquitetura do projeto foi organizada visando a separação de responsabilidades.

* **`src/models/types.ts`**
    (Responsabilidade: Definir todas as "formas" dos nossos dados, como `Produto`, `Cliente`, etc.)

* **`src/data/mockDatabase.ts`**
    (Responsabilidade: Simular um banco de dados, fornecendo os dados de exemplo para a aplicação.)

* **`src/services/productService.ts`**
    (Responsabilidade: Conter as funções de negócio relacionadas especificamente a produtos.)

* **`src/services/orderService.ts`**
    (Responsabilidade: Conter as funções de negócio relacionadas a pedidos, como cálculos e relatórios.)

* **`src/main.ts`**
    (Responsabilidade: Ser o ponto de entrada da aplicação. Ele importa e utiliza os serviços e dados para executar as tarefas.)

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local.

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PedroRomaoDev/ecommerce-project.git
    cd ecommerce-project
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    ```bash
    npm start
    ```
    Este comando utilizará o `ts-node` para compilar e executar o arquivo `src/main.ts`, exibindo os resultados no console.

## 📋 Exemplo de Saída

Ao executar o comando `npm start`, você verá a seguinte saída no terminal, demonstrando todas as funcionalidades em ação:

```console
=============== DESAFIO E-COMMERCE ===============

🛒 1. Calculando total do carrinho do pedido 1001 com 5% de desconto:
O total do pedido 1001 é: R$ 7267.5

💻 2. Filtrando produtos da categoria 'Eletrônicos':
[
  { id: 101, nome: 'Notebook Pro', preco: 7500, categoria: 'Eletrônicos' },
  { id: 102, nome: 'Mouse Sem Fio', preco: 150, categoria: 'Eletrônicos' },
  { id: 103, nome: 'Teclado Mecânico', preco: 350, categoria: 'Eletrônicos' }
]

👩‍💼 3. Buscando todos os pedidos da cliente Ana (ID 1):
[
  {
    "id": 1001,
    "cliente": { "id": 1, "nome": "Ana Silva", "email": "ana.silva@example.com" },
    "itens": [
      { "produto": { "id": 101, "nome": "Notebook Pro", "preco": 7500, "categoria": "Eletrônicos" }, "quantidade": 1 },
      { "produto": { "id": 102, "nome": "Mouse Sem Fio", "preco": 150, "categoria": "Eletrônicos" }, "quantidade": 1 }
    ],
    "data": "2025-08-20T03:00:00.000Z"
  },
  {
    "id": 1003,
    "cliente": { "id": 1, "nome": "Ana Silva", "email": "ana.silva@example.com" },
    "itens": [
      { "produto": { "id": 102, "nome": "Mouse Sem Fio", "preco": 150, "categoria": "Eletrônicos" }, "quantidade": 2 }
    ],
    "data": "2025-08-23T03:00:00.000Z"
  }
]

📊 4. Criando relatório geral de vendas:
Relatório Final de Vendas: {
  valorTotalVendido: 9700,
  totalDeItensVendidos: 6,
  categoriasMaisVendidas: { Eletrônicos: 4, Móveis: 1, Acessórios: 1 }
}



TAMO JUNTO LUQUINHAS