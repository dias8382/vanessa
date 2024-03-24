function displayYes() {
    alert("Parabéns! Você aceitou o pedido de casamento.");
    window.location.href = "Pedido_Aceito.html";
}

function moveNo() {
    const noButton = document.querySelector(".no");

    // Gere posições aleatórias para o botão "Não" em todos os cantos da tela.
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}
