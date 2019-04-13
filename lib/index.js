const readline = require('readline');

const chalk = require('chalk');

const { exit } = process;

const clearConsole = () => console.clear();

module.exports = class InterctiveCLI {
  constructor(opts) {
    this.opts = opts;
  }

  readInput() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    clearConsole();

    process.stdin.write('Entering now watch mode\n');
    this.printUsagePanel();
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
      clearConsole();
      keystroke.action();
      this.printUsagePanel();
    }
  }

  printUsagePanel() {
    const messages = Object.keys(this.opts.input).map((key) =>
      this.opts.input[key].usage.replace(key, chalk.yellow(key))
    );
    console.log(messages.join('\n'));
  }
};
