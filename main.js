// document.getElementById('counter').innerHTML = "hello"

//initalize - set-up varibles
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = "counter text";
// pseudocode - when the user is scrolling update the varible "fromTop" and make decisions to change stuff on the page.
//window.onscroll is a boolean (yes/no)
// COUNTER SCRIPT BROKEN ///////////////////////////////////////////////////////////
// window.onscroll = function (){
//   //when the user scrolls do all of this
//   fromTop = window.pageYOffset;
//   // console.log tests if it works
//   console.log(fromTop);
// //.style means open css file for that thing, then go to the value called "top" and change it
//   counter.style.top = 100 + fromTop + "px";
//
//   if (fromTop > 1000){
//     // changes colors of the counter if past 1000 pixels
//     counter.innerHTML = "more than 100 leagues";
//     counter.style.backgroundColor="red";
//     counter.style.backgroundImage="url(bg_backwave.png)";
//
//   }
//
//   else {
//     counter.innerHTML = "counter text";
//     counter.style.backgroundColor="green";
//     counter.style.backgroundImage="url(bg_backwave.png)";
//   }
// }


// var sfish = document.getElementById('sfish')
//
//
// window.onscroll = function (){
// sfish.src = "../img/";
// }

//SCROLL
var box = $("#sfish");
var sfish = document.getElementById('sfish');
var chestlid = $('#chestlid');
var gold =  $('#gold');
//var stext = $('#text-shrimp');

var stext = document.getElementById('text-shrimp');
var ftext = document.getElementById('text-fish');

$(window).on('scroll', function() {
  box.addClass('restart');
  box.removeClass("default");

  //when the user scrolls do all of this
  fromTop = window.pageYOffset;
  // console.log tests if it works
  console.log(fromTop);
//.style means open css file for that thing, then go to the value called "top" and change it
if (fromTop > 9000){
  // changes colors of the counter if past 1000 pixels
  chestlid.addClass('animatechest');
  // gold.addClass('glow');
  console.log("addclass");
}
else if (fromTop > 3800 && fromTop < 4500){
  stext.style.opacity = 1;
  console.log(stext);

}

else if (fromTop > 6100 && fromTop < 6800){
  ftext.style.opacity = 1;
  console.log(ftext);

}


else {
 chestlid.removeClass('animatechest');
 // gold.removeClass('glow');
 console.log("removeclass");
 stext.style.opacity = 0;
 ftext.style.opacity = 0;
}


});
// END SCROLL
box.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
  box.removeClass("restart");

if (fromTop > 5800){
    // stext.style.opacity = 1;
    box.addClass('right');
    console.log('test');
  } else {box.addClass('default');}

});


// var chestlid = $('#chestlid');

//window.onscroll = function (){
//   //when the user scrolls do all of this
//   fromTop = window.pageYOffset;
//   // console.log tests if it works
//   console.log(fromTop);
// //.style means open css file for that thing, then go to the value called "top" and change it
// if (fromTop > 9000){
//   // changes colors of the counter if past 1000 pixels
//   chestlid.addClass('animatechest');
//   console.log("addclass");
// }
//
// else {
//  chestlid.removeClass('animatechest');
//  console.log("removeclass");
// }};




// var stext = $('#text-shrimp')

// window.onscroll = function (){
//   //when the user scrolls do all of this
//   fromTop = window.pageYOffset;
//   // console.log tests if it works
//   console.log(fromTop);
// //.style means open css file for that thing, then go to the value called "top" and change it
// if (fromTop > 4200){
//   // changes colors of the counter if past 1000 pixels
//
//
// }
//
// else {
//
// }};
// window.addEventListener("scroll", function animate())
//
// function
// setTimeout(myfunction, 3000)
