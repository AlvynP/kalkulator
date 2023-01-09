const tombol = document.querySelectorAll(".num");
const pop = document.querySelector("#pop");

function pencet() {
    pop.play();
}
tombol.forEach((t) => {
    t.addEventListener("click", pencet);
});