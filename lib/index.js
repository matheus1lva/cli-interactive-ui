const readline = require('readline');
const exit = process.exit;

class InterctiveCLI {
    readInput(){
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (str, key) => {
            const {name, ctrl} = key;
            if (ctrl && name === 'c') {
                exit();
            } else {
                
            }
        });
    }
}