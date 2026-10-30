const invite = document.getElementById("invite");

function revealImage() {

    const rect = invite.getBoundingClientRect();

    const progress =
        (window.innerHeight - rect.top) /
        (rect.height + window.innerHeight);

    const value = Math.max(0, Math.min(1, progress));

    invite.style.clipPath =
        `inset(0 0 ${(1 - value) * 100}% 0)`;
}

window.addEventListener("scroll", revealImage);
window.addEventListener("resize", revealImage);

revealImage();