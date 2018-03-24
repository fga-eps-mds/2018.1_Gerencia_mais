# Controle de versão:
|Data|Versão|Descrição|Autor|
|--- |---   |---      |---  |
|21/03/2018|0.1|adição dos primeiros passos do documento de visão| Victor|
|21/03/2018|0.2|construção do escopo do documento de visão| Victor|
|21/03/2018|0.3|adição dos perfis dos envolvidos|Guilherme Aguiar |
|22/03/2018|0.4|adição do Posicionamento|Caio César, Victor|
|22/03/2018|0.5|adição do topico 1 do sumário a Introdução|Victor,Caio|

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
  * 4.3 [Suposições e Dependências]()
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
  * FGA - Faculdade do Gama (UnB)
  * UnB - Universidade de Brasília
  * EPS - Engenharia de Projeto de Software
  * Servidores - A quem compete prescrever medicamentos, exames e recomendações de saúde.
  * Recursos médicos - equipamentos tais como seringas, luvas, remédios.
  * Recursos físicos - salas de consulta, salas de cirurgia.

### <a name="1.4"></a>1.4 Referências
  * IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Acesso em: 21 mar. 2018;
  * FREIRE, Thiago; OLIVEIRA, Rodrigo; MORENO, Augusto; NASCIMENTO, Josué; AUGUSTO, Marcelo. Projeto WikiLegis: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2016.2-WikiLegis/wiki. Acesso em 21 mar. 2018;
  * SILVA, Ana; DINIZ, Arthur; OLIVEIRA, Bruna; SILVA, Guilherme; LACERDA, GuilhermE. Projeto Trezentos: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2017.1-Trezentos/wiki. Acesso em 21 mar. 2018;
  * BATISTA, Matheus; ARAÚJO, Igor; WILLER, Guilherme; OLIVEIRA, Vinícius; BARCELOS, Filipe; SOUSA, André. Projeto Escola X: Documento de Visão. Disponível em: https://github.com/fga-gpp-mds/2017.1-Escola-X/wiki. Acesso em 21 mar. 2018;
  * BORGES, Felipe; HIROSHI, Lucas; MARQUES, Guilherme; KISHIMA, Lucas; NASCIMENTO, Mateus; MARTINS, Michel; MARIA, Natália; Projeto Receituário Médico: Documento de Visão. Disponível em:
  https://github.com/fga-gpp-mds/2017.2-Receituario-Medico/wiki/Documento-de-Vis%C3%A3o . Acesso em 21 mar. 2018.

### <a name="1.5"></a> 1.5. Visão geral
<p> Neste documento estão descritos os detalhes do planejamento da construção do *webapp* GIC. O documento apresentara o objetivo dessa proposta de desenvolvimento que auxiliará os profissionais do hospital a gerenciar seus recursos humanos e físicos bem como dificultar possiveis erros de escala de servidores. E está dividido em:</p>

  * *Posicionamento*: descreve o problema e a oportunidade de Negócio;
  * *Descrição da Parte Interessada e dos Usuários*: descreve o perfil dos interessados no Projeto;
  * *Visão Geral do Produto*: descreve uma visualização de alto nível do *webapp* bem como as capacidades do produto, interfaces e configurações;
  * *Recursos do Produto*: Descreve os recursos do produto
  * *Restrições*:descreve as restrições de design, restrições externas, como requisitos operacionais ou regulamentares;

## <a name="2"></a> 2. Posicionamento

### <a name="2.1"></a> 2.1 Oportunidade de Negócio
<p> Atualmente, o sistema de saúde no DF tem alguns problemas sobre o gerenciamento de recursos nos hospitais públicos. Problemas que vão desde má distribuição de equipamentos à alocação disfuncional de funcionários. </p>
<p>Isso se dá ao fato do sistema utilizado nesses hopitais estar bastante ultrapassado e defasado, o que o torna não confiável e pouco prático. Além disso, é de dificil manutenção e não amigável com o usuário, tornando bastante dificil ensinar novos servidores a utilizá-lo.</p>   

<p>Este projeto visa oferecer uma melhora significativa nesse sistema, para que fique mais fácil e prática a alocação correta,no DF, tanto de equipamentos e outros recursos, quanto de profissionais da saúde capazes de resolver problemas onde for preciso.</p>

### <a name="2.1"></a> 2.2 Descrição do Problema
Os servidores dos hospitais tem que, manualmente, fazer uma tabela de horarios para os profissionais de saúde, o que demanda muito tempo e tem forte possiblidade de haver enganos. Além disso, a distribuição de recursos é negativamente afetada, já que são muitas informações para poucas pessoas que lidam com elas.

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
