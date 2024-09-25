const inputEl = document.getElementById("input-email");
const passWordEl = document.getElementById("password");
let signEl = document.getElementById("sign-in");
let logEl = document.getElementById("log-in");
let errorMsg = document.getElementById("error-message");



signEl.addEventListener("click",signIn);
logEl.addEventListener("click",logIn);

let showMax = JSON.parse(localStorage.getItem("movies")) || [];


function signIn(){

    let register = {
        email:inputEl.value,
        password:passWordEl.value
    }

    inputEl.value = "";
    passWordEl.value = "";

     showMax.push(register)

    localStorage.setItem("movies",JSON.stringify(showMax))

    window.location.href = "./index1.html"
}

function logIn(){
    let movieMax = JSON.parse(localStorage.getItem("movies")) || [];

    let isValid = movieMax.find(entry => entry.email === inputEl.value && entry.password === passWordEl.value );

    if(isValid){
        window.location.href = "./index1.html"
    }else{
        errorMsg.textContent = "Invalid Password or Email";
        errorMsg.style.color = "white";
        errorMsg.style.display = "block"

    }
    inputEl.value = "";
    passWordEl.value = "";
}


