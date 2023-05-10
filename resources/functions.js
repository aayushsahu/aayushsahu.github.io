const images= [
    "https://ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_96x96.png",   //qatar
    "https://ssl.gstatic.com/onebox/media/sports/logos/AKqvkBpIyr-iLOK7Ig7-yQ_96x96.png",   // eqador
    "https://ssl.gstatic.com/onebox/media/sports/logos/mlXOOB9HXxLpoeS2dHSgGA_96x96.png"    //india
    
];
var firstname = ""; 

//----------------------------------------------------------------------
//----------------------------------------------------------------------

//----------------------------------------------------------------------
//----------------------------------------------------------------------
function viewOrHideCursor() {
    console.log("make the input field visible");
    const firstnameInput = document.getElementById("firstname");
    var visibility = window.getComputedStyle(firstnameInput).getPropertyValue("visibility");
    if(visibility === "hidden") {
        firstnameInput.style.visibility = "visible";
        firstnameInput.focus();
    }
    else if(visibility === "visible" && firstnameInput.value.trim().length === 0) {
        firstnameInput.style.opacity = "0.2";
        firstnameInput.style.visibility = "hidden";
    }
}

function checkFirstname(event) {
    const firstnameInput = document.getElementById("firstname");
    var opacity = window.getComputedStyle(firstnameInput).getPropertyValue("opacity");
    console.log("check Firstname");
    if(opacity === "0.2" && firstnameInput.value.length > 0 ) {
        firstnameInput.style.opacity = "1";
    } else if(firstnameInput.value.length === 0 ){
        firstnameInput.style.opacity = "0.2";
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
    //firstnameInput.style.visibility = "hidden"; // this is not working so used opacity = 0
}


//------------------------------------------------------------------
//------------------------------------------------------------------

function removeBannerPadding() {
    document.getElementById("skillset").parentElement.classList.add("moveVerticallyUpwards");
}
function addZoomOutCornerStyleAnimation() {
    console.log("scrolled");
    document.getElementById("skillset").classList.add("zoomOutToCorner");
    setTimeout(removeBannerPadding, 0);
    document.getElementById("skill").style.visibility = "visible";
}

//------------------------------------------------------------------
//------------------------------------------------------------------



function prev(event) {
    var imageDrawer = document.querySelector("#image-drawer");
    var card =  imageDrawer.querySelector("#card1");  

    console.log(imageDrawer);
    console.log(card);
    console.log(event.sourceElement);

    /*
    var prevIndex=0;
    for(var i=0; i<images.length; i++) {
        if(image.getAttribute("src")=== images[i]) {
            prevIndex=i-1;
            if(prevIndex == -1)
                prevIndex = images.length-1;
            newImage = images[prevIndex];
            break;
        }
    }
    console.log("On Clicking prev, index is:", prevIndex);
    image.setAttribute("src", newImage); 
    */
}

/* function prev() {
    var image = document.querySelectorAll("img");
    var prevIndex=0;
    for(var i=0; i<images.length; i++) {
        if(image.getAttribute("src")=== images[i]) {
            prevIndex=i-1;
            if(prevIndex == -1)
                prevIndex = images.length-1;
            newImage = images[prevIndex];
            break;
        }
    }
    console.log("On Clicking prev, index is:", prevIndex);
    image.setAttribute("src", newImage);
}

function next() {
    var image = document.querySelectorAll("img");
    var nextIndex=0;
    for(var i=0; i<images.length; i++) {
        if(image.getAttribute("src")=== images[i]) {
            nextIndex=i+1;
            if(nextIndex == images.length)
                nextIndex = 0;
            newImage = images[nextIndex];
            break;
        }
    }
    console.log("On Clicking prev, index is:", nextIndex);
    image.setAttribute("src", newImage);
} */

/* function prev() {
    var image = document.querySelector("img");
    var prevIndex=i-1;
    for(var i=0; i<images.length; i++) {
        if(prevIndex == -1)
            prevIndex=images.length-1;
        newImage = image.getAttribute("src")=== images[i] ? images[prevIndex] : images[i];
        console.log("On Clicking prev, index is:", prevIndex);
    }
    image.setAttribute("src", newImage);
}

function next() {
    var image = document.querySelector("img");
    var nextIndex = i+1;
    for(var i=0; i<images.length; i++) {
        if(nextIndex == images.length)
            nextIndex=0;
        newImage = image.getAttribute("src")=== images[i] ? images[nextIndex] : images[i];
        console.log("On Clicking next, index is:", nextIndex);
    }
    image.setAttribute("src", newImage);
} */