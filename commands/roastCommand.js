import {bot,} from "../index.js"

export function roastCommand({user, message, origin, command, args}) {
    if(args[0].startsWith("@")) {
      fs.readFile('roasts.txt', 'utf8', (err, data) => {
        var roasts = data.split("\n")
        bot.post(
          (args[0] + " " + roasts[Math.floor(Math.random() * roasts.length)]), origin
        );
      });
    }
}