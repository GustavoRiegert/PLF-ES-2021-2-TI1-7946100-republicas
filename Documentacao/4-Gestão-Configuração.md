# Gestão de Configuração

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

E o controle de versão seguirá o [Versionamento Semântico 2.0.0](https://semver.org/lang/pt-BR/):

Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

- `versão Maior(MAJOR)`: quando fizer mudanças incompatíveis na API,
- `versão Menor(MINOR)`: quando adicionar funcionalidades mantendo compatibilidade, e
- `versão de Correção(PATCH)`: quando corrigir falhas mantendo compatibilidade.

Rótulos adicionais para pré-lançamento(pre-release) e metadados de construção(build) estão disponíveis como extensão ao formato MAJOR.MINOR.PATCH.

## Hospedagem

O website será hospedado no [Netlify](https://www.netlify.com/) e a cada merge na branch `master` o website no Netlify será atualizado automaticamente.
