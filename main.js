// document.getElementById('counter').innerHTML = "hello"

//initalize - set-up varibles
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = "counter text";
// pseudocode - when the user is scrolling update the varible "fromTop" and make decisions to change stuff on the page.
//window.onscroll is a boolean (yes/no)
window.onscroll = function (){
  //when the user scrolls do all of this
  fromTop = window.pageYOffset;
  // console.log tests if it works
  console.log(fromTop);
//.style means open css file for that thing, then go to the value called "top" and change it
  counter.style.top = 100 + fromTop + "px";

  if (fromTop > 1000){
    // changes colors of the counter if past 1000 pixels
    counter.innerHTML = "more than 100 leagues";
    counter.style.backgroundColor="red";
    counter.style.backgroundImage="url(bg_backwave.png)";

  }

  else {
    counter.innerHTML = "counter text";
    counter.style.backgroundColor="green";
    counter.style.backgroundImage="url(bg_backwave.png)";
  }
}


// var sfish = document.getElementById('sfish')
//
//
// window.onscroll = function (){
// sfish.src = "../img/";
// }

//SCROLL
var box = $("#sfish");
var sfish = document.getElementById('sfish')

$(window).on('scroll', function() {
  box.addClass('restart');
});


box.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
  box.removeClass("restart");
});



// window.addEventListener("scroll", function animate())
//
// function
// setTimeout(myfunction, 3000)
