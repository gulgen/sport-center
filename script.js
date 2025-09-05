// Hamburger Menu 
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}

// Navbar Scroll 
window.addEventListener("scroll", function () {
    let navbar = this.document.querySelector(".header");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-[#355592]/85");
    } else {
        navbar.classList.remove("bg-[#355592]/85");    
    }
});

//Our Classes Buttons
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () =>  {
        contents.forEach(c => c.classList.add("hidden"));

        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");

        buttons.forEach(b => b.classList.remove("active-tab"));
        btn.classList.add("active-tab");
    });
});

// BMI Function
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const arrow = document.getElementById("bmi-arrow");

function updateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if(!height || !weight) return; 

    const h = height / 100; 
    const bmi = weight /(h*h);

    const chart = document.querySelector(".bmi-section img");
    const chartWidth = chart.offsetWidth;
    const sectionWidth = chartWidth / 5;

    let index = 0 ;
    if (bmi <= 18.5) index = 0
    else if (bmi <= 24.9) index = 1 
    else if (bmi <= 29.9) index = 2 
    else if (bmi < 34.99) index = 3 
    else index = 4;    

    const arrowWidth = arrow.offsetWidth;
      
    const leftPos = sectionWidth * index + sectionWidth / 2 - arrowWidth / 2;
    arrow.style.left = leftPos + "px";
}

heightInput.addEventListener("input", updateBMI);
weightInput.addEventListener("input", updateBMI);