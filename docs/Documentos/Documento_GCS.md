### Histórico de Revisões
        
|Data|Versão|Descrição|Autor(es)|           
|-----|------|---------|----------|            
|12/03/2018|0.1| Versão Inicial |Eduardo Júnio, Ulysses Lara| 
 


## 1 - Introdução

O documento de gerenciamento de configuração de software tem como objetivo definir ferramentas e estilos organizacionais para o projeto. Este documento irá apresentar e detalhar componentes fundamentais e relevantes a infraestrutura organizacional e de configuração de ambiente.

### 1.1  - Resultados esperados

Com o desenvolvimento desenvolvimento e aplicação desse plano é esperado que se alcance um ambiente organizado para a equipe de desenvolvimento, esclarecendo regras e ferramentas para o desenvolvimento.
 

## 2. Organização

Essa etapa do documento tem o objetivo de esclarecer e definir politicas usadas nos quesitos documentos, artefatos e branchs.

### 2.1. Identificação dos Documentos
    
Para a padronização dos nomes do documentos deve ser levar em conta as seguintes regras:    
A identificação dos documentos deverá ser feita em língua portuguesa utilizando sempre nomes significativos que indiquem sua função no projeto.
Em caso de identificadores que estendam demasiadamente o título do documento poderá ser utilizado abreviação.
O identificação do documento deve ser igual ao título do documento.  


### 2.2. Localização dos Artefatos

Os artefatos produzidos relevantes a esse projeto deverão se localizar na pasta docs do repositório fga-gpp-mds/2018.1-Grupo9 podendo haver uma cópia deste na wiki do repositório.

### 2.3. Versão dos Artefatos

Os artefatos produzidos serão criados no google driver, e quando finalizados serão disponibilizados na área definida no tópico 2.2, onde toda evolução do documento será traçada na tabela de versão do documento .


### 2.4. Baseline do Projeto

    A baseline do projeto será atualizada ao término de cada sprint, onde será analisado o tempo, custo, escopo e qualidade do projeto.
    
### 2.5. Branches

O sistema de branch do projeto será feito a partir de quatro principais tipos de branch sendo que elas devem possuir apenas uma instância no projeto com exceção das branchs de features :

* **Master**
    Essa branch tem a responsabilidade de  armazenar a versão mais estável do código e a documentação mais revisada, por esses motivos o código contido nessa branch é utilizado para o deploy da aplicação.
    Pull request nessa branch só poderão ser realizados por um membro da disciplina de EPs, onde o código onde só poderá ser aceito após passar em todos os critérios de qualidade definidos no plano de qualidade.

* **Development ou dev**
    Essa branch é derivada da branch master é possui o objetivo de armazenar o código já desenvolvido porém de estabilidade duvidosa , não aceitando commits diretos nela.  
    Pull requests nessa branch podem ser feitos por qualquer membro da equipe porém só podem ser aprovados por um membro da equipe de EPs.

* **Features**
    As branchs de features devem ser derivadas da branch development ou de outra branch de feature, essa categoria de branch contém o código ainda em desenvolvimento, podendo assim receber commits diretos.      
    Criação ou Pull requests dessas branchs são liberados para qualquer membro da equipe de MDS ou EPs.  

* **Documentation**
    Essa branch é derivada da master é possui a única funcionalidade de armazenar os documentos desenvolvidos na disciplina.   
    Pull requests dessa branch com a master só poderá ocorrer após a revisão dos documentos contidos nela.

-----------------------

## 3. Controle de Mudança

### 3.1. Issues

A utilização de issues no projeto contemplará historia de usuários, tarefas a serem realizadas fora do escopo do código, dúvidas e reportar possíveis bugs.
As Issues criadas devem seguir o seguinte padrão:
* Possuir pelo menos uma label classificando do que se trata a issue.
* Possuir uma label mostrando qual time deve realizar a issue MDS ou EPs.
* Nome significativo para issue.
* Em caso de issue de história de usuário  deve-se identificar através do título e da label que é uma User Story.


### 3.2. Milestones
As milestones serão utilizadas como container de issues. Nelas devem ser agrupadas issues que possuem características em comum como funcionalidade, sprint ou tema.
A estrutura da milestone criada deve possuir os seguintes aspectos:
*   Nomes significativos de acordo com objetivo.
*   Descrição condizentes ao objetivo da milestone, especificando os impactos dela no projeto.

##  4. Commits

### 4.1. Comentário do commit

Os comentários dos commits deverão ser feitos na língua inglesa e ter caráter significativo, de forma que seja possível identificar a alteração que está sendo feita no projeto.

### 4.2. Política de Commits

 Os commits feitos em pareamentos, deverão obrigatoriamente conter o nome e email da dupla de desenvolvimento, dessa forma fica evidente a colaboração dos membros no desenvolvimento.
Exemplo:
```Terminal
    git commit -s
```
Commits individuais deverão  seguir o seguinte formato:

```Terminal
    git commit -m ”Conteúdo da mensagem em inglês”
```

### 4.3. Resolução de Issues


## 5. Ambiente

Conflitos gerados por diferenças de versões de software em um ambiente de desenvolvimento acarreta em  perda de tempo, isso é provocado pelo grande número de dependências necessárias para o funcionamento do software que possui inúmeras versões diferentes, o que em um ambiente de produção, acarreta em conflitos e mau funcionamento do software . Portanto, será utilizado como ambiente de desenvolvimento a ferramenta  docker, que proverá um ambiente virtualizado de desenvolvimento baseado em containers.

### 5.1. Docker

O docker fornecerá as configurações necessárias para o desenvolvimento do projeto, através dele, será gerado uma imagem única contendo todas as ferramentas  necessárias, bem como suas versões, provendo um ambiente de desenvolvimento estável e confiável.

## 6. Ferramentas

A tabela abaixo apresenta as ferramentas utilizadas no projeto
| **Ferramenta** | **Versão** | **Descrição** |
| --- | --- | --- |
| Python | 3.6.4 | Linguagem utilizada |
| Django | 2.0.3 | Framework de desenvolvimento para aplicações web|
| Travis | a definir | Ferramenta de integração contínua |
| GitHub | 2.12 | Sistema de versionamento de código |
| Google Drive | - - - | Ferramenta de armazenamento de arquivos iniciais do projeto |
| Docker | 17.12 | Ambiente de virtualização |
|  Hubot | - - -  | - - - |
|Docker-compose | 1.18 | Gerenciador de containers docker |

### 6.1. Travis CI

O Travis CI será a ferramenta de integração contínua utilizada no projeto, nela será analisado a boa execução do programa e métricas de boa qualidade que código tais como complexidade ciclomática, duplicidade do código, folha de estilo, média de linhas por método e testes unitários.


# 7. Deployment

Serão configuradas ferramentas de deploy automático, onde a cada nova funcionalidade entregue e se essa estiver devidamente testada, uma nova versão da aplicação contendo essas funcionalidades será hospedada no serviço de hospedagem “X”.
