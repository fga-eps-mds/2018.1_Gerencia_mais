# Documento de Arquitetura

## Controle de versão:

|Data         |Versão|Descrição                              |Autor               |
|---        |---   |---                                    |---                 |
|21/03/2018 |0.1   |Abertura do Documento                  | Guilherme Aguiar   |
|27/03/2018 |0.2   |Adição do Tópico 1                     | Adrielly Rodrigues |
|27/03/2018 |0.3   |Adição do tópico 2 com imagens         | Victor             |
|03/04/2018 |0.4   |Adição do tópico 6                     | Guilherme Aguiar   |
|03/04/2018 |0.5   |Adição do tópico 7                     | Guilherme Aguiar   |
|11/04/2018 |0.6   |Adição do tópico 4 | Guilherme Aguiar |
|11/04/2018 |0.7   |Adição do tópico 3                     | Caio César Beleza   |
|11/04/2018 |0.8   |Adição do subtópico 1.5 e correção no tópico 2 | Guilherme Aguiar |
|15/04/2018 |0.9   |Adição do tópico 5 | João Vitor |
|15/04/2018 |1.1   |Adição de mais especificações do tópico 2| Victor |
|15/04/2018 |1.2   |Mudança do nome do projeto| Victor |
|15/04/2018 |1.3   |Corrigir erro do último tópico | Victor  |
|16/04/2018 |1.4   |Corrigir erros ortográficos | João Vitor  |


