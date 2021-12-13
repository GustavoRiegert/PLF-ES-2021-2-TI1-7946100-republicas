# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

Tendo como objetivo principal a criação de um projeto que auxilie à busca por repúblicas, para seu melhor desempenho e adequação, busca-se as vítimas de tal problema elaborando uma entrevista verbal com alguns usuários e não verbal com a maioria deles, por meio de um formulário. A partir disso tornou-se possível o levantamento de dados e histórias de personas podendo dessa forma pegar suas “dores” e otimizá-las, de forma à tornar o projeto mais sucinto e melhorando a experiência de seu usuário.

## Personas

* <div align="center">
    ![image](https://user-images.githubusercontent.com/89880731/145891312-0e42d7a5-cc72-4f6e-bc09-b4e99e4b6cc7.png)
</div> Nome: Lorene Freitas
Idade: 18
Hobby: Leitura
Trabalho: Estudante
Personalidade: Extrovertida, Carismática, Brincalhona
Sonhos: Passar em medicina na federal
Objetos e lugares: Celular e Computador. Uma alta frequência no uso do celular e moderada quanto ao computador, usado para estudo e entretenimento.
Objetivos chaves: Necessidade em encontrar uma república com custo moderado/baixo para que possa continuar a seguir seu sonho de ir pra faculdade
Como devemos tratá-la: Local arejado, com convívio intenso de pessoas, para que possa criar laços de amizades.
Nunca devemos: Fotos com má qualidade, que não permita o usuário ver bem qual o local que está entrando, omissão de informações.

* <div align="center">
    ![image](https://user-images.githubusercontent.com/89880731/145891280-8505eb37-5481-46ca-b2c3-a4ecab4b38c3.png)
</div>Nome: Marcos Gabriel
Idade: 23
Hobby: Praticar esportes
Trabalho: Professor
Personalidade: Extrovertido, engraçado e animado
Sonhos: Criar algo que ajude a comunidade.
Objetos e lugares: Celular: Usa com mais frequência para se comunicar  e se manter informado. Notebook: Usa para entretenimento e para trabalhar.            
Objetivos chaves: Encontrar um lugar para morar enquanto cursa a faculdade
Como devemos tratá-la: Mostrar todas as informações necessárias para que tenham mais informações sobre o local e das características do local.
Nunca devemos: Não deixar dar falsas informações ou deixar de entregar todas as informações necessárias. 

* <div align="center">
    ![image](https://user-images.githubusercontent.com/89880731/145891415-ed61c45c-d68f-4566-8a08-6a15435c97cf.png)
</div>Nome:  Laura Andrade
Idade: 19
Hobby: Passear com cachorrinho.
Trabalho: Estudante.
Personalidade: Divertida, carismática porém sarcástica.
Sonhos: Intercâmbio em harvard
Objetos e lugares: Celular, notebook, desktop
Objetivos chaves: Encontrar um lugar tranquilo para morar, ter informações sobre os arredores sobre o local, bom custo/benefício, proximidade com a universidade.
Como devemos tratá-la: Mostrar objetivos claros e sucintos, informações prioritárias e avaliações em destaque. 
Nunca devemos: Omitir qualquer tipo de informação, pouco esclarecimento

## Histórias de Usuários

A partir das entrevistas de cada persona abaixo e suas histórias podemos ter como limite o que irá auxiliar no projeto. Focamos as entrevistas naquelas pessoas que são estudantes/universitários que moram ou pretendem morar em repúblicas. Para ter um melhor foco do projeto visto que eles são o principal público afetado:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                                  |
|--------------------|--------------------------------------------------|----------------------------------------------------------------------------------------|
|Lorene Freitas      | Preço e fotos que mostrem completamente o local  | Criar um filtro baseado na renda da pessoa que pretende locar                          |
|Letícia Alves       | Localização, Proximidade das Universidades, Perfil de Moradores | Melhor filtro a partir de uma localização baseada no local da faculdade para usuários que não conhecem bem os bairros próximos a faculdade                        |
|João Victor      |Uma forma de conversar com as pessoas que dividirá a república antes de decidir, para poder ter uma avaliação se será de agrado para todos     |Uma amostra do perfil das pessoas que irá morar junto para achar pontos de interesse comum  |
|Laura Andrade       |Avaliações de repúblicas por moradores que já moraram lá  |Ajudariam a buscar aquelas possuem uma melhor experiência vivenciada por cada um dos ex-moradores                            |
|Marcus Gabriel     |Como seria organizado as despesas da casa   |Para melhor entendimento e praticidade a especificação no título do anúncio pouparia tempo  |
|Giovana Melo | As coisas que tem próximo a ela, Informações sobre o bairro (supermercados, farmácias, atendimento médico) | Diminuição dos gastos com transportes para esses locais   |
|Rafael Brandão | Possíveis pontos de conflito explicitados | Facilitaria na adequação do usuário no ambiente
|Augusto Mentes | Acredito que a pergunta: "O que ou onde você estuda?". Poderia ajudar a encontrar um lugar mais "sua cara", com pessoas que compartilhem do mesmo curso ou faculdade | Facilita a criação de uma amizade, provendo um melhor convívio 

## Requisitos

As tabelas que a seguir apresentam os requisitos funcionais e não funcionais, estes detalham o escopo do projeto.

### Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RF-001| O sistema deve prover o cadastro do usuário contendo as entradas: nome, e-mail e senha. | ESSENCIAL | 
|RF-002| O sistema deve prover o cadastro de informações usuário contendo as entradas:  idade, sexo, tipo sanguíneo, alergias. |  ALTA |
|RF-003| O sistema deve prover o cadastro do histórico de vacinas do usuário. O cadastro deve possibilitar as entradas: vacina aplicada, data de aplicação, data da próxima dose (se houver), observações (campo aberto - local, cidade, etc). | ESSENCIAL |
|RF-004| O sistema deve prover o cadastro do nome e data das próximas vacinas a serem aplicadas no usuário. | ALTA |
|RF-005| O sistema deve conter um calendário com marcação das futuras doses já cadastradas. | DESCARTADO |
|RF-006| O sistema deve indicar as próximas doses cadastradas com antecedência de 7 dias e no dia da vacinação. O aviso deve ser dado por meio de mensagem pop-up e/ou email. | DESCARTADO |
|RF-007| O sistema deve informar sobre as campanhas de vacinação que estão em andamento ou vão começar. | DESCARTADO |
|RF-008| O sistema deve prover um menu de configurações. | DESCARTADO |
|RF-009| O sistema deve prover um sistema de login e logout. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O layout deve ser responsivo possibilitando uma experiência de usuário completa em dispositivos desktops e mobile. | ALTA |
|RNF-002| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA |
|RNF-003| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID    | Restrição                                             |
|------|-------------------------------------------------------|
|RE-001| O programa deve ser implementado em HTML/CSS e JavaScript. |
|RE-002| O projeto deverá ser entregue no final do semestre letivo. |
|RE-003| A equipe não pode subcontratar o desenvolvimento do trabalho. |

