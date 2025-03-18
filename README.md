<h1 align="center">🦦Capydev🦦</h1>

<p align="center">A CapyDev é reconhecida por sua abordagem ágil e por desenvolver produtos tecnológicos de ponta que ajudam seus clientes a alcançar ao próximo nível em inovação digital. em busca de novos desafios, a equipe continua crescendo e se reinventando, com a missão de criar soluções que façam a diferença no mundo conctado.
A CapyDev é uma equipe de desenvolvedores criada em 2024 por um grupo de estudantes da Fatec Jacareí apaixonados por tecnologia e inovação. Inspirados pela resiliência das Capivaras, animal símbolo da equipe, os decidiram unir suas habilidades de desenvolvimento de software, Design digital, Gerenciamento de dados, entre outros conhecimentos, para resolver problemas de maneira eficiente e colaborativa.</p>

<h2 align="center">📌Sobre o Projeto</h2>

# 🔥 IGNIS – Monitoramento Inteligente de Queimadas
 
O **IGNIS** é uma plataforma web desenvolvida para facilitar o acesso a informações sobre queimadas e incêndios florestais. O sistema utiliza dados públicos do **Programa Queimadas – INPE** para fornecer informações detalhadas sobre **focos de calor, risco de fogo e áreas queimadas** em diferentes regiões do Brasil.
 
Com o IGNIS, gestores ambientais, pesquisadores, bombeiros e a população em geral podem visualizar **mapas interativos, gráficos dinâmicos e análises estatísticas**, auxiliando na **prevenção, combate e monitoramento de incêndios florestais**.
 
---

<h2>Sprints</h2>

| Sprints | Início | Fim | Relatório |
| ------- | ------ | --- | --------- |
| 1ª sprint | 24/03/2025 | 17/04/2025 |
| 2ª sprint | 22/04/2025 | 15/05/2025 |
| 3ª sprint | 16/05/2025 | 10/06/2025 |

<h2>Product Backlog</h2>

