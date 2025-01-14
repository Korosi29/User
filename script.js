const mainContainer1 = document.querySelector(".inner-container1");

const mainContainer2 = document.querySelector(".inner-container2");

const innerContainer1Sect1 = document.querySelector(".inner-con1-section-1");

const innerContainer2Sect1 = document.querySelector(".inner-con2-section-1");

const innerContainer1Sect2 = document.querySelector(".inner-con1-section-2");

const innerContainer2Sect2 = document.querySelector(".inner-con2-section-2");

const newUserPage = document.querySelector(".new-user-main");

const signInBtn = document.getElementById("sign-in-btn");

const signUpBtn = document.getElementById("sign-up-btn");

signInBtn.onclick = function(){

    mainContainer1.style.transition = "all 2s";
    mainContainer2.style.transition = "all 2s";

    mainContainer1.style.transform = "translateY(100vh)";
    mainContainer2.style.transform = "translateY(-100vh)";
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

        innerContainer1Sect1.style.transform = "translateY(0)";

        innerContainer2Sect1.style.transform = "translateY(0)";
    },500)
}

signUpBtn.onclick = function(){
    mainContainer1.style.transition = "all 2s";
    mainContainer2.style.transition = "all 2s";

    mainContainer1.style.transform = "translateY(100vh)";
    mainContainer2.style.transform = "translateY(-100vh)";
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

resetForm();

}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}