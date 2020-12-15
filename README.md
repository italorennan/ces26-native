## CES-26: Projeto React Native
Projeto para visualização de valores e variações de ações a partir do React Native.

Para a execução do projeto, esse repositório pode ser clonado, utilizando-se o expo-cli devidamente.
Outra solução é acessar o projeto no Snack Expo, no [link](https://snack.expo.io/@italorennan/ces26-exame).

## Exemplo de teste

Na tela inicial do projeto, pode ser inserida a ação a ser acessada. Uma opção é usar o símbolo 'amzn', correspondente à ação da Amazon.
Ao clicar em 'Buscar', é exibido o valor atual da ação e a sua variação em relação ao dia anterior.

## Observações

Para a adaptação do projeto desenvolvido para Web, foram removidas a autenticação e a visualização de dados. Essas escolhas foram feitas devido à não utilização de um banco de dados no projeto em Native e à não correspondência da plataforma react-vis, usada a princípio na versão Web, para essa plataforma de desenvolvimento.
