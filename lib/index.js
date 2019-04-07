const readline = require('readline');

// eslint-disable-next-line
const chalk = require('chalk');

const { exit } = process;

const input = {
  k: {
    usage: 'Press K to do something',
    action: () => {
      console.log('KJKKKKKK');
    }
  }
};

class InterctiveCLI {
  constructor(opts) {
    this.opts = opts;
  }

  readInput() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    console.clear();
    process.stdin.write('Entering now watch mode\n');
    process.stdin.on('keypress', (str, key) => {
      const { name, ctrl } = key;
      if (ctrl && name === 'c') {
        exit();
      }
      this.processKeyInput(name);
    });
  }

  processKeyInput(name) {
    const keystroke = this.opts.input[name];
    if (keystroke) {
      keystroke.action();
    }
  }

  // eslint-disable-next-line
  printUsagePanel() {}
}

new InterctiveCLI({
  input
}).readInput();
