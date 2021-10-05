let cars = [
    {
        model:2021,
        price:1000,
        color:"red"
    },
    {
        model:2020,
        price:11000,
        color:"black"
    },
    {
        model:2022,
        price:123000,
        color:"blue"
    },

]

// cars.forEach((data)=>{
//     console.log(data);
// })



// for(let i=0;i<cars.length;i++){
// const element = cars[i];
// console.log(element);
// }


for(key in cars){
    console.log(key);
}
console.log("---------------------");

var person = {
    name:"picachu",
    age:" years",
    address:"space"
}
for(const key in person){
    console.log(`${key}:${person[key]}`);
}

console.log("----------------------");
let fruits = ["apple","mango","orange","banana","jackfruit"];
for(let i=0;i<fruits.length;i++){
   if(fruits[i]==="mango"){
       break;
   }else{
       console.log(fruits[i]);
   }
}
console.log("-------------------------");

let fruit = ["apple","mango","orange","banana","jackfruit"];
for(let i=0;i<fruit.length;i++){
   if(fruit[i]==="mango"&& fruit[i]==="jackfruite"){
       break;
   }else{
       console.log(fruits[i]);
   }
}