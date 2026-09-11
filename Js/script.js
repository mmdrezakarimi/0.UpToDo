//Loading Intro 1 to 2
const intro1 = document.getElementsByClassName("intro1")
const intro2 = document.getElementsByClassName("intro2")
const myTimeout = setTimeout(Loading1 , 3000);

function Loading1(){
    intro1[0].classList.toggle("hidde");
    intro2[0].classList.toggle("active")
}
console.time()
