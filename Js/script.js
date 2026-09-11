//Loading Intro 1 to 2
const intro1 = document.getElementsByClassName("intro1")
const intro2 = document.getElementsByClassName("intro2")
const intro3 = document.getElementsByClassName("intro3")
const myTimeout = setTimeout(Loading1 , 3000);

function Loading1(){
    intro1[0].classList.toggle("hidde");
    intro2[0].classList.toggle("active");
}
console.time()
//Intro Button
//Backs
const back = document.getElementsByClassName("noneBut")
    back[1].addEventListener("click" , function(){
        intro1[0].classList.toggle("active");
        intro2[0].classList.toggle("hidde");
    })
    back[3].addEventListener("click" , function(){
    intro2[0].classList.toggle("active");
    intro3[0].classList.toggle("hidde");
    })

//Nexts
const next = document.getElementsByClassName("mainBut")

    next[0].addEventListener("click" , function(){
        intro2[0].classList.toggle("hidde");
        intro3[0].classList.toggle("active");
    })
console.log(back)