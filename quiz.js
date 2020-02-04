 var choiceselection = document.getElementsByClassName("choicetext");
 var submmitbutt= document.getElementById("submit");
 var questioncontainer = document.getElementById("questioncontainer")

var questioncorrectwronglist =[];




 //question bank
 
  
 var questionbank = 
 [
   {
       "question":"What is lymedema",
       "choice":["well i dont know","its build up of fluid","it is a irreversibel disease","it cant be cured"],
       "answer":"0",
       "explanation":"welllll"

   }
   ,
   {
    "question":"is there exercise for lymedema?",
    "choice":["no","yes","not proofenb","no effect"],
    "answer":"1",
    "explanation":"2"

   }
   ,
   {
    "question":"3 question",
    "choice":["3a","3b","3c","3d"],
    "answer":"3",
    "explanation":"3"

   }
   ,
   {
    "question":"4 question",
    "choice":["4a","4b","4c","4d"],
    "answer":"3" ,
    "explanation":"4"
   }
   ,
   {
    "question":"5 question",
    "choice":["5a","5b","5c","5d"],
    "answer":"3",
    "explanation":"5"
   }
   ,
   {
    "question":"6 question",
    "choice":["7a","7b","7c","7d"],
    "answer":"3",
    "explanation":"6"
   }
 ]




//input question bank output question now 

 function getquestionfrombank(){
    console.log(questionbank.length)
   
    if (questionbank.length!=0){
        console.log(questionbank.length)
        var questiontopick = Math.floor(Math.random()*questionbank.length);
        let questionnow = questionbank[questiontopick];
        questionbank.splice(questiontopick,1);
        console.log(questionbank.length);
        window.questionindexnow = questionnow;
        
        console.log(window.questionindexnow)
        return questionnow;
        
       

    }
    else {

        //clear evrything 
        document.body.innerHTML = '';
       //creating master division for the page 
       var mastersection=document.createElement("section");
       mastersection.setAttribute("id","master")
       var title = document.createElement("section");
       title.setAttribute("id","title");
       title.innerText="Think you know lymedmea ?????......this is some of your misconcp=eptions"
       document.body.append(title);
       document.body.appendChild(mastersection);
       
       function array(){

        console.log(questioncorrectwronglist)
        let newarray=[]
        
        for(let i =0;i<questioncorrectwronglist.length;i+=2 ){
            newarray.push(questioncorrectwronglist.slice(i,i+2));
            console.log(questioncorrectwronglist.slice(i,i+2))
            console.log(questioncorrectwronglist.slice(i,i+2))
            console.log(i)
        
        }
        console.log(newarray)
        
        console.log(questioncorrectwronglist)
        return newarray
        
        
        }

        let newaa = array();
      console.log(newaa)
      
      
      for (let i=0; i<newaa.length;i++){
        var createwrapmaster=document.getElementById("master");
        var createwrap = document.createElement('div');
        createwrap.classList.add("masterwrap");
         createwrapmaster.appendChild(createwrap);

   console.log(createwrap)
    for(let j=0; j<2;j++){
        var createwrap=document.getElementById("master");
        var create = document.createElement('div');
        create.innerText= newaa[i][j]
        create.classList.add("final");
        createwrapmaster.appendChild(create);


    }
                                        }
       
       var mastersection=document.createElement("section");
       mastersection.setAttribute("id","end");
       mastersection.innerText="Well Done !!!"
       document.body.appendChild(mastersection)

       var mastrsectionlala = document.getElementById("end");
       mastrsectionlala.addEventListener("click",()=>{
           window.location.assign("index.html")
           console.log("end")
       })

       
       //get that list get every other 2 , then put them into one division , then display themon page as rows 


       return
        
        


    }

    
    
 }
 
 //only stored outputi have here is a random question i picked from question bank and i have deleted one question from bank 

 
 function choicegenerator(){
     let choicelist=[];
     let currentqquestion = getquestionfrombank();
     let v =currentqquestion.choice;
     let answer = currentqquestion.answer;
     window.questioncurr = currentqquestion.question;
     window.explanation=currentqquestion.explanation;
     console.log(v)
     console.log(answer)
     
     
     for (let i =0; i<v.length;i++){
        choicelist.push(v[i]) 

     }

     console.log(choicelist);

     function randomize(){
        let defualt= []
        console.log(choicelist.length)
        let randomized =[];
        let outputarray=[];
        
       let randomnolength = choicelist.length;
       console.log(randomnolength)
       for (let i =0; i<randomnolength;i++){
           
           defualt.push(i)
          
       }
       console.log(defualt);
       
        let randomno = Math.floor(Math.random()*defualt.length);
        console.log(randomno)
        
        
   
   
       
     
       for(let i=defualt.length-1;i>-1;i--){
           console.log(i)
           let newran = Math.floor(Math.random()*i);
           console.log(newran);
          
          randomized.push(defualt[newran]);
          console.log(randomized)
      
          defualt.splice(newran,1);
          console.log(defualt.length)
          
       
   
   
       }
       console.log(randomized);
   
       
   
       for(let i=0;i<randomized.length;i++){
   
           outputarray.push(choicelist[randomized[i]])
   
       }
   
       console.log(randomized);
       console.log(outputarray)
       console.log(answer)
       return [outputarray,randomized,answer];
       
   
    }
    return randomize(choicelist);
    }
  
    


    
 let choicerandom = choicegenerator();
