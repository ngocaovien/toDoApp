console.log("hello");
// grab the to do Task
let toDo = prompt("What you want to do?", "sleep");
//create new li
let newLi = document.createElement('li');
const listOfToDo = document.querySelector(".to-do-list")

//adding new todo to li.

newLi.textContent = toDo;
listOfToDo.appendChild(newLi);
