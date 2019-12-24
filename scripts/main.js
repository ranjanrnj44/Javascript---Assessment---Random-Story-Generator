var myinput = document.querySelector(".input");
var mybutton = document.querySelector(".button");
var myparagraph = document.querySelector("p");

function random_it(array){
    return array[Math.floor(Math.random()*array.length)];
}

function random_color(color) {
    return Math.floor(Math.random() * color);
  }

  
var para = "When true, includes styles inline TEXTA in the root component.ts file. Only CSS styles can be included inline. Default is false, meaning that an TEXTB external styles file is created and referenced in the root component.ts TEXTC file";

var word1 = [
                "string one of set 1",
                "string two of set 1",
                "string three of set 1"
            ];
var word2 = [
                "string one of set 2",
                "string two of set 2",
                "string three of set 2"
            ];
var word3 = [
                "string one of set 3",
                "string two of set 3",
                "string three of set 3"
            ];

mybutton.addEventListener("click", change_it);

function  change_it(){

    const random_c = `rgb(${random_color(250)} ${random_color(155)} ${random_color(215)} )`;
    myparagraph.style.backgroundColor = random_c;
    myparagraph.style.color = `black`;
    myparagraph.style.fontSize = `18px`;

    var new_para = para;
    var first_word = random_it(word1);
    var second_word = random_it(word2);
    var third_word = random_it(word3);

     new_para = new_para.replace("TEXTA" , first_word.toUpperCase());
     new_para = new_para.replace("TEXTB" , second_word.toUpperCase());
     new_para = new_para.replace("TEXTC" , third_word.toUpperCase());

    if(myinput.value !== " "){
        var name = myinput.value;
        new_para = new_para.replace("true" , name.toUpperCase());
        console.log(new_para);
    }

    myparagraph.textContent = new_para;
    myparagraph.style.visibility = "visible";
}