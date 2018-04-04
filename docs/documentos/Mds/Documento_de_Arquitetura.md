# Controle de versão:
|Data         |Versão|Descrição                              |Autor               |
|---          |---   |---                                    |---                 |
|21/03/2018   |0.1   |Abertura do Documento                  | Guilherme Aguiar   |
|27/03/2018   |0.2   |Adição do Tópico 1                     | Adrielly Rodrigues |
|27/03/2018   |0.3   |Adição do tópico 2 com imagens         | Victor             |
|03/04/2018   |0.4   |Adição do tópico 6                     | Guilherme Aguiar   |
|03/04/2018   |0.5   |Adição do tópico 7                     | Guilherme Aguiar   |

# Sumário
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

___

## <a name="1"></a>1.  Introdução

### <a name="1.1"></a>1.1. Finalidade
<p>Neste documento será apresentada a visão arquitetônica sobre a aplicação webapp de Gestão de Intervenções Cirurgicas - GIC, com a finalidade de elucidar, explicar e formalizar como será modelada a arquitetura do software, tendo como base diferentes características do projeto para justificar as decisões tomadas pelos desenvolvedores.<p>

### <a name="1.2"></a>1.2. Escopo
<p> Este documento tem como objetivo documentar a arquitetura a ser implementada no software, guiando os desenvolvedores na construção do projeto que auxilia o gerenciamento de servidores, recursos médicos e recursos físicos do Hospital Regional do Gama - HRG.  <p>

### <a name="1.3"></a>1.3. Definições, acrônimos e abreviações
* FGA - Faculdade do Gama.
<br></br>
* UnB - Universidade de Brasília.
<br></br>
* EPS - Engenharia de Projeto de Software.
<br></br>
* GIC - Gestão de Intervenções Cirurgicas.
<br></br>
* Servidores - A quem compete prescrever medicamentos, exames e recomendações de saúde.
<br></br>
* Recursos médicos - Equipamentos tais como seringas, luvas, remédios.
<br></br>
* Recursos físicos - Salas de consulta, salas de cirurgia.
<br></br>
* HRG - Hospital Regional do Gama.
<br></br>

### <a name="1.4"></a>1.4 Referências
* Como documentar a Arquitetura de Software. Disponível em: http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx. Acesso em: 27 mar. 2018;
<br></br>
* FREIRE, Thiago; OLIVEIRA, Rodrigo; MORENO, Augusto; NASCIMENTO, Josué; AUGUSTO, Marcelo. Projeto WikiLegis: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2016.2-WikiLegis/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;
<br></br>
* SILVA, Ana; DINIZ, Arthur; OLIVEIRA, Bruna; SILVA, Guilherme; LACERDA, GuilhermE. Projeto Trezentos: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.1-Trezentos/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;
<br></br>
* BATISTA, Matheus; ARAÚJO, Igor; WILLER, Guilherme; OLIVEIRA, Vinícius; BARCELOS, Filipe; SOUSA, André. Projeto Escola X: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.1-Escola-X/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018;
<br></br>
* BORGES, Felipe; HIROSHI, Lucas; MARQUES, Guilherme; KISHIMA, Lucas; NASCIMENTO, Mateus; MARTINS, Michel; MARIA, Natália; Projeto Receituário Médico: Documento de Arquitetura. Disponível em: https://github.com/fga-gpp-mds/2017.2-Receituario-Medico/wiki/Documento-de-Arquitetura. Acesso em 27 mar. 2018.

### <a name="1.5"></a>1.5 Visão Geral


____

## <a name="2"></a>2. Representação da Arquitetura
No projeto será adotado um modelo de camadas chamado MVC (model , view, controller). Dessa maneira implementando cada uma dessas camadas proporciona aos desenvolvedores uma manutenção mais fácil e o maior reaproveitamento de classes em partes do projeto no futuro. Esse modelo é muito adotado em projetos web assim como em projetos que demandão uma grande manutabilidade nos seus códigos. A seguir estão as funções de cada uma das camadas do modelo seguido.
  - *Model*: É responsável pela gerência de dados, as lógicas e as regras de negócios relacionado ao bando de dados do sistema da aplicação.

  - *View*: É responsável pela interface gráfica do sistema assim sendo a parte da aplicação que terá contato direto com o usuário da aplicação.

  - *Controller*: Responsável por receber as requisições que o usuário fez na view e controla assim as ações dentro da aplicação relacionadas a requições feitas. A controller é a intermediadora entre a view e a model. Nessa camada todas as requisções feitas são convertidas em ações que irão interagir entre sí na maioria das vezes elas são feitas pela model para view ou da view para a model.

No framework usado para realizar o nosso *webapp*, que é o Django, é baseado no modelo anterios porém sua estrutura tem algumas alterações. O Django usa o modelo MVT (model , view, template). A seguir será explicado mais sobre  o funcionamento desses pacotes.
*  *Model*: É a camada onde é definido as ações com o banco de dados da aplicação, nela também são feitas a escrita, leitura e a validação das informações do fluxo de dados. Sendo assim a model é onde controla tudo do banco de dados na aplicação bem como suas regras e comportamento.

* *Template*: Template é a camada que faz o papel da view no modelo anterior, ou seja, nela que o usúario irá interagir. O nosso caso do projeto trocamos a camada da view padrão do Django e adicionamos outro framework chamado react feito pelo facebook para fins de interface gráfica nesse caso usamos uma API Rest framework para transformar as informações da aplicação para um json que será usado no react para criar a interface do projeto.

- *View*: A view no caso do Djando faz o papel da controller uma fez que ela é que faz a interação entre a model e a template. Neste caso as ações que ocorrerão no template serão passadas pelo Rest framework para o react que também fará o papel intermediário entre model e template.


  ![Documento de Arquitetura][logo]

  [logo]:../imagens/Documento_de_arquitetura/snippod-boilerplate-stack.png "Documento de Arquitetura"
  Figura 1- Diagrama do um MTV com react, retirado no site em 27/03/2018.

  ___

## <a name="6"></a>6.  Desempenho
Nosso software vai manipular informações relacionadas aos médicos do hospital regional do Gama, logo a quantidade de dados que devemos processar é mediana, logo o sistema não deverá ter dificuldade na manipulação dos dados. O desempenho dependerá também do aparelho que o sistema será usado e pelo navegador.

___

## <a name="7"></a>7.  Qualidade

O padrão de arquitetura MTC organiza as camadas da aplicação de forma que elas se tornem mais independentes, proporcionando aos desenvolvedores uma manutenção mais fácil e o maior reaproveitamento de classes em partes do projeto no futuro. O uso do React proporciona uma grande reusabilidade dos componentes, evitando problemas de repetição no código, apesar de que a reusabilidade não pode ser obtida apenas por meio de tecnologia, ela exige processos implementados de forma consistente entre as equipes e compromisso em todos os níveis de uma organização.
