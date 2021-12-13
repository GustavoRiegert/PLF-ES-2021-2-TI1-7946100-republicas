# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

Tendo como objetivo principal a criação de um projeto que auxilie à busca por repúblicas, para seu melhor desempenho e adequação, busca-se as vítimas de tal problema elaborando uma entrevista verbal com alguns usuários e não verbal com a maioria deles, por meio de um formulário. A partir disso tornou-se possível o levantamento de dados e histórias de personas podendo dessa forma pegar suas “dores” e otimizá-las, de forma à tornar o projeto mais sucinto e melhorando a experiência de seu usuário.

## Personas

* <p align="center">
  <img src="images/loreneFreitas.png" alt="lorena" width="300" height="200"/>
</p> <br/>
Nome: Lorene Freitas<br/>
Idade: 18<br />
Hobby: Leitura<br/>
Trabalho: Estudante<br/>
Personalidade: Extrovertida, Carismática, Brincalhona<br/>
Sonhos: Passar em medicina na federal<br/>
Objetos e lugares: Celular e Computador. Uma alta frequência no uso do celular e moderada quanto ao computador, usado para estudo e entretenimento.<br/>
Objetivos chaves: Necessidade em encontrar uma república com custo moderado/baixo para que possa continuar a seguir seu sonho de ir pra faculdade.<br/>
Como devemos tratá-la: Local arejado, com convívio intenso de pessoas, para que possa criar laços de amizades.<br/>
Nunca devemos: Fotos com má qualidade, que não permita o usuário ver bem qual o local que está entrando, omissão de informações.<br/>

* <p align="center">
  <img src="images/marcosGabriel.png" alt="lorena" width="300" height="200"/>
</p> <br/>
Nome: Marcos Gabriel<br/>
Idade: 23<br/>
Hobby: Praticar esportes<br/>
Trabalho: Professor<br/>
Personalidade: Extrovertido, engraçado e animado<br/>
Sonhos: Criar algo que ajude a comunidade.<br/>
Objetos e lugares: Celular: Usa com mais frequência para se comunicar  e se manter informado. Notebook: Usa para entretenimento e para trabalhar.   <br/>         
Objetivos chaves: Encontrar um lugar para morar enquanto cursa a faculdade<br/>
Como devemos tratá-la: Mostrar todas as informações necessárias para que tenham mais informações sobre o local e das características do local.<br/>
Nunca devemos: Não deixar dar falsas informações ou deixar de entregar todas as informações necessárias. <br/>


* <p align="center">
  <img src="images/lauraAndrade.png" alt="lorena" width="300" height="200"/>
</p> <br/>
Nome:  Laura Andrade<br/>
Idade: 19<br/>
Hobby: Passear com cachorrinho.<br/>
Trabalho: Estudante.<br/>
Personalidade: Divertida, carismática porém sarcástica.<br/>
Sonhos: Intercâmbio em harvard<br/>
Objetos e lugares: Celular, notebook, desktop<br/>
Objetivos chaves: Encontrar um lugar tranquilo para morar, ter informações sobre os arredores sobre o local, bom custo/benefício, proximidade com a universidade.<br/>
Como devemos tratá-la: Mostrar objetivos claros e sucintos, informações prioritárias e avaliações em destaque. <br/>
Nunca devemos: Omitir qualquer tipo de informação, pouco esclarecimento<br/>

## Histórias de Usuários

A partir das entrevistas de cada persona abaixo e suas histórias podemos ter como limite o que irá auxiliar no projeto. Focamos as entrevistas naquelas pessoas que são estudantes/universitários que moram ou pretendem morar em repúblicas. Para ter um melhor foco do projeto visto que eles são o principal público afetado:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                                  |
|--------------------|--------------------------------------------------|----------------------------------------------------------------------------------------|
|Lorene Freitas      | Preço e fotos que mostrem completamente o local  | Criar um filtro baseado na renda da pessoa que pretende locar                          |
|Letícia Alves       | Localização, Proximidade das Universidades, Perfil de Moradores | Melhor filtro a partir de uma localização baseada no local da faculdade para usuários que não conhecem bem os bairros próximos a faculdade                        |
|João Victor      |Uma forma de conversar com as pessoas que dividirá a república antes de decidir, para poder ter uma avaliação se será de agrado para todos     |Uma amostra do perfil das pessoas que irá morar junto para achar pontos de interesse comum  |
|Laura Andrade       |Avaliações de repúblicas por moradores que já moraram lá  |Ajudariam a buscar aquelas casas que possuem uma melhor experiência vivenciada por cada um dos ex-moradores                            |
|Marcus Gabriel     |Como seria organizado as despesas da casa   |Para melhor entendimento e praticidade a especificação no título do anúncio pouparia tempo  |
|Giovana Melo | As coisas que tem próximo a ela, Informações sobre o bairro (supermercados, farmácias, atendimento médico) | Diminuição dos gastos com transportes para esses locais   |
|Rafael Brandão | Possíveis pontos de conflito explicitados | Facilitaria na adequação do usuário no ambiente
|Augusto Mentes | Acredito que a pergunta: "O que ou onde você estuda?". Poderia ajudar a encontrar um lugar mais "sua cara", com pessoas que compartilhem do mesmo curso ou faculdade | Facilita a criação de uma amizade, provendo um melhor convívio 

