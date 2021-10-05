// var x = 2;
// var y  =3;
// var z = x+y;
// console.log(z);


// function add(){
//     var num1 = 2;
//     var num2 = 3;
//     var addition = num1+num2;
//     console.log(addition);
// }


// function add1(){
//     var num1 = parseInt(prompt("1st number"))
//     var num2 = parseInt(prompt("2st number"))
//     console.log(`add two number',${num1+num2}`); 
//     document.getElementById("div").innerHTML = num1+num2; 


// }
// //ternory operator

// function drink(age){
//     return (age>21)?"beer":"sprite"
// }

// let a = drink(22)
// console.log(a);
// document.write(a)


//logical 

// var a=10,b=20,c=10,d=20;
// function logical(){
//     if(a==b&&b==d||a==d){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(logical());

//concatination

// var a = 10;
// console.log(a+"10");


// // Objects

// var person = {
//     Name:"doremon",
//     age:" years",
//     address:"space"
// }

// console.log(person.Name);

// //using function

// function person1(name,age,qualification,salary){
//     this.name = name,
//     this.age = age,
//     this.gualification = qualification,
//     this.salary = salary
// }

// let cars = new person1("ramya",23,"BE",20000)


// console.log(cars);


// console.log("-----------------------");

// var employee = {
//     Name:"robert",
//     designation:"software",
//     skills:["html","css","js"],
//     role:function(){
//         return "he develops software"
//     },
//     address:{
//         street:"1st cross",
//         locality:"BSK",
//         pincode:60026
//     }
// }

// let role = employee.role();
// var address= employee.address.street
// console.log(role,address,employee.skills);

// console.log("------------------------");

// //object.keys
// console.log(Object.values(person));

// // concatinate object (assign)
// console.log(Object.assign(person,person1));

// entries convert object into array
// var person4 = {
//     Name:"doremon",
//     age:" years",
//     address:"space",
//     address:"space",
//     qualification:"BE"
// }

// console.log(Object.entries(person4));

// console.log(Object.values(person4));


// //array
// let a1 = ["ramya","bs" ,16]
// console.log(a1);

// let fruites = new Array("ramya","bs" ,16)
// console.log(fruites);

// console.log(fruites[0]);

// var date = new Date
// console.log(date);

// var date = new Date(2018,13,23,3,4,0)
// console.log(date);

// var date  = new Date(0)
// console.log(date);

// console.log(date.getTime());

// console.log(date.getUTCHours());

// function Car(){
//     var car1 = new Car();
//     var car2 = new Car(); 
// }
// Car.prototype.color = "Black"
// car1.color = "red";
// car2.color = "Green";
// console.log(Object.getPrototypeOf(car1));
// console.log(car2);


//loop

// var a = 10;
// var b = 30;
// var c = 50;
// if(a<b){
//     console.log(a);
// }else if(b<c){
//     console.log(b);

// }else{
//     console.log(a+b+c);
// }


// while(a>b){
//     a++;
//     console.log(a);
// }

// do{
//     a++;
//     console.log(a);
// }while(a>b)

// var key = "A"
// switch(key){
//     case "A":
//         console.log("Capital A");
//         break;

//         case "a":
//             console.log("small a");
//             break;
//         default:
//             break;
// }



// let  car = {
//     Name:"creta",
//     color:"white",
//     model:2021,
//     cubiCapacity:2000
// }
// let jsonObj = JSON.stringify(car);
// console.log(jsonObj);


// console.log("------------------");

// var obj = `{
// "Name":"creta",
// "color":"white",
// "model":2021,
// "cubiCapacity":2000
// }`
// let jsObj = JSON.parse(obj);
// console.log(JSON.parse(obj));


// //clousure


// function clousureFunc(){
//     var username = "js"
//     function Display(){
//         alert(username)
//     }
//    Display()
// }
// clousureFunc()


//callback

// function add(a,b){
//   console.log(a+b);
// }
// function callBackFun(a,b,callback){
// callback(a,b)
// }
// callBackFun(3,4,add)

//recursion


// function recursiveFunc(num){
//     var a = num;
//     var b=a-1;
//     if(a>1){
//         console.log(b);
//         recursiveFunc(b)
//     }
// }
// recursiveFunc(4);

//rest operator

// function person(name,age=24,qualification,place,...rest) {
//     this.name = name;
//     this.age = age;
//     this.qualification = qualification;
//     this.place = place;
//     this.rest =rest;
// }
// let person1 = new person('arjun kapoor',34,'btech','banglore','b','c','d')
// console.log(person1);

//spread operator

// var number = [1,2,3,4,5];
// var number2 = [6,7,8,9,10];
// var total = [...number,number2]
// console.log(total);

// let  car = {
//         Name:"creta",
//         color:"white",
//         model:2021,
//         cubiCapacity:2000
//      }

//      let car2 ={
//          torqur:"300N-m"

//      } 

//      let a = {...car,car2};
//      console.log(a);

//destructuring


// let  car = {
//              Name:"creta",
//              color:"white",
//              model:2021,
//              cubiCapacity:2000
//           }

// const {Name,color,model,cubiCapacity} = car;
// console.log(Name,color,model,cubiCapacity);

var number = [1,2,3,4,5];
let [a,b,c,d,e] = number;
console.log(a,b,c,d,e);










