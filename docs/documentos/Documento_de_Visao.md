# Controle de versão:
|Data|Versão|Descrição|Autor|
|--- |---   |---      |---  |
|21/03/2018|0.1|adição dos primeiros passos do documento de visão| Victor|
|21/03/2018|0.2|construção do escopo do documento de visão| Victor|
|21/03/2018|0.3|adição dos perfis dos envolvidos|Guilherme Aguiar |
|22/03/2018|0.4|adição do Posicionamento|Caio César, Victor|
|22/03/2018|0.5|adição do tópico 1 do sumário a Introdução|Victor, Caio|
|23/03/2018|0.6|adição do tópico 4 do sumário a Visão Geral do Produto|Victor|

# Sumário
1. [Introdução]()
  * 1.1 [Propósito]()
  * 1.2 [Escopo]()
  * 1.3 [Definições, acrônimos e abreviações]()
  * 1.4 [Referências]()
  * 1.5 [Visão Geral]()
2. [Posicionamento]()
  * 2.1 [Oportunidade de Negócio]()
  * 2.2 [Descrição do Problema]()
  * 2.3 [Instrução de Posição do Produto]()
3. [Descrição da Parte Interessada e dos Usuários](#3)
  * 3.1 [Resumo dos Usuários]()
  * 3.2 [Ambiente do Usuário]()
  * 3.3 [Perfis dos Envolvidos](#3.3)
    * 3.3.1 [Equipe de Gestão do Projeto](#3.3.1)
    * 3.3.2 [Equipe de Desenvolvimento do Projeto](#3.3.2)
  * 3.4 [Perfis dos Usuários]()
  * 3.5 [Principais Necessidades dos Usuários ou dos Envolvidos]()
  * 3.6 [Alternativas e Concorrência]()
4. [Visão Geral do Produto]()
  * 4.1 [Perspectiva do Produto]()
  * 4.2 [Resumo dos Recursos]()
5. [Recursos do Produto]()
6. [Restrições]()
  * 6.1 [Restrições de Design]()
  * 6.2 [Restrições de Implementação]()
  * 6.3 [Restrições de Segurança]()
  * 6.4 [Restrições de Uso]()

___
## <a name="1"></a>1.  Introdução
### <a name="1.1"></a>1.1. Propósito
<p>Este documento tem a finalidade de apresentar uma visão geral sobre o webapp GIC ,definindo sua proposta característica, utilidade e requisitos do sistema</p>

### <a name="1.2"></a>1.2. Escopo
<p>Este projeto tem como objetivo central auxiliar o gerenciamento de servidores, recursos médicos e recursos físicos do Hospital Regional do Gama.</p>

### <a name="1.3"></a>1.3. Definições, acrônimos e abreviações
  * FGA - Faculdade do Gama (UnB).
<br></br>
  * UnB - Universidade de Brasília.
<br></br>
  * EPS - Engenharia de Projeto de Software.
<br></br>
  * Servidores - A quem compete prescrever medicamentos, exames e recomendações de saúde.
<br></br>
  * Recursos médicos - equipamentos tais como seringas, luvas, remédios.
<br></br>
  * Recursos físicos - salas de consulta, salas de cirurgia.
<br></br>
  * HRG - Hospital Regional do Gama.

### <a name="1.4"></a>1.4 Referências
  * IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Acesso em: 21 mar. 2018;
<br></br>
  * FREIRE, Thiago; OLIVEIRA, Rodrigo; MORENO, Augusto; NASCIMENTO, Josué; AUGUSTO, Marcelo. Projeto WikiLegis: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2016.2-WikiLegis/wiki. Acesso em 21 mar. 2018;
<br></br>
  * SILVA, Ana; DINIZ, Arthur; OLIVEIRA, Bruna; SILVA, Guilherme; LACERDA, GuilhermE. Projeto Trezentos: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2017.1-Trezentos/wiki. Acesso em 21 mar. 2018;
<br></br>
  * BATISTA, Matheus; ARAÚJO, Igor; WILLER, Guilherme; OLIVEIRA, Vinícius; BARCELOS, Filipe; SOUSA, André. Projeto Escola X: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2017.1-Escola-X/wiki. Acesso em 21 mar. 2018;
<br></br>
  * BORGES, Felipe; HIROSHI, Lucas; MARQUES, Guilherme; KISHIMA, Lucas; NASCIMENTO, Mateus; MARTINS, Michel; MARIA, Natália; Projeto Receituário Médico: Documento de Visão. Disponível em:
  https://github.com/fga-gpp-mds/2017.2-Receituario-Medico/wiki/Documento-de-Vis%C3%A3o . Acesso em 21 mar. 2018.

### <a name="1.5"></a> 1.5. Visão geral
<p> Neste documento estão descritos os detalhes do planejamento da construção do *webapp* GIC. O documento apresentara o objetivo dessa proposta de desenvolvimento que auxiliará os profissionais do hospital a gerenciar seus recursos humanos e físicos bem como dificultar possiveis erros de escala de servidores. E está dividido em:</p>

  * *Posicionamento*: descreve o problema e a oportunidade de Negócio;
<br></br>
  * *Descrição da Parte Interessada e dos Usuários*: descreve o perfil dos interessados no Projeto;
<br></br>
  * *Visão Geral do Produto*: descreve uma visualização de alto nível do *webapp* bem como as capacidades do produto, interfaces e configurações;
<br></br>
  * *Recursos do Produto*: Descreve os recursos do produto
<br></br>
  * *Restrições*:descreve as restrições de design, restrições externas, como requisitos operacionais ou regulamentares;
___

## <a name="2"></a> 2. Posicionamento

### <a name="2.1"></a> 2.1 Oportunidade de Negócio
<p> Atualmente, o sistema de saúde no DF tem alguns problemas sobre o gerenciamento de recursos nos hospitais públicos. Problemas que vão desde má distribuição de equipamentos à alocação disfuncional de funcionários. </p>
<p>Isso se dá ao fato do sistema utilizado nesses hopitais estar bastante ultrapassado e defasado, o que o torna não confiável e pouco prático. Além disso, é de dificil manutenção e não amigável com o usuário, tornando bastante dificil ensinar novos servidores a utilizá-lo.</p>   

<p>Este projeto visa oferecer uma melhora significativa nesse sistema, para que fique mais fácil e prática a alocação correta,no DF, tanto de equipamentos e outros recursos, quanto de profissionais da saúde capazes de resolver problemas onde for preciso.</p>

### <a name="2.1"></a> 2.2 Descrição do Problema
Os servidores dos hospitais tem que, manualmente, fazer uma tabela de horarios para os profissionais de saúde, o que demanda muito tempo e tem forte possiblidade de haver enganos. Além disso, a distribuição de recursos é negativamente afetada, já que são muitas informações para poucas pessoas que lidam com elas.

___

## <a name="3"></a> 3. Descrição da Parte Interessada e dos Usuários

### <a name="3.3"></a> 3.3 Perfis dos Envolvidos

#### <a name="3.3.1"></a> 3.3.1 Equipe de Gestão do Projeto

| | |
| -------------- | ------- |
| __Representantes__ | Ulysses Bernard, Joao Saliba, Rafael Bragança, Eduardo Junio, Caio Araújo. |
| __Descrição__      | Gestores do projeto.    |
| __Tipo__  | Grupo de alunos da Universidade de Brasília que estão matriculados na matéria Gestão de Portfólio de Projeto. |
| __Responsabilidades__ | Gerenciar a equipe visando a entrega da ferramenta web, proposta de acordo com o objetivo e recomendações entregues por eles. |
| __Critérios de Sucesso__ | Orientar o grupo de forma que todos os desenvolvedores tenham um conhecimento equivalente acerca das tecnologias necessárias. Seguiar as estratégias de planejamento de software visando a entrega, dentro do prazo, da aplicação requesitada. |
| __Envolvimento__ | Alto. |
| __ Comentários/Problemas__ |. |

#### <a name="3.3.2"></a> 3.3.2 Equipe de Desenvolvimento do Projeto

| | |
| -------------- | ------- |
| __Representantes__ | Adrielly Rodrigues, Caio César Beleza, Guilherme de Oliveira Aguiar, João Vitor Rosa, Victor Hugo Dias Coelho |
| __Descrição__      |  Desenvolvedores do projeto.   |
| __Tipo__  | Grupo de alunos da Universidade de Brasília que estão matriculados na matéria Métodos de Desenvolvimento de Software. |
| __Responsabilidades__ | Desenvolver, testar e efetivar a aplicação neste documento apresentada. |
| __Critérios de Sucesso__ | Entregar a aplicação de software de acordo com o que foi requisitado pelo cliente e pela equipe de gestores. |
| __Envolvimento__ | Alto |
| __ Comentários/Problemas__ | . |

___

## <a name = "4" ></a> 4. Visão Geral do Produto
<p> O *webapp* tem como funcionalidade principal auxiliar a visualização e organização dos recursos físicos, servidores e arranjo espacial do HRG.
</p>
<p>As informações que serão captadas do banco de dados serão divididas em três partes:</p>
  * *Gestão de servidores:* terá a função de gerenciar a questão das escalas dos servidores do HRG de forma a não haver conflito de horários e mostrar de forma mais coesa e limpa as informações de escala como com quem ele estará trabalhando aquele dia, quantas pessoas estão naquele período do dia (manhã, tarde ou noite), quem está de ferias naquele tempo.
  <br></br>
  * *Gestão de recursos físicos:* terá a função de mostrar o status do armazenamento de recursos como seringas, agulhas, remédio.
  <br></br>
  * *Gestão de arranjo físico:*  terá a função de mostrar aos servidores em questão e aos administradores de logística do hospital as salas ocupadas, as salas livres e as salas que estão inválidas.
  </p>

### <a name ="4.1"> </a> 4.1 Perspectiva do Produto

<p>
O aplicativo tem por expectativa atender de forma ótima as a gestão dentro do hospital facilitando assim a organização interna, assim otimizando e acelerando o atendimento dentro do hospital, também otmizando o tempo do servidor que está na escala no dia, pois a boa gestão fará ele não perder tempo em dúvida de qual consultório ele estará no dia.
</p>

### <a name="4.2"></a> 4.2 Resumo dos Recursos

|Benefício para o cliente|Recursos de suporte|
|-----                   |-----              |
|Organiza a escala de servidores|O *webapp*, através dos dados do bando, mostra a escala levando alguns critérios e mostrando a quantidade de horas que ele terá que trabalhar naquela semana para cumprir a meta atual de horas semanais|
|Organiza a quantidade de recursos|O *webapp*, através do banco de dados, irá mostrar a quantidade de matérial na farmácia do hospital e irá informar quando está acabando|
|Organiza o arrajo insumo físico do hospital|O *webapp*, através do banco de dados, irá mostrar quais salas do hospital estão disponíveis naquele momento do plantão do servidor|
