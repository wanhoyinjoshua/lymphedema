const choicecontainerarray= Array.from(document.getElementsByClassName("choicetext"));


const choicecontainer=document.getElementsByClassName("choicetext");

const question = document.getElementById("question");

const nextquestion = document.getElementById("nextbutt");
const questiontrack = document.getElementById("questiontrack");
const elaboration=Array.from( document.getElementsByClassName("choicetextpopdown"));
console.log(elaboration)
elaboration.forEach(()=>{

})





let QuestionBnank =[

{
question:"1",
choice1:"1a",
choice2:"2a",
choice3:"3a"



},
{
    question:"2",
    choice1:"1b",
    choice2:"2b",
    choice3:"3b"
    
    
    
    },
    {
        question:"3",
        choice1:"1c",
        choice2:"2c",
        choice3:"3c"
        
        
        
        },
        {
            question:"4",
            choice1:"1d",
            choice2:"2d",
            choice3:"3d"
            
            
            
            },



]

function checkanswer(){

}

choicecontainerarray.forEach(element=>{



element.addEventListener("click",()=>{

console.log(element.nextElementSibling.classList)





})


});



let  i=0;

function questionloader(){
    

    if (i>3){
        return window.location.assign("/end.html")
    }
   
    else{
    let randomquestionindex = Math.floor(Math.random()*QuestionBnank.length);
    
    var currentquestion=QuestionBnank[randomquestionindex]

    question.innerHTML= currentquestion.question;
    choicecontainerarray[0].innerHTML= currentquestion.choice1;
    choicecontainerarray[1].innerHTML= currentquestion.choice2;
    choicecontainerarray[2].innerHTML= currentquestion.choice3;

    QuestionBnank.splice(randomquestionindex,1)
    i++;
    questiontrack.innerHTML= `${i}/${4}`
    console.log(i);
    console.log(QuestionBnank);
    }

}

function startgame(){
    questionloader();

    
    nextbutt.addEventListener("click", questionloader)

}



startgame();








