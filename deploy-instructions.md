## Deploy (resumo rápido)
1. Criar skill no Alexa Developer Console com invocation name: "memoria ativa".
2. Em Interaction Model -> JSON Editor cole `interaction-model.json`.
3. Criar função AWS Lambda (Node 18) e carregar o conteúdo de `lambda/` (npm install local e zip).
4. Configurar permissão de execução e skill endpoint para o ARN da Lambda.
5. Testar no Test Simulator.

Para testes locais: use o ASK CLI para deploy automático.
