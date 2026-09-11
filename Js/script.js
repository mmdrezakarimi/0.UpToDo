//Pages
const intro0 = document.getElementsByClassName("intro0")
const intro1 = document.getElementsByClassName("intro1")
const intro2 = document.getElementsByClassName("intro2")
const intro3 = document.getElementsByClassName("intro3")
const wlcPage = document.getElementsByClassName("wlcPage")
const loginPage = document.getElementsByClassName("loginPage")
//IntroButtons
const start = document.getElementsByClassName("start")
const back = document.getElementsByClassName("noneBut")
const next = document.getElementsByClassName("mainBut")
const arrowBut = document.getElementsByClassName("arrowBut")
const loginBut = document.getElementsByClassName("loginBut")
//skip
    back[0].addEventListener("click" , function(){
        intro1[0].classList.remove("active");
        intro1[0].classList.add("hidde");
        wlcPage[0].classList.remove("hidde");
        wlcPage[0].classList.add("active");
    })
    back[2].addEventListener("click" , function(){
        intro2[0].classList.remove("active");
        intro2[0].classList.add("hidde");
        wlcPage[0].classList.remove("hidde");
        wlcPage[0].classList.add("active");
    })
    back[4].addEventListener("click" , function(){
        intro3[0].classList.remove("active");
        intro3[0].classList.add("hidde");
        wlcPage[0].classList.remove("hidde");
        wlcPage[0].classList.add("active");
    })
//Backs
    back[1].addEventListener("click" , function(){
        intro0[0].classList.add("active");
        intro0[0].classList.remove("hidde");
        intro1[0].classList.remove("active");
        intro1[0].classList.add("hidde");
    })
    back[3].addEventListener("click" , function(){
    intro1[0].classList.remove("hidde");
    intro1[0].classList.add("active");
    intro2[0].classList.remove("active");
    intro2[0].classList.add("hidde");
    })
    back[5].addEventListener("click" , function(){
    intro2[0].classList.remove("hidde");
    intro2[0].classList.add("active");
    intro3[0].classList.remove("active");
    intro3[0].classList.add("hidde");
    })
//arrow-But
    arrowBut[0].addEventListener("click" , function(){
    wlcPage[0].classList.remove("active");  
    wlcPage[0].classList.add("hidde");  
    intro0[0].classList.remove("hidde");
    intro0[0].classList.add("active");
    })
    arrowBut[1].addEventListener("click" , function(){
    loginPage[0].classList.add("hidde");
    loginPage[0].classList.remove("active");
    wlcPage[0].classList.add("active");  
    wlcPage[0].classList.remove("hidde");  
    })

//Nexts
    start[0].addEventListener("click" , function(){
    intro0[0].classList.remove("active")
    intro0[0].classList.add("hidde")
    intro1[0].classList.remove("hidde")
    intro1[0].classList.add("active")
    })
    next[0].addEventListener("click" , function(){
        intro1[0].classList.remove("active");
        intro1[0].classList.add("hidde");
        intro2[0].classList.remove("hidde");
        intro2[0].classList.add("active");
    })
    next[1].addEventListener("click" , function(){
        intro2[0].classList.remove("active");
        intro2[0].classList.add("hidde");
        intro3[0].classList.remove("hidde");
        intro3[0].classList.add("active");
    })
    next[2].addEventListener("click" , function(){
        intro3[0].classList.remove("active");
        intro3[0].classList.add("hidde");
        wlcPage[0].classList.remove("hidde");
        wlcPage[0].classList.add("active");
    })
//loginBut
    loginBut[0].addEventListener("click" , function(){
        wlcPage[0].classList.remove("active");
        wlcPage[0].classList.add("hidde");
        loginPage[0].classList.add("active");
        loginPage[0].classList.remove("hidde");
    })
console.log(arrowBut)