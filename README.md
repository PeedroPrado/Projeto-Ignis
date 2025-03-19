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

| **ID** | **Requisito**                          | **Descrição**                                                     | **Prioridade** | **User Story **                                                                                                                                              | **Critérios de Aceitação (DoD)**                                                                                                                                                              | **Definição de Pronto (DoR)**                                                                                                                                                                                                                                     |
|--------|----------------------------------------|------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF01   | Focos de calor por estado              | Permitir consulta dos focos de calor por estado.                 | Alta           | Como usuário, eu quero ver onde estão ocorrendo os incêndios em cada estado para entender melhor onde há incêndios.                                                                  | ✅ Implementado e validado. <br>✅ Informações exibidas de forma clara. <br>✅ Dados validados. <br>✅ Compatível com diferentes dispositivos. | 🔹 Banco de dados: Queimadas. <br>🔹 Exibição: Tabelas, gráficos e mapa interativo. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF02   | Focos de calor por bioma               | Permitir consulta dos focos de calor por bioma.                   | Alta           | Como usuário, eu quero ver onde estão os incêndios em diferentes biomas (como floresta, cerrado) para entender os impactos ambientais desses incêndios.                               | ✅ Testado e validado. <br>✅ Dados apresentados de forma clara. | 🔹 Banco de dados: Queimadas. <br>🔹 Exibição: Gráficos interativos e tabelas. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF03   | Risco de fogo por estado               | Permitir consulta do risco de fogo por estado.                   | Alta           | Como usuário, eu quero ver o risco de fogo em cada estado para poder planejar ações preventivas e proteger a população.                                                                 | ✅ Validado por especialista. | 🔹 Banco de dados: Queimadas. <br>🔹 Exibição validada pela equipe. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF04   | Risco de fogo por bioma                | Permitir consulta do risco de fogo por bioma.                    | Alta           | Como usuário, eu quero ver o risco de incêndios em diferentes biomas para entender quais áreas são mais vulneráveis.                                                                  | ✅ Implementado e testado. | 🔹 Banco de dados validado. <br>🔹 Exibição em gráficos comparativos. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF05   | Área queimada por estado               | Permitir consulta da área queimada por estado.                   | Média          | Como usuário, eu quero ver quanto de área foi queimada em cada estado para entender a extensão dos incêndios e focar em áreas mais críticas.                                          | ✅ Precisão validada. | 🔹 Banco de dados estruturado. <br>🔹 Exibição em gráficos de área. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF06   | Área queimada por bioma                | Permitir consulta da área queimada por bioma.                    | Média          | Como usuário, eu quero ver a área queimada em diferentes biomas para entender os impactos ambientais de cada bioma.                                                                  | ✅ Implementado e funcionando. | 🔹 Banco de dados validado. <br>🔹 Exibição: Gráficos interativos e tabelas. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF07   | Gráficos de focos de calor             | Exibir gráficos de focos de calor por estado e bioma.             | Média          | Como usuário, eu quero visualizar gráficos que mostrem onde os focos de calor estão para facilitar a análise desses dados.                                                            | ✅ Responsivo para diferentes telas. | 🔹 Formato de gráfico definido pela equipe. <br>🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF08   | Gráficos de risco de fogo              | Exibir gráficos do risco de fogo por estado e bioma.              | Média          | Como usuário, eu quero ver gráficos que mostrem o risco de fogo para poder entender melhor quais áreas precisam de mais atenção e prevenção.                                            | ✅ Testado e validado. | 🔹 Dados organizados previamente. <br>🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF09   | Gráficos de área queimada              | Exibir gráficos da área queimada por estado e bioma.             | Média          | Como usuário, eu quero ver gráficos da área queimada para entender melhor os padrões de recuperação e o impacto dos incêndios ao longo do tempo.                                       | ✅ Implementado e testado. | 🔹 Organização dos dados definida. <br>🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF10   | Restringir consultas por tempo         | Permitir que o usuário filtre consultas por período de tempo.    | Alta           | Como usuário, eu quero filtrar os dados por período de tempo (por exemplo, por mês ou ano) para analisar um período específico e tirar conclusões mais detalhadas.                    | ✅ Filtros de tempo funcionando corretamente. | 🔹 Regras de filtragem definidas pela equipe. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF11   | Análise de meses de risco de fogo      | Permitir visualizar os meses com maior risco de fogo.            | Alta           | Como usuário, eu quero identificar os meses do ano com maior risco de fogo para planejar ações preventivas e ajudar a evitar incêndios em meses críticos.                             | ✅ Implementado e validado. | 🔹 Banco de dados validado: Queimadas. <br>🔹 Informações revisadas antes da implementação. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF12   | Análise de relação entre risco e área queimada | Permitir analisar se o risco de fogo está associado a áreas queimadas. | Alta           | Como usuário, eu quero analisar a relação entre o risco de fogo e as áreas queimadas para melhorar as previsões sobre onde os incêndios podem acontecer e se espalhar.                  | ✅ Dashboard exibe corretamente a relação entre risco de fogo e área queimada. | 🔹 Cálculos estatísticos definidos e validados. <br>🔹 Softwares: PostgreSQL, DB Designer. |
| RF13   | Diagramas UML                          | Criar diagramas de casos de uso, classes e sequência.            | Alta           | Como usuário, eu quero ver diagramas que mostrem como o sistema funciona e como as partes dele se conectam, para entender melhor o funcionamento do sistema.                          | ✅ Diagramas criados e revisados pelo time. | 🔹 Requisitos levantados antes da modelagem UML. <br>🔹 Softwares: Astah, Bizagi. <br>🔹 Etapas definidas para modelagem e validação. |


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
