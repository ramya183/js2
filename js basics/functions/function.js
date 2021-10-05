
//function with name
function add(a,b){
    return a+b;
}

let value = add(2,3);
document.write(value)
console.log(value);

// function expression or anonymouse

let multiply = function(c,d){
    return c*d;
}
console.log(multiply(20,30));


// IIFE

(function(a,b){
    let val = a-b;
   document.write(`<h1>${val}</h1>`)
})(20,30);

//arrow

let greetings=(msg)=>{
  alert(msg)
}

greetings("hello")

//hoisting
console.log(dummytext);
var dummytext ="ramya"
console.log("print");








