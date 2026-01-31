const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const systemInfo = {
  user: "alex",
  os: "fsocietyOS",
  uptime: "2h 14m",
  shell: "fshell v1.0",
  role: "student / cybersecurity / photography"
};

const commands = {

  help: () => `
Available commands:
help        - show this help menu
whoami      - current user
about       - about this system
projects    - show projects
contact     - contact info
date        - current date & time
clear       - clear terminal
ls          - list directories
cd          - change directory (fake)
neofetch   - system info
echo [txt]  - print text
`,

  whoami: () => systemInfo.user,

  about: () => `Learning web development, cybersecurity basics and photography.`,

  projects: () => `
- fsociety terminal
- photography portfolio
- future cybersecurity labs
`,

  contact: () => `
Instagram: @alexandrufoto1
GitHub: Quietbyte23
`,

  date: () => new Date().toString(),

  clear: () => {
    output.innerHTML = "";
    return "";
  },

  ls: () => `
home/
projects/
photos/
notes.txt
`,

  cd: () => `permission denied`,

  neofetch: () => `
${systemInfo.os}
---------------
User: ${systemInfo.user}
Role: ${systemInfo.role}
Shell: ${systemInfo.shell}
Uptime: ${systemInfo.uptime}
`,

  echo: (args) => args.join(" ")
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const raw = input.value.trim();
    handleCommand(raw);
    input.value = "";
  }
});

function handleCommand(raw) {
  output.innerHTML += `<p>$ ${raw}</p>`;

  const parts = raw.split(" ");
  const cmd = parts[0];
  const args = parts.slice(1);

  if (commands[cmd]) {
    const result = commands[cmd](args);
    if (result) {
      output.innerHTML += `<pre>${result}</pre>`;
    }
  } else {
    output.innerHTML += `<p>command not found</p>`;
  }

  window.scrollTo(0, document.body.scrollHeight);
}


