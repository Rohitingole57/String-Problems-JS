//------------STRINGS---------------
//GIVEN THE ARRAY OF THE NAMES OF STUDENTS. COUNT THE NAMES WHICH STARTS FROM THE LETTER 'A'.

var names = ["aniket","adesh","ashish","rohit","ravi"];
var count = 0;
for(var i=0; i<names.length; i++){
    var x = names[i];
    // console.log(x);
    if(x[0]== "a"){
        count++;
    }
}
console.log(count);


//GIVEN THE ARRAY OF THE NAMES OF STUDENTS. COUNT THE NAMES WHICH CONTAINS THE LETTER 'A'.

var names=["rohit","aniket","tai","allu","raj"];
var count = 0;
for(var i=0; i<names.length; i++){
    var x = names[i];
    for(var k=0; k<x.length; k++){
        if(x[k]=="a" || x[k]=="A"){
            console.log(x[k]);
            count++;

            // if you want to count the only one 'A' in one word. put BREAK !!!
        }
    }
}
console.log(count);


//GIVEN THE STRING COUNT THE NUMBER OF WORDS IN THAT STRING

var words = "a transformation in education system.";
var spaces = 0;
for (var i = 0; i <= words.length; i++) {
    if (words[i] == " ") {
        spaces++;
    }
}
console.log(spaces + 1);


// CONVERT LOWER CASE TO THE UPPER CASE OF A GIVEN WORD

var word = "rohit";
var bag = "";
var lower ="abcdefghijklmnopqrstuvwxyz";
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(var i=0; i<word.length; i++){
    var char = word[i];

    for(var j=0; j<lower.length; j++){
        if(char == lower[j]){
            bag = bag + upper[j];
            break;
        }
    }
}
console.log(bag);


// GIVEN ARRAY , COUNT TOTAL CHARACTER

var names = ["aniket","rohit","tai","mummy","papa"];
var count = 0;
for( var i=0; i<names.length; i++){
    var x = names[i];
    for( var j=0; j<x.length; j++){

        count++;
    }
}
console.log(count);

/* OR */
var names = ["aniket","rohit","tai","mummy","papa"];
var sum = 0;
for( var i=0; i<names.length; i++){
    sum = sum + names [i].length;
}
console.log(sum);
 