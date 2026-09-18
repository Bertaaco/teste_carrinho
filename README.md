🛒 README — Testes de Software e QA
Projeto: Módulo de Checkout — Carrinho de Compras

Este projeto foi desenvolvido como uma atividade de Testes de Software e QA, utilizando JavaScript, Node.js e Jest. O objetivo é validar o cálculo do total de compras, garantindo que descontos, frete, arredondamentos e validações funcionem corretamente.

📌 Sobre o Projeto

O sistema simula um módulo de checkout de um e-commerce, responsável por calcular o valor final de uma compra com base nos itens adicionados ao carrinho e nos cupons de desconto aplicados.

Durante a atividade, foram identificados e corrigidos 4 erros no código, relacionados à validação de dados, aplicação de descontos, frete grátis e arredondamento de valores.

🚀 Tecnologias Utilizadas
JavaScript — Linguagem de programação
Node.js v24.12.0 — Ambiente de execução
Jest v30.5.2 — Framework de testes automatizados
Replit — Ambiente de desenvolvimento
📂 Estrutura do Projeto
📦 teste_carrinho
├── 📄 carrinho.js
├── 📄 carrinho.test.js
├── 📄 index.js
├── 📄 package.json
└── 📄 package-lock.json
Descrição dos arquivos
Arquivo	Descrição
carrinho.js	Função principal para calcular o total
carrinho.test.js	Testes automatizados com Jest
index.js	Testes manuais de caixa-preta
package.json	Configurações e dependências do projeto
package-lock.json	Registro das versões das dependências
⚙️ Regras de Negócio

O sistema segue as seguintes regras:

Frete grátis: compras iguais ou superiores a R$ 100.
Frete pago: R$ 15 para compras abaixo de R$ 100.
Cupom PROMO10: desconto de 10% sobre o subtotal.
Validação: impede quantidades menores ou iguais a zero e preços negativos.
Arredondamento: total final com duas casas decimais.
Carrinho vazio: gera um erro de validação.
🧪 Testes Realizados

Foram definidos 6 casos de teste:

ID	Cenário	Resultado Esperado
CT-01	Frete grátis na borda (R$ 100)	R$ 100
CT-02	Aplicação do cupom PROMO10	R$ 60
CT-03	Quantidade negativa	Erro
CT-04	Arredondamento de centavos	R$ 48,33
CT-05	Carrinho vazio	Erro
CT-06	Frete pago (subtotal < R$ 100)	R$ 95
🔧 Correções Implementadas

Durante a atividade, foram corrigidos os seguintes problemas:

Adição de validação para quantidades inválidas e preços negativos.
Correção do cupom PROMO10, que passou a aplicar 10% de desconto.
Ajuste da regra de frete grátis para compras a partir de R$ 100.
Arredondamento do total final para duas casas decimais.
▶️ Como Executar o Projeto
1. Clone o repositório
git clone URL_DO_SEU_REPOSITORIO
2. Acesse a pasta
cd teste_carrinho
3. Instale as dependências
npm install
4. Execute os testes automatizados
npm test
5. Execute os testes manuais
node index.js
🎯 Objetivo da Atividade

Desenvolver conhecimentos práticos em Qualidade de Software (QA), testes automatizados e testes de caixa-preta, identificando falhas e aplicando correções para garantir o funcionamento adequado de um sistema de carrinho de compras.

👨‍💻 Desenvolvedor

Felipe Bertaco Cruz

Estudante de Desenvolvimento de Sistemas — SENAI.
