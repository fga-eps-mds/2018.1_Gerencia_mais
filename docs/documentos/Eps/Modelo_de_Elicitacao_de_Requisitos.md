## Sumário

1. [Gerenciamento de Requisitos](#1---gerenciamento-de-requisitos)
  1. [Rastreabilidade dos requisitos](#11---rastreabilidade-dos-requisitos)
  1. [Modelo de épicos, features e histórias](#12---modelo-de-épicos,-features-e-histórias)
    1. [Èpicos](#121---épicos)
    1. [Features](#122---features)
    1. [Histórias de usuário](#123---histórias-de-usuário)
1. [Entrevistas](#2---entrevistas)
1. [Protótipos](#3---protótipos)
1. [Referência bibliográfica](#4---referência-bibliográfica)

## 1. Gerenciamento de Requisitos
O gerenciamento de requisitos focará em garantir a qualidade dos requisitos (funcionais e não funcionais). A rastreabilidade vertical dos requisitos será feita em um modelo baseado no framework SAFe, por meio de epicos, features, histórias de usuário e requisitos não funcionais [1]. Utizando este modelo de gerência de requisitos será possível fazer a rastreabilidade dos requisitos, mantê-los atômicos (em nível de história de usuários) e independentes. Features e histórias de usuários serão representadas como issues no Github, onde cada issue possui um conjunto de pessoas assinalados como responsáveis pela issue. Este grupo também irá garantir que a história está correta, priorizada, não ambígua e alocada num tempo razoável de realização, ou seja, que a história esteja de acordo com um checklist [2] simples de qualidade de requisitos.

### 1.1 Rastreabilidade dos requisitos

A rastreabilidade dos requisitos se dará da seguinte forma:
1. Cada história de usuário é oriunda de uma única feature;
2. Cada feature é oriunda um único épico;
3. Cada épico é orundo de um único terma de investimento (no nosso caso, há apenas um tema de investimento).

Isso garante que o "caminho" de um requisito é único.

### 1.2 Modelo de épicos, features e histórias

#### 1.2.1 Épicos

Campo       | Descrição
------------ | -------------
Cliente | a quem agrega valor?
Descrição | sobre o quê é este épico?
Valor | qual o valor agregado?
Critérios de aceitação | como determinar se este épico foi implementado?
Requisitos não funcionais | Listar requisitos não funcionais.

#### 1.2.2 Features

Campo       | Descrição
------------ | -------------
Nome | Nome
Descrição | Explicação curta do contexto e benefício da feature
Critérios de aceitação | como determinar se esta feature foi implementada?
Requisitos não funcionais | Listar requisitos não funcionais.

#### 1.2.3 Histórias de usuário

Campo       | Descrição
------------ | -------------
Nome | Nome significativo
Eu, como | Papel do usuário
Gostaria de | atividade em questão
Para que | valor agregado
Critérios de aceitação | como determinar se esta feature foi implementada?
Requisitos não funcionais | Listar requisitos não funcionais.

### 2. Entrevistas
Serão feitas entrevistas semi-abertas. Os entrevistadores irão pré-definir um conjunto de perguntas aos entrevistados. As perguntas formuladas serão feitas e as respostas relevantes para a pergunta serão registradas. É natural e bem vindo que novas perguntas surjam durante a entrevista. Estas perguntas e respostas serão também registradas e farão parte da análise de respostas juntamente com as perguntas pré-definidas.

### 3. Protótipos
Serão feito protótipos de baixa-fidelidade, em papel para validar hipóteses de como deve ser a interface gráfica da aplicação, bem como os fluxos principais dos usuários.

### 4. Referência bibliográfica

[1] SAFe 4.0, disponível em "http://v4.scaledagileframework.com/".

[2] Donald G. Firesmith: “Quality Requirements Checklist”, in Journal of Object Technology, vol. 4, no. 9 November-December 2005, pp. 31-38