## Sumário
1. [Introdução](#1)
  * 1.1 [Finalidade](#1.1)
  * 1.2 [Escopo](#1.2)
  * 1.3 [Definições, acrônimos e abreviações](#1.3)
  * 1.4 [Referências](#1.4)
  * 1.5 [Visão Geral](#1.5)
2. [Representação da Arquitetura](#2)
3. [Restrições e Metas de Arquitetura](#3)
  * 3.1 [Metas](#3.1)
  * 3.2 [Restrições](#3.2)
4. [Visão de Casos de Uso](#4)
  * 4.1 [Atores](#4.1)
  * 4.2 [Diagrama de Casos de Uso](#4.2)
  * 4.3 [Descrição dos Casos de Uso](#4.3)
5. [Visão Lógica](#5)
  * 5.1 [Visão Geral](#5.1)
  * 5.2 [Visão de Implantação](#5.2)
  * 5.3 [Pacotes de Design Significativos do Ponto de Vista da Arquitetura](#5.3)  
6. [Desempenho](#6)
7. [Qualidade](#7)

## 1.  Introdução

### 1.1. Finalidade

Neste documento será apresentada a visão arquitetônica sobre a aplicação webapp de Gerencia mais- GM, com a finalidade de elucidar, explicar e formalizar como será modelada a arquitetura do software, tendo como base diferentes características do projeto para justificar as decisões tomadas pelos desenvolvedores.

### 1.2. Escopo

Este documento tem como objetivo documentar a arquitetura a ser implementada no software, guiando os desenvolvedores na construção do projeto que auxilia o gerenciamento de servidores, recursos médicos e recursos físicos do Hospital Regional do Gama - HRG.

### 1.3. Definições, acrônimos e abreviações

* FGA - Faculdade do Gama.

* UnB - Universidade de Brasília.

* EPS - Engenharia de Projeto de Software.

* GM - Gerencia Mais

* Servidores - A quem compete prescrever medicamentos, exames e recomendações de saúde.

* Recursos médicos - Equipamentos tais como seringas, luvas, remédios.

* Recursos físicos - Salas de consulta, salas de cirurgia.

* HRG - Hospital Regional do Gama.

### 1.4 Referências

* Como documentar a Arquitetura de Software. Disponível em: http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx. Acesso em: 27 mar. 2018;

* FREIRE, Thiago; OLIVEIRA, Rodrigo; MORENO, Augusto; NASCIMENTO, Josué; AUGUSTO, Marcelo. Projeto WikiLegis: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2016.2-WikiLegis/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;

* SILVA, Ana; DINIZ, Arthur; OLIVEIRA, Bruna; SILVA, Guilherme; LACERDA, GuilhermE. Projeto Trezentos: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.1-Trezentos/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;

* BATISTA, Matheus; ARAÚJO, Igor; WILLER, Guilherme; OLIVEIRA, Vinícius; BARCELOS, Filipe; SOUSA, André. Projeto Escola X: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.1-Escola-X/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;

* BORGES, Felipe; HIROSHI, Lucas; MARQUES, Guilherme; KISHIMA, Lucas; NASCIMENTO, Mateus; MARTINS, Michel; MARIA, Natália; Projeto Receituário Médico: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.2-Receituario-Medico/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018.


## 1.5 Visão Geral

Este documento é dividido nas seguintes secções:

*    __Introdução__: Apresentação da finalidade e organização do documento.

*    __Representação de Arquitetura__: Demonstra a arquitetura que usaremos no sistema.

*    __Restrições e Metas de Arquitetura__: Mostra os requisitos de usabilidade do software o os objetivos que impactam significativamente a aplicação.


*    __Visão de Casos de Uso__: Mostra todos os casos de uso da aplicação.

*    __Visão Geral__: Apresenta como será implementado a arquitetura no sistema e partes importantes do projeto do ponto de vista da arquitetura e da modelagem do design.

*    __Desempenho__: Descreve as características da aplicação que impactam no desempenho.

*    __Qualidade__: Descreve como a escolha da arquitetura do software contribui para os recursos da aplicação.


____

## 2. Representação da Arquitetura

O modelo de arquitetura MVC (model , view, controller) proporciona aos desenvolvedores uma manutenção mais fácil e o maior reaproveitamento de classes em partes do projeto no futuro. Esse modelo é muito adotado em projetos web assim como em projetos que demandam uma grande manutenibilidade nos seus códigos. A seguir estão as funções de cada uma das camadas do modelo:
  - *Model*: É responsável pela gerência de dados, as lógicas e as regras de negócios relacionado ao banco de dados do sistema da aplicação.

  - *View*: É responsável pela interface gráfica do sistema assim sendo a parte da aplicação que terá contato direto com o usuário da aplicação.

  - *Controller*: Responsável por receber as requisições que o usuário fez na view e controla assim as ações dentro da aplicação relacionadas a requisições feitas. A controller é a intermediadora entre a view e a model. Nessa camada todas as requisções feitas são convertidas em ações que irão interagir entre sí na maioria das vezes elas são feitas pela model para view ou da view para a model.

O framework usado como backend do nosso *webapp*, o Django, é baseado no modelo anterior, porém sua estrutura tem algumas alterações. O Django usa o modelo MVT (model , view, template) que será adotado no projeto, mas na parte do template será substituída por outro framework, do facebook, chamado React para fazer a interface gráfica.  Para a comunicação entre os frameworks será usado o rest-framework para serialização dos dados. No caso do nosso projeto será feito um novo banco de dados nos hospitais conforme o do nosso projeto que será populado com as informações dos servidores, sendo responsável esse papel aos integrantes de tecnologia do hospital. A seguir será explicado mais sobre  o funcionamento dos pacotes do Django bem como a interação deles com a API do projeto e o React:

*  *Model*: É a camada onde é definido as ações com o banco de dados da aplicação, nela também são feitas a escrita, leitura e a validação das informações do fluxo de dados. Sendo assim, a model é onde se controla tudo do banco de dados na aplicação bem como suas regras e comportamento.

* *Template*: Template é a camada que faz o papel da view no modelo anterior, ou seja, nela que o usuário irá interagir. No nosso caso trocamos a camada do template padrão do Django e adicionamos outro framework chamado react feito pelo facebook para fins de interface gráfica. Para o Django se comunicar com o React usamos uma API chamada Rest framework para transformar as informações da aplicação para um json que será usado no react para criar a interface gráfica do projeto.

- *View*: A view no caso do Django faz o papel da controller uma vez que ela é quem faz as interações entre a model e a template. Neste caso as ações que ocorrerão no template serão passadas pelo Rest framework para o react que também fará o papel intermediário entre model e template.


  <img src="{{ site.baseurl }}/documentos/imagens/Documento_de_arquitetura/snippod-boilerplate-stack.png">
  "Documento de Arquitetura"
  Figura 1- Diagrama do um MTV com react, retirado no site em 27/03/2018.


  ## 3. Metas e Restrições da arquitetura

  ### 3.1 Metas
  O sistema a ser desenvolvido deve ter uma interface amigável ao usuário, responder as requisições em poucos segundos, além de seguir um padrão de arquitetura que ajude na manutenibilidade do software.

  ### 3.2 Restrições
  Este sistema será desenvolvido ultilizando o framework Django 2.0.3, que tem como base a linguagem de programação python. Além disso, será utilizado o React 16.2.0, que estará voltado ao frontend da nossa aplicação.
  O sistema será suportado por navegadores web tais como Mozilla Firefox e Google Chrome.





## 4.  Visão de Casos de Uso

Nosso software vai manipular informações relacionadas aos médicos do hospital regional do Gama, logo a quantidade de dados que devemos processar é mediana, então o sistema não deverá ter dificuldade na manipulação dos dados. O desempenho dependerá também do aparelho que o sistema será usado e pelo navegador.

## 4.1  Atores

| Ator| Descrição |
|-|-|
| Administrador da Plataforma (Servidor) | O administrador da plataforma será capaz de acessar as funcionalidades do aplicativo web. Eles farão o cadastro de médicos na tabela, podendo alterar seu status a qualquer momento e também visualizar a tabela. |

## 4.2  Diagrama de Casos de Uso

<img src="https://i.imgur.com/tqp3Swb.png">

## 4.3  Descrições de Casos de Uso

| Caso de Uso | Descrição |
| - | - |
| UC01 - Cadastrar médico na tabela de horários |  Este caso de uso permite ao administrador cadastrar um médico presente na api e todos os dados requisitados na tabela de horários para visualização posterior. |
| UC02 - Atualizar horário do médico |    Este caso permite ao administrador atualizar uma informação previamente informada. |
| UC03 - Atualizar status do médico | Este caso permite ao administrador atualizar o status de disponibilidade do médico. |
| UC04 - Visualizar tabela | Este caso permite ao administrador visualizar a tabela de horários de acordo com os dados passados anteriormente. |
| UC05 - Realizar Login | Este caso permite ao administrador a realização de login e logout, ou seja, permite a entrada e saída do sistema. |

## 5.  Visão Lógica

## 5.1  Visão Geral

As principais classes do ponto de vista da arquitetura do software e as implementações das funcionalidades são divididas pacotes que representam as camadas do modelo MTV, no caso, com o react substituindo o template padrão do Django. A divisão em pacotes está representada no diagrama abaixo.

## 5.2  Visão de Implantação

Visão geral da aplicação do ponto de vista de pacotes e aplicativos dentro da arquitetura do sistema.

<img src="{{ site.baseurl }}/documentos/imagens/Documento_de_arquitetura/PackageDiagram.png">

## <a name="5.3"></a>5.3  Diagrama de Classes

<img src="{{ site.baseurl }}/documentos/imagens/Documento_de_arquitetura/ClassDiagram2.png">

## 6.  Desempenho

Nosso software irá manipular informações relacionadas aos médicos do hospital regional do Gama, logo a quantidade de dados que devemos processar é mediana, então o sistema não deverá ter dificuldade na manipulação dos dados. O desempenho dependerá também do aparelho que o sistema será usado e pelo navegador.



## 7.  Qualidade

O padrão de arquitetura MVT organiza as camadas da aplicação de forma que elas se tornem mais independentes, proporcionando aos desenvolvedores uma manutenção mais fácil e o maior reaproveitamento de classes em partes do projeto no futuro. O uso do React proporciona uma grande reusabilidade dos componentes, evitando problemas de repetição no código, apesar de que a reusabilidade não pode ser obtida apenas por meio de tecnologia, ela exige processos implementados de forma consistente entre as equipes e compromisso em todos os níveis de uma organização.
