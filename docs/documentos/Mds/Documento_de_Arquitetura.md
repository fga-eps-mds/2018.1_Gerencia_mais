# Controle de versão:
|Data|Versão|Descrição|Autor|
|--- |---   |---      |---  |
|21/03/2018|0.1|Abertura do Documento| Guilherme Aguiar|
|27/03/2018|0.2|Adição do Tópico 1| Adrielly Rodrigues|


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
