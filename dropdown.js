const clickbutton= document.getElementById("c");
const panel= document.getElementById("panel");


clickbutton.addEventListener("click", lala);


function lala(){

    if (panel.style.maxHeight){
        panel.style.maxHeight=null;
    }
    else{
        panel.style.maxHeight=panel.scrollHeight+"px";
    }
  
}