## Requisitos

A capacidade necessitada por um usuário para resolver o problema ou atingir um objetivo é chamada de requisito a partir dessa existem 3 tipos que auxiliam na elaboração do projeto, entre eles:

### Requisitos Funcionais

|ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|------|--------------------------------|-----------------------|
|RF-001 | Ao entrar no site deverá aparecer ao usuário uma caixa com a cidade e a universidade a qual ele busca o imóvel (República), juntamente com um mapa do mesmo | ALTA |
|RF-002 | Em sua página inicial o site deverá ter um campo exclusivo para login e cadastro de usuários. | ALTA |
|RF-003 | O site deverá ter um espaço onde permite cadastro de imóveis (Repúblicas de alunos). | ALTA |
|RF-004 | O site deverá ter um espaço para mostrar a capacidade máxima possível de pessoas na casa, de quantas pessoas residem atualmente e informar quando a república estiver com sua lotação máxima. | ALTA |
|RF-005 | O site deverá promover ao usuário um campo de filtros, onde possa selecionar as opções de detalhes e comodidades que ela queira na república para facilitar a busca. | ALTA |
|RF-006 | O site deverá ter um campo para Chat com o responsável da república para tirar dúvidas e para possíveis negociações. | MÉDIA |
|RF-007 | O site deve permitir que o anunciante possa editar o anúncio da república de alunos, podendo: Atualizar as fotos e a descrição do local e mudar o valor. | MÉDIA |
|RF-008 | Ao clicar no anúncio o usuário poderá ver mais detalhes dos imóveis e quantos hóspedes residem nele, além de comentários de ex-moradores e um local para ser redirecionado para o chat | ALTA |
|RF-009 | Ao criar o anúncio o anunciante poderá ver os comentários que são feitos pelos usuários e editar os detalhes descritos por ele sobre a república de alunos como: As fotos publicadas sobre o local, o valor pedido, o mapa da localização e as comodidades do local. | BAIXA |
|RF-010 | O sistema do site deve registrar quando a república estiver com sua lotação máxima e aparecer indisponível quando as pessoas estiverem pesquisando para facilitar a busca. | ALTA |
|RF-011 | O mapa da página de entrada deverá aparecer no local as repúblicas próximas ao que o usuário colocar sua cidade e faculdade | MÉDIA |
|RF-012 | A partir da filtragem de itens deverá aparecer apenas os imóveis com prioridade das comodidades selecionadas | MÉDIA |
|RF-013 | parte para criar um anúncio deverá ter opções para o dono de república especificar o imóvel com as comodidades e detalhes além de poder adicionar fotos do mesmo | ALTA |
|RF-014 | Ao clicar em meus anúncios o anunciante será redirecionado para uma página a qual poderá excluir seu anúncio e ver editá-lo | MÉDIA |

### Requisitos não Funcionais

ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|------|----------------------------------------------|---------|
RNF-01 | A parte de cadastro deverá ser de forma simplificada podendo criar um e-mail e senha novos a partir do site ou para facilitar sincronizar com as contas do Google ou Facebook. | ALTA |
RNF-02 | A parte de login deverá ser sincronizada com a conta do Google ou Facebook, ou a pessoa poderá logar na conta criada na parte do cadastre-se | ALTA |
RNF-03 | O chat deverá ser de forma simples e objetiva sem muitas informações para os usuários, apenas aquilo necessário | BAIXA |
RNF-04 | Ao clicar em meus anúncios o anunciante será redirecionado para uma página a qual poderá excluir seu anúncio e ver editá-lo | MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID    | RESTRIÇÃO                                             |
|------|-------------------------------------------------------|
|RE-001| O programa deve ser implementado em HTML/CSS e JavaScript |
|RE-002| O projeto deverá ser entregue no final do semestre letivo de 2021 |
|RE-003| Não usará ranking de repúblicas |
|RE-004| Não criará contrato entre anunciante e visitante |
