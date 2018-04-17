---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<p align="center">
<img src="{{ site.baseurl }}/documentos/imagens/logo/logo.png" alt=""></p>



<p align="center">
  <a href="https://travis-ci.org/fga-gpp-mds/2018.1_Gerencia_mais"><img src="https://travis-ci.org/fga-gpp-mds/2018.1_Gerencia_mais.svg?branch=master" alt="Build"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://codeclimate.com/github/fga-gpp-mds/2018.1_Gerencia_mais/maintainability"><img src="https://api.codeclimate.com/v1/badges/4aff97e7847e842ef8be/maintainability" /></a>
     <a href='https://coveralls.io/github/fga-gpp-mds/2018.1_Gerencia_mais?branch=is64_Integrar_Frontend_e_Backend'><img src='https://coveralls.io/repos/github/fga-gpp-mds/2018.1_Gerencia_mais/badge.svg?branch=is64_Integrar_Frontend_e_Backend' alt='Coverage Status' /></a>
  <a href="https://codeclimate.com/github/fga-gpp-mds/2018.1_Gerencia_mais"><img src="https://codeclimate.com/github/fga-gpp-mds/2018.1_Gerencia_mais/badges/issue_count.svg" alt="Issue Count"></a> <a href='https://www.python.org/'><img src='https://img.shields.io/badge/Made%20with-Python-1f425f.svg' alt='python' /></a> <a href='https://i.imgur.com/1eUkAob.jpg'><img src='https://i.imgur.com/1eUkAob.jpg' alt='python' /></a>
</p>





## ℹ️ Sobre o projeto
<p align="justify">Projeto desenvolvido durante as disciplinas de Engenharia de Produto de Software e Métodos de Desenvolvimento de Software da Universidade de Brasília, campus Gama.</p>
<p align="justify">O principal objetivo do projeto é oferecer uma forma de melhor alocar os médicos, de acordo com a necessidade do público. Com isso trazendo atendimentos mais efetivos, e uma melhor organização do quadro médico, fazendo com que os mesmos possam se organizar de uma forma melhor, a fim de cumprir as horas de trabalho de forma mais eficiente.</p>


## 📈 Monitoramento de serviços

<p align="justify">Nosso servidor de produção é monitorado constantemente, você pode visualizar em tempo real o consumo de recursos como: cpu, memória entre outros dados. Clique na imagem abaixo.</p>

- ### Status do sistema

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__Homologação__   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; __Produção__  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![Heroku App Status](http://heroku-shields.herokuapp.com/gicsaude)](https://gicsaude.herokuapp.com) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![Heroku App Status](http://heroku-shields.herokuapp.com/gerenciamais)](https://gerenciamais.herokuapp.com)

<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/monitor.gif" title="this slowpoke moves" />



Obs: O serviço ainda está sendo configurado.

## 💻 Tecnologias

<p align="center">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/TravisCI-Mascot-1.png" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/codeclimate.jpg" width="100">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/css-logo-400x400.png" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/docker.gif" width="85">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/drive.gif" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/github.gif" width="125">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/heroku.svg" width="68">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/html.png" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/nodejs.png" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/pytest.png" width="105"></p>
<br>
<p align="center">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/python-django.png" width="105">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/react.png" width="134">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/restfram.png" width="214">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/selenium-test-automation.png" width="95">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/telegram.gif" width="124">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/zenhub.jpg" width="94">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/ColourContrastAnalyserPortable_128.png" width="95">
<br>
</p>
<p align="center">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/coveralls-logo.png" width="200">
<img src="{{ site.baseurl }}/documentos/imagens/Tecnologias/datadog.png" width="150">

</p>

## 🐳 Guia de Uso do Docker

* ### Instalação
Primeiramente é necessário ter o docker instalado, caso não tenha acesse o [Instalação docker](https://docs.docker.com/engine/installation/linux/docker-ce/). Após feito isso, instale o [Docker-compose](https://docs.docker.com/compose/install/).

* ### Comandos básicos

 &emsp;&emsp; Para a utilização do ambiente em background, basta dar o comando abaixo e ele irá ligar o container:

 ```terminal
  docker-compose up -d
 ```
 &emsp;&emsp; Caso queira utilizar o ambiente com logs:

 ```terminal
  docker-compose up
 ```
 &emsp;&emsp; Para a visualização dos logs quando em modo de execução background, use o comando abaixo:

 ```terminal
  docker-compose logs -f
 ```

 &emsp;&emsp; Para pausar o container:

  ```terminal
  docker-compose stop
 ```
 &emsp;&emsp; E para religar um container parado use o comando:

 ```terminal
  docker-compose start
 ```

 &emsp;&emsp; Para listar os containers que estão em execução:

 ```terminal
  docker ps
 ```
 &emsp;&emsp; Para listar todos os containers já executados na sua máquina:

 ```terminal
  docker ps -a
 ```
 &emsp;&emsp; Para executar comandos dentro do container:

 ```terminal
  docker-compose exec -it  "id do container"  "comandos"
 ```
 Para acessar o [bash](https://www.gnu.org/software/bash/) do container, substitua "comandos" por "bash".

* ## Rodando a aplicação

Para rodar a aplicação, entre na pasta do projeto em que está localizado o __docker-compose__ e digite no terminal:

```
  docker-compose up -d
```
Espere até que todos os serviços estejam disponíveis, acesse a página inicial do projeto com o seguinte endereço: https://localhost:8000

## 📊 Rodando os testes

Para conferir a cobertura de testes, siga os passos abaixo:

__1º No terminal digite:__
```Terminal
  coverage run -m django test --settings=tests.settings
```
Isso fará com que os testes sejam executados.

obs: Para funcionar, é necessário estar na raiz do projeto.

__2º No terminal digite:__
```Terminal
  coverage report
```
Esse comando irá gerar um relatório contendo as porcentagens da cobertura de testes em cada módulo e a cobertura total.

Obs: Para funcionar, é necessário ter realizado o passo anterior.

__3º No terminal digite (opcional):__
```Terminal
  coverage html
```
Esse comando irá gerar uma pasta contendo um arquivo html(index.html) que apresenta a cobertura de testes.

## 🌎 Acessando a aplicação

<p align="justify">O gerencia mais possui dois ambientes, ambiente de homologação que é usado para testar e verificar se as funcionalidade implementadas mantêm o ambiente estável e o ambiente de produção, onde apresentamos as novas funcionalidades verificadas e validadas aos clientes. Os dois ambiente podem ser acessados através dos endereços apresentados abaixo:</p>

* Ambiente de homologação: https://gicsaude.herokuapp.com/

* Ambiente de produção: https://gerenciamais.herokuapp.com/

<br>
