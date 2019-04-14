const CliInteractive = require('../lib/');

const fakeProgram = () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      console.log('bla');
    }, 2000);
  }
};

const input = {
  k: {
    usage: 'Press k to do something',
    action: () => {
      fakeProgram();
    }
  }
};

new CliInteractive({ input }).readInput();
