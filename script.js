// ======================================
// FLOATING HEARTS
// ======================================

function createHeart() {

    const container = document.querySelector(".floating-hearts");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 7) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 900);


// ======================================
// FINAL CELEBRATION
// ======================================

function celebrate() {

    const message = document.getElementById("love-message");

    if (message) {
        message.classList.add("show");
    }

    // Create lots of hearts
    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const container = document.querySelector(".floating-hearts");

            if (!container) return;

            const heart = document.createElement("div");

            heart.className = "heart";
            heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

            heart.style.left = Math.random() * 100 + "%";
            heart.style.bottom = Math.random() * 20 + "%";
            heart.style.fontSize = (15 + Math.random() * 30) + "px";
            heart.style.animationDuration = (3 + Math.random() * 4) + "s";

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);

        }, i * 80);
    }
}