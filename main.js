const outerSquare = document.querySelector(".outer-square");
const midSquare = document.querySelector(".mid-square");
const innerSquare = document.querySelector(".inner-square");
const innerInnerSquare = document.querySelector(".inner-inner-square");
const p1 = document.querySelector("p:first-child");
const p2 = document.querySelector("p:last-child");
const columnRight = document.querySelector(".column-right");

window.addEventListener("scroll", () => {
  let scrollValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const email = document.querySelector("li:nth-last-of-type(2)");
  const resume = document.querySelector("li:nth-last-of-type(1)");
  if (scrollValue > 100) {
    email.classList.add("float");
    resume.classList.add("float");
  } else  {
    email.classList.remove("float");
    resume.classList.remove("float");
  }
});

window.onload =() => {
    outerSquare.classList.add("rotate");
    midSquare.classList.add("rotate");
    innerSquare.classList.add("rotate");

    setTimeout(() => {
        p1.style.opacity ="1";
    }, 1000);

    setTimeout(() => {
        p2.style.opacity ="1";
    }, 2000);

    setTimeout(() => {
        columnRight.style.opacity = "1";
    }, 2000);
};

let running = false;
let x = -45;
const rotateSquares = () => {
    if (running === false){
        running = true;
        x += 90;
    outerSquare.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)";
    midSquare.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)";
    innerSquare.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)";
    setTimeout(() => {
        running = false;
      }, 2000);
    };
};

let w = window.innerWidth;
function adjustFont() {
  w = window.innerWidth;
  innerInnerSquare.style.transform =
    "translate(-50%, -50%) scale(" + w / 1500 + ")";
}

innerSquare.addEventListener("mouseover", rotateSquares);
innerInnerSquare.style.transform = "translate(-50%, -50%) scale(" + w / 1500 + ")";

window.addEventListener("resize", adjustFont);

const nav = document.querySelector("nav");
const slider = document.querySelector(".nav-line");

nav.addEventListener("mousemove", (e) => {
    let navX = nav.getBoundingClientRect().left; //This gets the position of the left side of our nav menu
                                                //Since our nav menu size is dynamic, we cannot hard-code
                                                //a value in here, we have to get the dynamic position on
                                                //the screen

    let xPos = e.clientX - navX + 20;  //e = event, clientX = the X position of the cursor
                                    //We subtract our current mouse X position from the position
                                    //of the left side of our nav, this gives us a value of 0
                                    //when our mouse is on the very left side of the nav
                                    //We add 20px to adjust the position of the ball directly under the mouse
    
    let navW = nav.offsetWidth;

    let lowerLimit = navW * 0.1, upperLimit = navW * 0.9; //We are setting upper and lower limits of 90% and 10%

    if (xPos > lowerLimit && xPos < upperLimit) slider.style.left = xPos + "px"; 


})
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}