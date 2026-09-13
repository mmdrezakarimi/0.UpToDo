//Pages
const intro0 = document.getElementsByClassName("intro0");
const intro1 = document.getElementsByClassName("intro1");
const intro2 = document.getElementsByClassName("intro2");
const intro3 = document.getElementsByClassName("intro3");
const wlcPage = document.getElementsByClassName("wlcPage");
const loginPage = document.getElementsByClassName("loginPage");
const registerPage = document.getElementsByClassName("registerPage")
const homeScreen = document.getElementsByClassName("homeScreen")
//Buttons
const start = document.getElementsByClassName("start");
const back = document.getElementsByClassName("noneBut");
const next = document.getElementsByClassName("mainBut");
const arrowBut = document.getElementsByClassName("arrowBut");
const loginBut = document.getElementsByClassName("loginBut");
const createBut = document.getElementsByClassName("createBut")
const registerBut = document.getElementsByClassName("registerBut")
const loginButRegisterPage = document.getElementsByClassName("loginButRegisterPage")
//LoginInputs
const userName = document.querySelector("#txt")
const password = document.querySelector("#pwd")
    

//registerButs

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
    arrowBut[2].addEventListener("click" , function(){
    registerPage[0].classList.add("hidde");
    registerPage[0].classList.remove("active");
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
    //loginButLoginPage
    // function checkInputs(){
    //     if(userName.value !== "" && password.value !== "" && password.value.length >= 8 ){
    //         loginBut[1].disabled = false;
    //     } else{
    //          loginBut[1].disabled = true;
    //     }          
    // } 
        function checkInputs(){
        if(userName.value == "Mmd" && password.value == "2719Mmd@" && password.value.length >= 8 ){
            loginBut[1].disabled = false;
        } else{
             loginBut[1].disabled = true;
        }          
    }  
            userName.addEventListener("input" , checkInputs);
            password.addEventListener("input" , checkInputs);
        function showHomeScreen(e){
            e.preventDefault();
            loginPage[0].classList.add("hidde");
            loginPage[0].classList.remove("active");
            homeScreen[0].classList.add("active");
            homeScreen[0].classList.remove("hidde");
            
            return false;
        }
  
    //
    loginButRegisterPage[0].addEventListener("click" , function(){
        registerPage[0].classList.add("hidde")
        registerPage[0].classList.remove("active")
        loginPage[0].classList.add("active");
        loginPage[0].classList.remove("hidde");
    })
//register&createBut
    createBut[0].addEventListener("click" , function(){
        wlcPage[0].classList.remove("active")
        wlcPage[0].classList.add("hidde")
        registerPage[0].classList.remove("hidde")
        registerPage[0].classList.add("active")

    })
    registerBut[0].addEventListener("click" , function(){
        loginPage[0].classList.remove("active");
        loginPage[0].classList.add("hidde");
        registerPage[0].classList.remove("hidde")
        registerPage[0].classList.add("active")

    })
