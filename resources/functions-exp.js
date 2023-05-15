//----------------------------------------------------------------------
//----------------------------------------------------------------------
var firstname = ""; 
function viewOrHideCursor() {
    console.log("make the input field visible");
    const firstnameInput = document.getElementById("firstname");
    var visibility = window.getComputedStyle(firstnameInput).getPropertyValue("visibility");
    if(visibility === "hidden") {
        firstnameInput.style.visibility = "visible";
        firstnameInput.focus();
    }
    else if(visibility === "visible" && firstnameInput.value.trim().length === 0) {
        firstnameInput.style.opacity = "0.4";
        firstnameInput.style.visibility = "hidden";
    }
}

function checkFirstname(event) {
    const firstnameInput = document.getElementById("firstname");
    var opacity = window.getComputedStyle(firstnameInput).getPropertyValue("opacity");
    console.log("check Firstname");
    if(opacity === "0.4" && firstnameInput.value.length > 0 ) {
        firstnameInput.style.opacity = "1";
    } else if(firstnameInput.value.length === 0 ){
        firstnameInput.style.opacity = "0.4";
    }

    if(event.key === "Enter" && firstnameInput.value.trim().length > 0) {
        const introDiv = document.getElementById("intro");
        console.log(introDiv.scrollIntoView());
        introDiv.scrollIntoView();
        resetFirstname(firstnameInput);
        console.log("hello " + this.firstname);
    }
}

function resetFirstname(firstnameInput) {
    this.firstname = firstnameInput.value;
    firstnameInput.value = "";
    firstnameInput.style.opacity = "0";
}


//------------------------------------------------------------------
//------------------------------------------------------------------
function addZoomOutCornerStyleAnimation() {
    console.log("scrolled");
    document.getElementById("competencies").classList.add("zoomOutToCorner");
    addStillToCube()
}

//------------------------------------------------------------------
//------------------------------------------------------------------
let oldX = 0;
function setOldX(event) {
    oldX = event.pageX;
}
function addRotate(event) {
    var skill = event.target;
    if(skill.classList.contains("glassmorphism"))
        return;
    if(!skill.classList.contains("rotateRight") || !skill.classList.contains("rotateLeft")) {
        if (event.pageX > oldX) {
            console.log("add rotate right");
            skill.classList.add("rotateRight");
            setTimeout(() => {
                    console.log("remove rotateRight")
                    skill.classList.remove("rotateRight"); 
                }, 1000);
        } else if (event.pageX < oldX) {
            console.log("add rotate left");
            skill.classList.add("rotateLeft");
            setTimeout(() => {
                    console.log("remove rotateLeft")
                    skill.classList.remove("rotateLeft"); 
                }, 1000);
        }
    }
}