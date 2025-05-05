const ham = document.getElementById("hamburger");

const slide = document.getElementById("menu");

var isActive = false;

ham.addEventListener("click", () => {
    
    if(!isActive) {
        slide.classList.add("active");
        slide.classList.remove("inactive");
        isActive = !isActive;
    }
    
    else {
        slide.classList.add("inactive");
        slide.classList.remove("active");
        isActive = !isActive;
    }
    ham.classList.toggle("active");
});

console.log("Hamburger menu script loaded");