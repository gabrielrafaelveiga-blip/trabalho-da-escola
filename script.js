const botao = document.getElementById("torcerBtn");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {

    mensagem.textContent = "🇧🇷 VAMOS, BRASIL! RUMO AO HEXA! 🏆";

    botao.textContent = "⚽ É HEXA! 🇧🇷";

    // Confetes simples
    for (let i = 0; i < 30; i++) {
        criarConfete();
    }
});

function criarConfete() {

    const confete = document.createElement("div");

    confete.style.position = "fixed";
    confete.style.width = "10px";
    confete.style.height = "10px";
    confete.style.backgroundColor =
        escolherCor();
    confete.style.left = Math.random() * 100 + "vw";
    confete.style.top = "-10px";
    confete.style.zIndex = "9999";

    document.body.appendChild(confete);

    const duracao = Math.random() * 2 + 2;

    confete.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)"
            },
            {
                transform:
                    `translateY(100vh) rotate(720deg)`
            }
        ],
        {
            duration: duracao * 1000,
            easing: "linear"
        }
    );

    setTimeout(() => {
        confete.remove();
    }, duracao * 1000);
}

function escolherCor() {

    const cores = [
        "#009c3b",
        "#ffdf00",
        "#002776",
        "#ffffff"
    ];

    return cores[
        Math.floor(Math.random() * cores.length)
    ];
}