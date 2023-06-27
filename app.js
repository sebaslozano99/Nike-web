const BURGER = document.querySelector(".burger");
const NAV = document.querySelector(".mainUl");

BURGER.addEventListener("click", () =>{
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
})


