const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    output.innerHTML += "> " + cmd + "\n";

    if (cmd === "help") {
      output.innerHTML += "Commands: help, whoami, clear\n";
    } 
    else if (cmd === "whoami") {
      output.innerHTML += "alex@fsociety\n";
    } 
    else if (cmd === "clear") {
      output.innerHTML = "";
    } 
    else {
      output.innerHTML += "command not found\n";
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

