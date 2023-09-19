const commands = require("./commands");

function terminate(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  cmd = cmd.split(" ");
  const nameCommand = cmd.shift(); //
  const arguments = cmd.join(" ");

  commands[nameCommand](arguments, terminate);
});