| ID    | Requisito Funcional                      | Descrição | Prioridade | User Story | Critérios de Aceitação (DoD) | Definição de Pronto (DoR) |
|-------|----------------------------------------|-----------|------------|------------|-----------------------------|---------------------------|
| **RF01** | Focos de calor por estado | Permitir consulta dos focos de calor por estado. | Alta | Como usuário, quero visualizar os focos de calor por estado para entender onde há incêndios em andamento. | ✅ Implementado e validado.<br> ✅ Informações exibidas de forma clara e acessível.<br> ✅ Dados validados para garantir precisão.<br> ✅ Compatível com diferentes dispositivos. | 🔹 Informações armazenadas no banco **Queimadas**.<br> 🔹 Exibição: **tabelas, gráficos de linha e mapa interativo**.<br> |
| **RF02** | Focos de calor por bioma | Permitir consulta dos focos de calor por bioma. | Alta | Como usuário, quero visualizar os focos de calor por bioma para entender os impactos ambientais dos incêndios. | ✅ Implementado e validado com testes.<br> ✅ Dados apresentados de forma clara e estruturada. | 🔹 Dados organizados por bioma e validados antes da implementação.<br> 🔹 Exibição: **gráficos interativos e tabelas**. |
| **RF03** | Risco de fogo por estado | Permitir consulta do risco de fogo por estado. | Alta | Como usuário, quero consultar o risco de fogo por estado para planejar ações preventivas. | ✅ Funcionalidade concluída e validada por especialista. | 🔹 Fonte de dados: **Banco Queimadas**.<br> 🔹 Exibição validada pela equipe. |
| **RF04** | Risco de fogo por bioma | Permitir consulta do risco de fogo por bioma. | Alta | Como usuário, quero consultar o risco de fogo por bioma para avaliar padrões ambientais. | ✅ Implementado e testado para garantir precisão. | 🔹 Fonte de dados validada.<br> 🔹 Exibição em **gráficos e tabelas comparativas**. |
| **RF05** | Área queimada por estado | Permitir consulta da área queimada por estado. | Média | Como usuário, quero visualizar a área queimada por estado para compreender a extensão dos incêndios. | ✅ Dados apresentados corretamente.<br> ✅ Precisão validada por testes. | 🔹 Exibição em **gráficos de área e tabelas comparativas**.<br> 🔹 Base de dados estruturada e validada. |
| **RF06** | Área queimada por bioma | Permitir consulta da área queimada por bioma. | Média | Como usuário, quero acessar dados da área queimada por bioma para entender os impactos dos incêndios. | ✅ Implementado e funcionando corretamente. | 🔹 Informações revisadas antes da implementação.<br> 🔹 Exibição: **gráficos interativos e tabelas dinâmicas**. |
| **RF07** | Gráficos de focos de calor | Exibir gráficos de focos de calor por estado e bioma. | Média | Como usuário, quero visualizar gráficos de focos de calor para facilitar a análise dos dados. | ✅ Criado e validado para garantir precisão.<br> ✅ Responsivo para diferentes telas. | 🔹 Formato de gráfico definido pela equipe. |
| **RF08** | Gráficos de risco de fogo | Exibir gráficos do risco de fogo por estado e bioma. | Média | Como usuário, quero visualizar gráficos de risco de fogo para entender as áreas mais vulneráveis. | ✅ Desenvolvido e validado para garantir precisão. | 🔹 Dados necessários foram definidos. |
| **RF09** | Gráficos de área queimada | Exibir gráficos da área queimada por estado e bioma. | Média | Como usuário, quero visualizar gráficos da área queimada para identificar padrões de recuperação ambiental. | ✅ Implementado e testado. | 🔹 Organização dos dados nos gráficos foi definida. |
| **RF10** | Restringir consultas por tempo | Permitir que o usuário filtre consultas por período de tempo. | Alta | Como usuário, quero filtrar os dados por período de tempo para análise específica. | ✅ Filtros de tempo funcionando corretamente. | 🔹 Regras de filtragem definidas pela equipe. |
| **RF11** | Análise de meses de risco de fogo | Permitir visualizar os meses com maior risco de fogo. | Alta | Como usuário, quero identificar os meses mais críticos para planejar ações preventivas. | ✅ Implementado e validado. | 🔹 Base de dados validada: **Banco Queimadas**.<br> 🔹 Informações revisadas antes da implementação. |
| **RF12** | Análise de relação entre risco e área queimada | Permitir analisar se o risco de fogo está associado a áreas queimadas. | Alta | Como usuário, quero avaliar a correlação entre risco de fogo e áreas queimadas para melhorar previsões. | ✅ Dashboard exibe corretamente a relação entre risco de fogo e área queimada. | 🔹 Cálculos estatísticos definidos e validados. |
| **RF13** | Diagramas UML | Criar diagramas de casos de uso, classes e sequência. | Alta | Como usuário, quero visualizar diagramas UML para entender melhor o funcionamento do sistema. | ✅ Diagramas criados e revisados pelo time. | 🔹 Requisitos levantados antes da modelagem UML.<br> 🔹 Softwares: **Astah**.<br> 🔹 Etapas definidas para modelagem e validação. |

---

<h2>Ferramentas Utilizadas</h2>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", width="40", heigth="40"/>
  <img src="https://github.com/Capydev-jac/Capydev/blob/main/docs/images/dbdesignerlogo.png", width="40", heigth="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg", width="40", heigth="40"/>
  <img src="https://github.com/Capydev-jac/Capydev/blob/main/docs/images/typescript_logo.png", width="40", heigth="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg", width="40", heigth="40"/>
</div>

<h2>Equipe</h2>

| Nome | Cargo | Midia Social |
| ---- | ----- | ------------ |
| Pedro Prado | Scrum Master | <a href="https://github.com/PeedroPrado"><img src="https://skillicons.dev/icons?i=github"></a> |
| Felipe Ribeiro | Product Owner | <a href="https://github.com/feliperib286"><img src="https://skillicons.dev/icons?i=github"></a> |
| Felipe Adriano | Desenvolvedor | <a href="https://github.com/Felipe-ACG"><img src="https://skillicons.dev/icons?i=github"></a> |
| Gabriel Frois | Desenvolvedor | <a href="https://github.com/GabrielFrois"><img src="https://skillicons.dev/icons?i=github"></a> |
| Gabriel Camargo | Desenvolvedor | <a href="https://github.com/AllanDreemur"><img src="https://skillicons.dev/icons?i=github"></a> |
| João Victor | Desenvolvedor | <a href="https://github.com/joaoestreano"><img src="https://skillicons.dev/icons?i=github"></a> |
