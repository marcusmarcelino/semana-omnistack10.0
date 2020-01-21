<div align="center">
  <img height="200" width="200" src="./imgs/logo.svg" align="center"></img>
</div>

<h1 align="center"> <strong> Semana Omnistack 10 </strong> </h1>

<p align="center">Projeto <strong>DevRadar</strong> - Rocketseat</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>

  <a aria-label="Versão do React" href="#">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  
  <a aria-label="Versão do Expo" href="#">
    <img src="https://img.shields.io/badge/expo-36.0.0-informational?logo=expo"></img>
  </a>  
    
  <a aria-label="Rocketseat" href="#">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>

  <a aria-label="License" href="#">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"></img>
  </a>  
  
</p>

## Instalação
Para que o projeto funcione corretamente você deverá clonar o projeto em seu computador e configura-lo de acordo com os seus parâmetros, configurando a sua base de dados MongoDB, bem como atualizar a string de conexão com seu `User:Senha` no arquivo `index.js`.

### obs:
Lembre-se: **configure as portas corretamente, para que não aja conflito entre seus projetos ou aplicações que já estejam em execução.**

### Dependências

##### Para Execução do -> Backend
Para instalar e executar o **Backend**, acesse a pasta backend com o seu terminal e em seguida execute:
```bash
yarn install
yarn dev
```
##### Para Execução do ->  Frontend
Para instalar e executar o **Frontend**, acesse a pasta backend com o seu terminal e em seguida execute:
```bash
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta uma página `localhost:3000` em seu navegador padrão, com o frontend sendo executado. 

##### Para Execução do ->  Mobile
Para executar a aplicação **Mobile**, primeiro configure o endereço do servidor no arquivo `src/services/api.js`, de acordo com o seus parâmetros de rede "seu `ip`", e a porta configurada no backend, para que a aplicação mobile consiga acessa a base de dados, em seguida abra o terminal dentro da pasta mobile e depois execute os comandos:
```bash
# Caso ja possua o Expo (CLI) instalado! não execute  aprimeira linha de código
yarn global add install expo-cli
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta uma página `localhost:19002` em seu navegador padrão. Conecte seu emulador, caso não o possua instalado e queira utiliza-lo estes links o ajudaram nesta tarefa, assim como uma explicação sobre o funcionamento do emulador, [Rocketseat Docs Emulador Mobile](https://docs.rocketseat.dev/ambiente-react-native/android/emulador), [Emulando React Native no iOS/Android com Expo](https://www.youtube.com/watch?v=eSjFDWYkdxM).

Caso queira testa a aplicação mobile via `LAN`: baixe o aplicativo *Expo* na Play Store ou App Store e em seguida escaneie o código QR que aparece no canto esquerdo inferior da página aberta no seu navegador padrão.

## Frontend
Web -> resultado da aplicação em execução:

<img align="center" src="./imgs/web-front.png"></img>

## Mobile
App Mobile (React Native) -> resultado da execução:
<div align="center">
  <img align="center" height="400" width="220" src="./imgs/app-mobile.jpeg"></img>
</div>

## Licença

[MIT](./LICENSE) - by Rocketseat - [Rocketseat](https://rocketseat.com.br/)