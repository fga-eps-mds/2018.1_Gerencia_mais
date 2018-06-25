# ✅ Pipeline de entrega

Data|Responsável|Versão|Alteração
-|-|-|-
19/06/2018|Eduardo Júnio|1.0| Criação do documento
20/06/2018|Eduardo Júnio|1.1| Alteração nos tópicos de integração contínua
21/06/2018|Eduardo Júnio|1.2| Adição de tópicos de deploy e versionamento
21/06/2018|Eduardo Júnio|2.0| Adição de modelo simplificado de processos
22/06/2018|Eduardo Júnio|2.1| Adição de tópico de Ambiente de desenvolvimento
25/06/2018|Eduardo Júnio|3.0| Refatoração de esquemático de pipeline e modelos de processo

## ℹ️ Objetivos

<p align="justify">Este documento tem como objetivo apresentar uma estrutura que permita o fácil entendimento a respeito das etapas do pipeline do software Gerencia Mais desenvolvido durante as disciplinas de Engenharia de Produto de Software e Métodos de Desenvolvimento de Software do curso de Engenharia de Software da Universidade de Brasília.</p>

## ℹ️ Comunicação e planejamento
<p align="justify">Toda a parte de comunicação é feita por meio do software telegram ou via issues no próprio repositório do projeto. Alguns arquivos como : anotações de reuniões com clientes, quadros de pareamentos, técnicas de elicitação de requisitos entre outros, são mantidos também na plataforma google drive.</p>

## ℹ️ Ambiente de desenvolvimento

<p align="justify">O desenvolvimento do sistema é feito através do ambiente de virtualização baseado em containers docker que, além de fornecer um ambiente estável de desenvolvimento, facilita na integração de novas funcionalidades por fornecer todas as tecnologias e dependências necessárias para o correto funcionamento da aplicação, não sendo necessário que cada desenvolvedor tenha que instalar ou configurar manualmente os recursos para o funcionamento do sistema. Dessa forma basta inserir as tecnologias nos arquivos de dependências do projeto que são: "requirements.txt" para dependências do python ou "package.json" para dependências do node.</p>

## ℹ️ Versionamento

<p align="justify">O versionamento do software é feito por meio do software de controle de versão GitHub que provê maior agilidade no desenvolvimento, mais detalhes como políticas de commits, criação de branches entre outras caracteríticas podem ser consultadas no documento de <a href="https://fga-gpp-mds.github.io/2018.1_Gerencia_mais/documentos/Eps/Documento_GCS.html">Gerência de Configuração de Software</a></p>

## ℹ️ Deploy

<p align="justify">O deploy da aplicação é feito de forma automatizada por meio da integração contínua (Travis CI) que é responsável por verificar a cobertura de testes e as dependências necessárias para o funcionamento correto da aplicação. Os estágios deste pipeline podem ser observados na imagem abaixo e nos passos descritos logo em seguida. </p>

![Imgur](https://i.imgur.com/wGNjU6t.png)

## ℹ️ Integração contínua

- __Passo 1__ <p align="justify">Para garantir que todas as dependência necessárias para o correto funcionamento do projeto estão funcionando como o esperado e que nenhum módulo do sistema possui erros, optou-se por incluir como "filtro" para a integração o ambiente de virtualização docker, dessa forma, ao ocorrer qualquer tipo de erro que impossibilite o funcionamento de algum módulo ou funcionalidade do sistema é indicado pela integração a falha no pipeline. </p>
- __Passo 2__<p align="justify">Além de executar o docker com os objetivos apresentados na passo anterior, incluiu-se como filtro a cobertura de testes que são verificados pela integração a cada novo commit ou pull request. A cobertura de teste mínima para uma contribuição ser aceita é de 90% (noventa por cento), caso determinada contribuição diminua a porcentagem de teste, mesmo que essa esteja acima dos 90% estabelecidos como mínimo aceitável, a integração contínua apresenta um alerta de falha no pipeline e a contribuição não é integrada aos ambientes de homologação ou produção até que os testes necessários sejam realizados.</p>
- __Passo 3__ <p align="justify">Após o término bem sucedido dos passos anteriores, são rodados ferramentas de análise estáticas (code climate e codacy) afim de verificar a qualidade do código que está sendo integrado ao sistema.</p>
- __Passo 4__ <p align="justify">Após a verficação dos passos anteriores e se essas verificações não apresentarem erros, uma nova versão do sistema é gerada e enviada aos servidores da aplicação que estão divididos em servidor de homologação e produção, o envio da nova versão para esses servidores é feita de acordo com a branch em que as alterações estão sendo inseridas. Para o ambiente de homologação utiza-se a branch "development" e para o ambiente de produção utiliza-se a branch "master". </p>
- <p align="justify">Obs: Para as outras branchs, apenas os passos 1, 2 e 3 citados nesse tópico são executados. </p>

## ℹ️ Monitoramento

<p align="justify">O monitoramento dos servidores é feito por meio de dois serviços instalados diretamente em cada um dos servidores da aplicação, provendo assim logs da aplicação, notificações via email de eventuais erros que possam ocorrer e dados relacionados ao uso de memória, erros ocorridos durante a utilização bem como outras informações que permitem aos desenvolvedores monitararem o funcionamento da aplicação e planejarem ações para mitigar o problema.</p>

## ℹ️ O modelo desenvolvido 

<p align="justify">Optou-se por implementar o modelo de pipeline apresentado neste documemento por ser uma forma simples que permite maior rapidez na configuração de ambiente, fator que permitiu a reutilização das mesmas configurações para o desenvolvimento dos micro serviços que extendem a capacidade funcional da aplicação</p> 

## ℹ️ Pipeline dos micro serviços
 
<p align="justify">Devido a facilidade de adaptação da integração desenvolvida para a aplicação, optou-se por utilizar a mesma estrutura para os micro serviços, dessa forma os passos descritos no tópicos "Integração Contínua" também são aplicáveis aos micro serviços desenvolvidos.</p>

## ℹ️ Modelo simplificado de processos

![Imgur](https://i.imgur.com/XFkEHdA.png)

