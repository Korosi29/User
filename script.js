const mainContainer1 = document.querySelector(".inner-container1");

const mainContainer2 = document.querySelector(".inner-container2");

const innerContainer1Sect1 = document.querySelector(".inner-con1-section-1");

const innerContainer2Sect1 = document.querySelector(".inner-con2-section-1");

const innerContainer1Sect2 = document.querySelector(".inner-con1-section-2");

const innerContainer2Sect2 = document.querySelector(".inner-con2-section-2");

const signInBtn = document.getElementById("sign-in-btn");

const signUpBtn = document.getElementById("sign-up-btn");

signInBtn.onclick = function(){
    innerContainer1Sect1.style.transform = "translateY(100%)";
    mainContainer1.style.transform = "translateY(100%)";

    innerContainer2Sect1.style.transform = "translateY(-100%)";
    mainContainer2.style.transform = "translateY(-100%)";
    setTimeout(function(){
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
    },400)
}

signUpBtn.onclick = function(){
    innerContainer1Sect1.style.transform = "translateY(100%)";
    mainContainer1.style.transform = "translateY(100%)";

    innerContainer2Sect1.style.transform = "translateY(-100%)";
    mainContainer2.style.transform = "translateY(-100%)";
    setTimeout(function(){
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
    },400)
}

