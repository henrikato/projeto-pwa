if ('serviceWorker' in navigator) {
  console.info("Registro do serviceWorker em progresso...");
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.info("serviceWorker registrado com sucesso!"))
    .catch(err => console.error("Erro ao registrar serviceWorker...", err))
}

let prompt;
const btnAlert = document.querySelector("button.pwa__alert");
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();

  prompt = e;

  btnAlert.style.display = "block";
})

btnAlert.addEventListener("click", () => {
  btnAlert.style.display = "none";
  prompt.prompt();
})