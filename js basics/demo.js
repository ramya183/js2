function deleterow(){
    addrowlist.remove("tr")
}

function addrow(){
  let add1= document.createElement("tr")
  let add2= document.createElement("td")
  let add3= document.createElement("td")
  add2.innerText="x";
  add3.innerText="y"
  addrowlist.appendChild(add2);
  addrowlist.appendChild(add3);
}

