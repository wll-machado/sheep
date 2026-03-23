const button = document.querySelector(".worldButton");
const field = document.querySelector(".fieldContainer");
const sound = document.getElementById("sheepSound");
const limitText = document.querySelector(".limitText");
const effect = document.querySelector(".effect");

let count = 0;
const MAX_SHEEP = 30;

button.addEventListener("click", () => {
    // bloqueio extra de segurança
    if (count >= MAX_SHEEP) return;

    count++;

    const sheep = document.createElement("img");
    sheep.src = "./ovelha.PNG";
    sheep.classList.add("sheep");

    // posição aleatória
    const fieldWidth = field.offsetWidth;
    const randomX = Math.random() * (fieldWidth - 40);

    const randomOffset = Math.random() * 30;

    sheep.style.left = `${randomX}px`;
    sheep.style.bottom = `${randomOffset}px`;

    field.appendChild(sheep);

    // som
    sound.currentTime = 0;
    sound.play();

    // 🚨 DESABILITA EXATAMENTE NO 30
    if (count === MAX_SHEEP) {
        button.disabled = true;
        limitText.style.display = "block";
        effect.play();
    }
});