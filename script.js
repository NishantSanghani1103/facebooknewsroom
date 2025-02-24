let mcion = document.querySelector(".micon");
let menu = document.querySelector(".menu");
let closeIcon = document.querySelector(".closeIcon");
mcion.addEventListener("click", () => {
    menu.classList.add("showMcion");
})

closeIcon.addEventListener("click", () => {
    menu.classList.remove("showMcion");
})