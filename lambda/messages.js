// mensagens e SSML reutilizáveis
const SSML = (text) => `<speak><break time="200ms"/>${text}<break time="300ms"/></speak>`;

module.exports = {
  WELCOME: SSML('Bem-vindo ao Memória Ativa. Quer jogar memorização, diferenças, quiz ou matemática?'),
  REPROMPT_MAIN: 'Diga: memorização, diferenças, quiz ou matemática.',
  GOOD_JOB: SSML('Muito bem! Excelente!'),
  TRY_AGAIN: SSML('Não foi bem. Vamos tentar outra vez?'),
  ASK_REPEAT: 'Quer que eu repita? Diga repita para ouvir novamente.',
  HELP: SSML('Eu sou o Memória Ativa. Posso propor jogos curtos para estimular a memória. Diga memorização para começar.'),
  STOP: SSML('Até logo! Continue praticando sua memória.'),
  WORD_SETS: [
    ['Copo','Maçã','Gato'],
    ['Livro','Pão','Rato'],
    ['Janela','Flor','Mesa']
  ]
};