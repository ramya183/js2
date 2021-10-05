// fetch("http://jsonplaceholder.typicode.com/todos/1").then(res=>res.json()).then(d=>{
//     console.log(d);
//     document.getElementById("id").innerHTML=d.userId;
//     document.getElementById("UserId").innerHTML=d.id;
//     document.getElementById("Title").innerHTML=d.title;
//     document.getElementById("Completed").innerHTML=d.completed;
// })




 function myfunction(){

    let data= {
 id: document.getElementById("id").value,
 UserId:document.getElementById("UserId").value,
 Title: document.getElementById("Title").value,
 Completed:document.getElementById("Completed").value
 }
 console.log(data);
 return false;
}


// var list1 = [];
// var list2 = [];
// var list3 = [];
// var list4 = [];

// var n = 1;
// var x = 0;

// function myfunction(){
//     var AddRown = document.getElementById('show');
//     var NewRow = AddRown.insertRow(n);

//  list1[x]= document.getElementById("id").value;
//  list2[x]=document.getElementById("UserId").value;
//  list3[x]=document.getElementById("Title").value;
//  list4[x]=document.getElementById("Completed").value;

//  var cel1 = NewRow.insertCell(0)
//  var cel2 = NewRow.insertCell(1)
//  var cel3 = NewRow.insertCell(2)
//  var cel4 = NewRow.insertCell(3)

//  cel1.innerHTML = list1[x];
//  cel2.innerHTML = list2[x];
//  cel3.innerHTML = list3[x];
//  cel4.innerHTML = list4[x];

//  n++;
//  x++;

    

// }

