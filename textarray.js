
let testarry = ["apple","dgdfh","apple","gdhgfg","banna","ghjfhgj","banna","bjjh","citus","bdhgfhjd"]

let string = testarry.toString(",");
console.log(string)

var mastersection=document.createElement("section");
mastersection.setAttribute("id","mastersection");
document.body.appendChild(mastersection)

var mastrsectionlala = document.getElementById("mastersection");


function array(){

console.log(testarry)
let newarray=[]

for(let i =0;i<testarry.length;i+=2 ){
    newarray.push(testarry.slice(i,i+2));
    console.log(testarry.slice(i,i+2))
    console.log(testarry.slice(i,i+2))
    console.log(i)

}
console.log(newarray)

console.log(testarry)
return newarray


}

let newaa = array();
console.log(newaa)
for (let i=0; i<newaa.length;i++){


    var createwrap = document.createElement('div');
    createwrap.classList.add("master");
    var master = mastersection.appendChild(createwrap);

   console.log(createwrap)
    for(let j=0; j<2;j++){
        var createwrap=document.getElementsByClassName("master");
        var create = document.createElement('div');
        create.innerText= newaa[i][j]
        create.classList.add("final");
        mas.appendChild(create);


    }
}