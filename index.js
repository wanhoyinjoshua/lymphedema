var goup = document.getElementById("navtop");

var godown = document.getElementById("assess")

var quiz=document.getElementById("submitquiz")

var exercise = document.getElementById("exercisebutt")

var exerdesktop= document.getElementById("mobileexercise")


goup.addEventListener("click",()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

quiz.addEventListener("click",()=>{
  console.log("hihi")
  window.location.assign("quiz.html");
  console.log("hihi")

})


exercise.addEventListener("click",()=>{
  window.location.assign("exercise.html");
  console.log("hihi")
})

exerdesktop.addEventListener("click",()=>{
  window.location.assign("exercise.html");
  console.log("hihi")
})



