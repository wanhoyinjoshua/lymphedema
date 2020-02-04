var width = screen.width;
var height = screen.height;
var deleete = document.getElementById("Whattoexpect")

console.log(width)
if (width< 425){
    console.log("hihihi")
    deleete.innerHTML="What to Expect "
    deleete.style.background="pink"
    deleete.addEventListener("click",()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });

    })
}







var goup = document.getElementById("navtop");
goup.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


