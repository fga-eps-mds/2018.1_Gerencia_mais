## ℹ️ Pipeline Devops

<p align="justify">O deploy da aplicação é feito de forma automatizada por meio da integração contínua (Travis CI) que é responsável por verificar a cobertura de testes e as dependências necessárias para o funcionamento correto da aplicação. Os estágios deste pipeline podem ser observados na imagem abaixo e nos passos descritos logo em seguida. </p>


![Imgur](https://i.imgur.com/lYdATpc.png)


## ℹ️ Integração contínua

- <p align="justify">Passo 1: Para garantir que todas as dependência necessárias para o correto funcionamento do projeto estão funcionando como o esperado e que nenhum módulo do sistema possui erros, optou-se por incluir como "filtro" para a integração o ambiente de virtualização docker, dessa forma, ao ocorrer qualquer tipo de erro que impossibilite o funcionamento de algum módulo ou funcionalidade do sistema é indicado pela integração a falha no pipeline. </p>
- <p align="justify">Passo 2: Além de executar o docker com os objetivos apresentados na passo anterior, incluiu-se como filtro a cobertura de testes que são verificados pela integração a cada novo commit ou pull request.  </p>
- <p align="justify">Passo 3: Após a verficação dos passos anteriores e se essas verificações não apresentarem erros, uma nova versão do sistema é gerada e enviada aos servidores da aplicação que estão divididos em servidor de homologação e produção, o envio da nova versão para esses servidores é feita de acordo com a branch em que as alterações estão sendo inseridas. Para o ambiente de homologação utiza-se a branch "development" e para o ambiente de produção utiliza-se a branch "master". </p>

## ℹ️ Monitoramento

<p align="justify">O monitoramento dos servidores é feito por meio de dois micro serviços instalados diretamente em cada um dos servidores da aplicação, provendo assim logs da aplicação, notificações via email de eventuais erros que possam ocorrer e dados relacionados ao uso de memória, erros ocorridos durante a utilização bem como outras informações que permitem aos desenvolvedores monitararem o funcionamento da aplicação.</p>
