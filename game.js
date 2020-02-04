const Question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const sub = document.getElementsByClassName("submit");
const choiceexplanation = document.getElementById("choiceexplanation");
const skip = document.getElementById("skip");
const choiceexplanation = document.getElementsByClassName("choiceexplanation");



let currentQuestion={};
let acceptinganswers = true ;
let score =0;
let questionCounter = 0;
let availableQuestions =[];

let questions =[

    {

        question:"first question here",
        choice1:"first question a ",
        choice2:"second question a ",
        choice3:"third question a ",
        choice4:"fourth question a ",
        answer:1



    }
    ,
    {

        question:"second question here",
        choice1:"first question b ",
        choice2:"second question b ",
        choice3:"third question b ",
        choice4:"fourth question b ",
        answer:1



    }
    ,
    {

        question:"third question here",
        choice1:"first question c ",
        choice2:"second question c ",
        choice3:"third question c ",
        choice4:"fourth question c ",
        answer:1



    }
    ,
    {

        question:"fifth question here",
        choice1:"first question d ",
        choice2:"second question d ",
        choice3:"third question d ",
        choice4:"fourth question d ",
        answer:1



    }
    ,
    {

        question:"sixth question here",
        choice1:"first question e ",
        choice2:"second question e ",
        choice3:"third question e ",
        choice4:"fourth question e ",
        answer:1



    }
    ,
    {

        question:"seventh question here",
        choice1:"first question f ",
        choice2:"second question f ",
        choice3:"third question f ",
        choice4:"fourth question f ",
        answer:1



    }




]


const maxquestion = 7;
const bonuspoint = 10;

 startgame =()=>{
    
    questionCounter=0;
    score=0;
    availableQuestions=[...questions]
    console.log(skip);
    skip.addEventListener('click',()=>{
        getNewQuestion();
    });
    
    
    
    
   
    
};



getNewQuestion=()=>{
    if (availableQuestions.length==0|| questionCounter==maxquestion){
return window.location.assign("/end.html")
    };
    console.log(questionCounter);
questionCounter++;
console.log(questionCounter);


document.getElementById("nodynamic").style.width = `${questionCounter/maxquestion*100}`+"%";
console.log(document.getElementById("nodynamic").style.width = `${questionCounter/maxquestion*100}`+"%");

var questionindex = Math.floor(Math.random()*availableQuestions.length);

currentQuestion= availableQuestions[questionindex];
Question.innerText=currentQuestion.question;



choices.forEach(x=>{
    const number =x.dataset['number'];
    x.innerText= currentQuestion['choice'+number];
})

availableQuestions.splice(questionindex,1);
}

choices.forEach(x,index=>{
    x.addEventListener('click',e=>{
        const selectedchoice= e.target;
        const selectedanswer = selectedchoice.dataset["number"]
        
        
        
        var classtoapply="incorrect";

        if (selectedanswer == currentQuestion.answer){
            var classtoapply = "correct";
        }
        
        x.parentElement.classList.add(classtoapply);
        console.log(choiceexplanation[index]);
        
        
        
        setTimeout(()=>{


            x.parentElement.classList.remove(classtoapply);
            
            
           
        },1000



        );
        
        
        console.log(classtoapply);
    })
})


function gotonextquestion(){
    choiceexplanation.style.display="none";
    getNewQuestion();
}
    


startgame();