let randomoutput = choicerandom[1];
 let randomid = choicerandom[0];
 let choiceanswer= choicerandom[2];
 console.log(randomid,randomoutput,choiceanswer)

 


 

function newquestion(choicegenerator){
    var choiceselection = document.getElementsByClassName("choicetext");
    let randomid1 = randomoutput;
    let randomoutput1 = randomid;
    let selectedchoiceanswer= choiceanswer;
    let choiceid = choiceselection[0].id;
    console.log(choiceid)
   console.log(selectedchoiceanswer)
   questioncontainer.innerText= window.questioncurr;
   window.answer=selectedchoiceanswer;
    console.log(randomid,randomoutput)
    
    
 
    

    
    
 for(let i=0; i<choiceselection.length;i++){
    
    choiceselection[i].id= randomid1[i];
    choiceselection[i].innerText=randomoutput1[i];
    console.log(choiceselection[i].id)
    console.log(choiceselection[i].innerText)

}

console.log(choiceselection)
}

//###################################################
//CLICK TO GENERTAE NEW QUESTION    

let correctanswercount =0;
submmitbutt.addEventListener("click",()=>{
  console.log("enteringggg")
    
    let choicerandom = choicegenerator();
let randomoutputclick = choicerandom[1];
 let randomidclick = choicerandom[0];
  
 console.log(randomoutputclick);
 console.log(randomidclick)

 window.answer = choicerandom[2];
 console.log(window.answer);
 console.log(window.questioncurr)
 questioncontainer.innerText= window.questioncurr;

 for(let i=0; i<choiceselection.length;i++){
    
    choiceselection[i].id= randomoutputclick[i];
    choiceselection[i].innerText=randomidclick[i];
    console.log(choiceselection[i].id)
    console.log(choiceselection[i].innerText)

}
   
    console.log("click")
})

//add event listener to the button 
for(let i=0; i<choiceselection.length;i++){
    
    choiceselection[i].addEventListener("click",()=>{

        console.log(window.answer);
        
        
   
       if(window.answer==choiceselection[i].id){
           console.log("correct answer")
           correctanswercount++;
           console.log(correctanswercount);
           let container1= document.createElement("div")
           let p = document.createElement("div");
           let mask = document.createElement("div");
           let green = document.createElement("div");
           green.addEventListener("click",()=>{
               //remove element style and word 
            p.classList.remove("answerexplanation")
            p.innerText=null;
            mask.classList.remove("mask")

            green.classList.remove("green");
            green.innerText=null;
            //skip ton next element 
            function getnew(){
                console.log("enteringggg")
                  
                  let choicerandom = choicegenerator();
              let randomoutputclick = choicerandom[1];
               let randomidclick = choicerandom[0];
                
               console.log(randomoutputclick);
               console.log(randomidclick)
              
               window.answer = choicerandom[2];
               console.log(window.answer);
               console.log(window.questioncurr)
               questioncontainer.innerText= window.questioncurr;
              
               for(let i=0; i<choiceselection.length;i++){
                  
                  choiceselection[i].id= randomoutputclick[i];
                  choiceselection[i].innerText=randomidclick[i];
                  console.log(choiceselection[i].id)
                  console.log(choiceselection[i].innerText)
              
              }
                 
                  console.log("click")
              }
              getnew();
           })
           
           //add emphasis on skip nutton 
           submmitbutt.style.color= "orange";
           submmitbutt.style.opacity=1;

           p.innerHTML= (window.explanation);
           p.classList.add("answerexplanation")
           mask.classList.add("mask")
           green.classList.add("green");
           
           green.innerText="Good Job , next "
           mask.style.cursor="not-allowed"

           
          
          document.body.append(container1);
          container1.appendChild(mask);
          p.appendChild(green);
          container1.appendChild(p);
         
           console.log(choiceselection[i].parentelement)
       }
       else{
           //remember the wrong question 
        console.log(window.questionindexnow.question)
        console.log(choiceselection[i]);
        let a =window.questionindexnow.question;
        let b = choiceselection[i];
       questioncorrectwronglist.push(a,b.innerText);
        console.log(questioncorrectwronglist)
        let p = document.createElement("div");
        let mask = document.createElement("div");
        let red = document.createElement("div");
        p.innerHTML= (window.explanation);
        p.classList.add("answerexplanation")
        mask.classList.add("mask")
        red.classList.add("red");
        
        red.innerText="try again  "
        mask.style.cursor="not-allowed"

        
       document.body.append(p);
       document.body.append(mask);
       p.appendChild(red);
       red.addEventListener("click",()=>{
        //remove element style and word 
     p.classList.remove("answerexplanation")
     p.innerText=null;
     mask.classList.remove("mask")

     red.classList.remove("red");
     green.innerText=null;
     
     
    })
       
       }

    })
}


//prepare the array for display 

function prepare(questioncorrectwronglist){
    let newlist=[]
    for(let i=0; i<questioncorrectwronglist;i+2){
        newlist.push(questioncorrectwronglist[i])

    }


}
prepare(questioncorrectwronglist);


newquestion(choicegenerator);








     


 
 


 
 


    



 
