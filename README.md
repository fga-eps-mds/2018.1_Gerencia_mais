# 🔵 Gestão de Internações cirúrgicas

<p align="center"><a href="image" target="_blank"><img width="300"src="https://i.imgur.com/eOFPRnA.png"></a></p>
<p align="center">
  <a href="https://travis-ci.org/fga-gpp-mds/2018.1_Gestao_de_Internacoes_Cirurgicas_GIC"><img src="https://travis-ci.org/fga-gpp-mds/2018.1_Gestao_de_Internacoes_Cirurgicas_GIC.svg?branch=master" alt="Build"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
</p>


## Sobre o projeto


## 🐳 Guia de Uso do Docker

### Instalação
Primeiramente é necessário ter o docker instalado, caso não tenha acesse o [Instalação docker](https://docs.docker.com/engine/installation/linux/docker-ce/). Após feito isso, instale o [Docker-compose](https://docs.docker.com/compose/install/).

### Comandos básicos 

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

## Rodando a aplicação

Para rodar a aplicação, entre na pasta do projeto em que está localizado o __docker-compose__ e digite no terminal:

```
  docker-compose up -d
```
Espere até que todos os serviços estejam disponíveis, acesse a página inicial do projeto com o seguinte endereço: https://localhost:8000



