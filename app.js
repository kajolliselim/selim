var me = document.querySelector(".me");
var about = document.querySelector(".about-title");
var aboutMe = document.querySelector(".about-me");
var skills1 = document.querySelector(".seven");
var skills2 = document.querySelector(".one");
var skills3 = document.querySelector(".two");
var skills4 = document.querySelector(".three");
var skills5 = document.querySelector(".four");
var slideAnim1 = document.querySelector(".design1");
var slideAnim2 = document.querySelector(".design2");
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
var slidesTwo = document.querySelectorAll('#slides2 .slide2');
var currentSlideTwo = 0;
var slideIntervalTwo = setInterval(nextSlideTwo,5000);



function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function nextSlideTwo() {
    slidesTwo[currentSlideTwo].className = 'slide2';
    currentSlideTwo = (currentSlideTwo+1)%slidesTwo.length;
    slidesTwo[currentSlideTwo].className = 'slide2 showing2';
}


function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
