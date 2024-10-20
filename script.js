let action1Completed = false;
let action2Completed = false;

function openSite() {
    // Simula la visita al sito aprendo una nuova finestra
    window.open("https://www.iltuosito.com", "_blank");
    action1Completed = true;
    checkActions();
}

function watchVideo() {
    // Simula la visualizzazione di un video promozionale
    alert("Simulazione: Guarda il video promozionale qui!");
    action2Completed = true;
    checkActions();
}

function checkActions() {
    // Verifica se tutte le azioni sono state completate
    if (action1Completed && action2Completed) {
        document.getElementById("unlockButton").disabled = false;
    }
}

function unlockLink() {
    // Sblocca il link
    document.getElementById("unlockedLink").style.display = "block";
}