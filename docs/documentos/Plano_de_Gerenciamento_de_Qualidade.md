<<<<<<< HEAD
## Plano de Gerenciamento de Qualidade

## Sumário

1. [Introdução](#1---introdução)
1. [O que é qualidade de software?](#2---o-que-é-qualidade-de-software?)
1. [Planejamento](#3---planejamento)
  1. [Técnicas](#31---técnicas)
  1. [Custo de Qualidade(CDQ)](#32---custo-de-qualidade(cdq)
1. [Monitoramento e Controle](#4---monitoramento-e-controle)
  1. [Ferramentas](#41---ferramentas)
1. [Referências](#5---referencias)
=======
# Plano de Gerenciamento de Qualidade
>>>>>>> 3edbce57d32f4075acfb0a45c2a0b532a5751b22

## Histórico  de Revisões

| Data          | Versão          | Mudança  | Autor  |
| ------------- | ------------- | ---------- | ------- |
| 12/03/2018          | 0.1 | Criação do documento | Caio Gabriel |
| 13/03/2018           | 0.2 | Introdução e O que é qualidade de Software e Planejamento  | Caio Gabriel |
| 13/03/2018           | 0.3 | Monitoramento e controle | João Gabriel |
| 14/03/2018           | 0.4 | Técnicas | Caio Gabriel |
| 15/03/2018           | 0.5 | técnicas| Caio Gabriel |
| 19/03/2018            |0.6 | Ferramentas | João Gabriel |

<<<<<<< HEAD
## 1 - Introdução
=======
## 1. Introdução
>>>>>>> 3edbce57d32f4075acfb0a45c2a0b532a5751b22

<p> De acordo com o PMBOK, o gerenciamento da qualidade do projeto inclui os processos e as atividades que determinam as políticas de qualidade, os objetivos e as responsabilidades, de modo que o projeto satisfaça às necessidades para as quais foi empreendido. O gerenciamento da qualidade do projeto trabalha para garantir que os requisitos do projeto, incluindo os requisitos do produto, sejam cumpridos e validados. Desse modo, este documento tem como objetivo planejar a aplicação de técnicas de medição para garantir a qualidade do produto final. </p>
<p>Para a realização de uma medição efetiva, a escolha das ferramentas e técnica é de grande importância, visto que, durante o desenvolvimento do projeto são essas escolhas que definirão o nível de qualidade do produto. Dessa maneira, algumas técnicas serão identificadas neste documento e de acordo com o escopo do projeto, algumas serão selecionadas para uso.</p>

<<<<<<< HEAD
## 2 - O que é qualidade de software?
=======
## 2. O que é qualidade de software?
>>>>>>> 3edbce57d32f4075acfb0a45c2a0b532a5751b22

<p>A qualidade de software pode ser entendida como a conformidade do produto com os requisitos propostos. Para Roger Pressman, "Qualidade de software é a conformidade com requisitos funcionais e de desempenho explicitamente declarados, padrões de desenvolvimento explicitamente documentados e características implícitas, que são esperadas em todo software desenvolvido profissionalmente" (PRESSMAN, 2002).</p>
<p>A ISO 9126, mais especificamente a NBR 13596, padronizar a avaliação da qualidade do software. Ela categoriza os atributos de qualidade de software em seis características: Funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade e portabilidade.</p>

IMAGEM

<p>Ou seja, uma definição é atribuída para cada característica e para cada subcaracterística do software que influencia a característica de qualidade.</p>

<<<<<<< HEAD
## 3 - Planejamento
=======
## 3. Planejamento
>>>>>>> 3edbce57d32f4075acfb0a45c2a0b532a5751b22
<p>Para que a equipe faça efetivas medições, de acordo com os padrões de qualidade de corpos de conhecimentos e de normas, a seleção de técnicas e métricas são muito importantes para o projeto. Desse modo, nessa parte do documento serão apresentadas técnicas que aparentam ser úteis para o gerenciamento de qualidade. </p>

### 3.1 Técnicas
#### 3.1.1. Métricas de Qualidade

<p>As métricas de qualidade retratam um ou mais atributos do projeto ou produto, de modo que cada atributo seja bem especificado e como o processo de qualidade irá medir e analisar. As métricas da qualidade fornecem os atributos que devem ser medidos e as variações permitidas, ou seja, os valores desses atributos deverão estar no limite  de tolerância imposto pela equipe, nesse caso então, é considerado uma variação aceitável do valor.</p>
<p>Alguns exemplos de métricas da qualidade incluem desempenho dentro do prazo, controle dos custos, frequência de defeitos, taxa de falhas, disponibilidade, confiabilidade e cobertura de testes.</p>

##### 3.1.1.1 Métricas
<p> Para a análise das métricas foram estabelecidos limites, baseados na experiência técnica da equipe.</p>

|Métrica|Bom|Regular|Crítico|
|:-----:|---|-------|-------|
| Complexidade ciclomática | 0 a 20 | 21 a 60 | acima de 60|
| Duplicação de código | 0% a 1.5% | 1,.6% a 2.9% | acima 3%|
| Quebras no padrão de código/ folha de estilo | 0 a 5 | 6 a 10 | acima de 11 |
| Cobertura de código	| acima de 85% | acima de 75% | abaixo de 75%|

#### 3.1.2 Custo de Qualidade(CDQ)

<p>O custo de qualidade se refere a todos os custos envolvidos durante o ciclo de vida do produto através de investimentos na prevenção do não-cumprimento dos requisitos, na avaliação do produto ou serviço quanto ao cumprimento dos requisitos, e ao não-cumprimento dos requisitos. Estes custos são categorizados de duas formas:</p>
<p>Custo de conformidade: considerado como custo que foi obtido durante o projeto com o objetivo de evitar falhas. Como prevenção esse custo pode ser gerado com treinamentos, documentação de processos e equipamentos. E como avaliação esses custos podem ser gerados com testes, perda de teste destrutivo e inspeções.</p>
<p>Custo de não conformidade: considerado como o custo que foi obtido durante e após o projeto com o objetivo de resolver falhas. Por meio de falhas internas esses custos são gerados a partir de retrabalho e descarte. E por meio de falhas externas esse custo é gerado por meio de responsabilidades, trabalho de garantia e perda de negócios. </p>

### 4. Monitoramento e Controle
<p>Implantar formas de monitoramento da qualidade do projeto, não só trás a entrega com qualidade desejada do produto, mas também um maior controle de um todo durante seu desenvolvimento.Através do monitoramento e medição de alguns aspectos podemos adequar os processos durante os tempo. Tendo vista que nem sempre os desenvolvedores poderão seguir o planejamento, e ao monitorá-los, pode-se adequar as etapas (sprints) de acordo com a disponibilidade e necessidade do grupo de desenvolvimento.Fazendo com que assim a entrega tenha uma boa qualidade e graduação aceitável pelo o cliente.</p>
<p>Nos tópicos adjacentes serão apresentadas formas para um monitoramento da equipe de desenvolvedores, de forma que façam que os mesmos sigam padrões de qualidade de software trazendo assim entregas com qualidade.</p>

#### 4.1  Ferramentas


<p> flake8: avalia se boas técnicas de programação da comunidade Python estão sendo aplicadas, analisa erros lógicos, e análise ciclomática </p>
<p> codeclimate: ferramenta de análise  estática de código, tendo uso apontado para análise de duplicação de código, complexidade e segurança.</p>
<p> pytest: ferramenta para teste </p>
<p> radon: complexidade ciclomática</p>
<p> duplication: duplicação de código</p>
<p> Django-coverage: ferramenta para análise de cobertura de código</p>

### 5. Referências
<p>Engenharia de Software - 5ª Edição. Roger S. Pressman. Ano: 2002</p>
<p>Guia PMBOK 5a. ed. - EUA: Project Management Institute, 2013</p>
