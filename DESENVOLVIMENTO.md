

  Planejamento do Projeto

O projeto AgendaSUS tem como objetivo criar uma aplicação full stack com separação clara entre backend, frontend e banco de dados, utilizando Docker e Docker Compose para facilitar a orquestração dos serviços. A aplicação simula um agendamento de consultas, permitindo visualizar e manipular dados médicos em um consultório digital.

Para garantir organização e rastreabilidade durante o desenvolvimento, o projeto foi dividido em etapas, cada uma focada em um componente (frontend, backend, banco de dados, integração e dockerização).



  Quantidade de Sprints Utilizadas

O desenvolvimento foi dividido em 2 sprints, conforme detalhado abaixo:

 Sprint 1 — Estrutura da Aplicação (5 dias)
 Criação do backend em Node.js com Express.
 Implementação do frontend com React e Vite.
 Conexão com banco de dados MySQL (utilizando Sequelize ou `mysql` puro).
 Testes locais sem Docker.

  Sprint 2 — Dockerização e Integração (4 dias)
 Criação dos `Dockerfile`s e do `docker-compose.yml`.
 Definição de rede interna entre containers.
 Uso de variáveis de ambiente com `.env`.
 Testes de subida dos serviços com `docker-compose up`.



  Desafios Enfrentados e Soluções Adotadas

 1.  Conflito de portas no Docker
Problema: A porta `3001` já estava ocupada por outro processo no host.  
Solução: Identificamos o processo utilizando a porta com `netstat` e encerramos manualmente via `taskkill`. Como alternativa, configuramos outra porta externa no `docker-compose.yml`.

 2.  Falha ao rodar o backend com script inexistente
Problema: O `package.json` do backend não continha o script `"dev"` exigido pelo Dockerfile.  
Solução: Corrigimos o script para usar `"start"` com `nodemon` e ajustamos o `Dockerfile` para usar `CMD ["npm", "start"]`.

 3.  Vite não rodando na porta esperada
Problema: O Vite, por padrão, sobe na porta `5173`, mas o Docker estava expondo a porta `3000`.  
Solução: Alteramos o `EXPOSE` e o mapeamento de portas no `docker-compose.yml` para refletir corretamente `5173`.

 4.  Erro "MODULE_NOT_FOUND" no backend
Problema: O nome do arquivo estava escrito como `indedx.js` em vez de `index.js` no `package.json`.  
Solução: Corrigimos o nome para `index.js`.



 Ferramentas Utilizadas

 Node.js + Express — Backend REST API
 React + Vite — Frontend SPA
 MySQL 8 — Banco de dados relacional
 Docker / Docker Compose — Conteinerização
 Visual Studio Code — IDE principal
 CMD e PowerShell — Diagnóstico e manipulação de portas
 GitHub — Controle de versão



