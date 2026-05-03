/* ===== DOM Element References ===== */
/* Left panel container (orange) */
const mainContainer1 = document.querySelector(".inner-container1");

/* Right panel container (white) */
const mainContainer2 = document.querySelector(".inner-container2");

/* Welcome Back section on left panel */
const innerContainer1Sect1 = document.querySelector(".inner-con1-section-1");

/* Sign Up form section on right panel */
const innerContainer2Sect1 = document.querySelector(".inner-con2-section-1");

/* Sign In form section on left panel */
const innerContainer1Sect2 = document.querySelector(".inner-con1-section-2");

/* Sign Up CTA section on right panel */
const innerContainer2Sect2 = document.querySelector(".inner-con2-section-2");

/* Congratulation page shown after sign-up */
const newUserPage = document.querySelector(".new-user-main");

/* Sign In button - triggers panel transition */
const signInBtn = document.getElementById("sign-in-btn");

/* Sign Up button - triggers form display */
const signUpBtn = document.getElementById("sign-up-btn");

/* Main container holding both panels */
const mainCon = document.querySelector(".main-container");

/* Variables for storing transform values (responsive) */
let scrnTransBox1;
let scrnTransBox2;

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check for saved dark mode preference or default to false
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
});


signInBtn.onclick = function(){
    if(window.innerWidth >= 769){
        scrnTransBox1 = "translateX(100vh)";

        scrnTransBox2 = "translateX(-100vh)";
    }else{
        scrnTransBox1 = "translateY(100vh)";

        scrnTransBox2 = "translateY(-100vh)";
    }
    mainContainer1.style.transition = "all 2s";
    mainContainer2.style.transition = "all 2s";

    mainContainer1.style.transform = scrnTransBox1;
    mainContainer2.style.transform = scrnTransBox2;
    setTimeout(function(){
        mainContainer1.style.transition = "none";
        mainContainer2.style.transition = "none";

        innerContainer1Sect1.style.display = "none";
        innerContainer2Sect1.style.display = "none";
        innerContainer1Sect2.style.display = "flex";
        innerContainer2Sect2.style.display = "flex";
        mainContainer1.style.background = "var(--secondary)";
        mainContainer2.style.background = "var(--primary)";

        mainContainer1.style.transform = "translateY(0)";
        mainContainer2.style.transform = "translateY(0)";

        mainContainer1.style.transition = "all 2s";
        mainContainer2.style.transition = "all 2s";

        innerContainer1Sect1.style.transform = "translateY(0)";

        innerContainer2Sect1.style.transform = "translateY(0)";
    },500);
}

signUpBtn.onclick = function(){

    if(window.innerWidth >= 769){
        scrnTransBox1 = "translateX(100vh)";

        scrnTransBox2 = "translateX(-100vh)";
    }else{
        scrnTransBox1 = "translateY(100vh)";

        scrnTransBox2 = "translateY(-100vh)";
    }

    mainContainer1.style.transition = "all 2s";
    mainContainer2.style.transition = "all 2s";

    mainContainer1.style.transform = scrnTransBox1;
    mainContainer2.style.transform = scrnTransBox2;
    setTimeout(function(){

        mainContainer1.style.transition = "none";
        mainContainer2.style.transition = "none";


        innerContainer1Sect1.style.display = "flex";
        innerContainer2Sect1.style.display = "flex";
        innerContainer1Sect2.style.display = "none";
        innerContainer2Sect2.style.display = "none";
        mainContainer1.style.background = "var(--primary)";
        mainContainer2.style.background = "var(--secondary)";

        mainContainer1.style.transform = "translateY(0)";
        mainContainer2.style.transform = "translateY(0)";

        mainContainer1.style.transition = "all 2s";
        mainContainer2.style.transition = "all 2s";

        innerContainer1Sect1.style.transform = "translateY(0)";

        innerContainer2Sect1.style.transform = "translateY(0)";
    },500)
}

const createAcctForm = document.querySelector(".create-acct-form");

createAcctForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const formData = {
        userName: document.getElementById("name").value,
        userEmail: document.getElementById("email").value,
        userPassword: document.getElementById("password").value,
    }

    displayNewUserInfo(formData.userName, formData.userEmail, formData.userPassword);
});

function displayNewUserInfo(newUserN, newUserE, newUserP){

    newUserPage.style.display = "flex";
    document.getElementById("new-user-name").textContent = newUserN;

    document.getElementById("new-user-email").textContent = newUserE;

    document.getElementById("new-user-password").textContent = newUserP;

    innerContainer1Sect1.style.display = "none";
    innerContainer2Sect1.style.display = "none";

    mainCon.style.flexDirection = "column";
    mainCon.style.height = "fit-content";

resetForm();

}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

const signInForm = document.querySelector(".sign-in-form");

signInForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        alert("Thank you for trying out my webpage");
        window.location.href = "index.html";
});
