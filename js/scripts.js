//declaring variable for eventlistener.
let submitBtn = document.querySelector('.todobtn');
//creating the delete button

//eventlistener below add items to the todo list.
submitBtn.addEventListener('click', e =>{
  //creating the delete edit button.
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let deleteText = document.createTextNode("Delete");
  let editText = document.createTextNode("Edit");
  deleteBtn.appendChild(deleteText);
  editBtn.appendChild(editText);
  deleteBtn.className ="delete";
  editBtn.className = "edit";

  let toDo = document.forms.todoform.todoitem.value;
  let newLi = document.createElement('li');
  newLi.className = "todoLi";
  const listOfToDo = document.querySelector(".to-do-list");
  newLi.textContent = toDo;
  listOfToDo.appendChild(newLi);
  let newLiWithBtn = newLi.appendChild(deleteBtn);
  newLiWithBtn = newLi.appendChild(editBtn);


let deleteItem = document.getElementsByClassName('delete');

deleteItem[deleteItem.length-1].addEventListener('click' , e => {
  // listOfToDo.removeChild(newLi);
  let removedChild = listOfToDo.removeChild(newLi);
  const listOfDone = document.querySelector(".done-list");
  listOfDone.appendChild(removedChild);
});

  document.forms.todoform.reset();
});
