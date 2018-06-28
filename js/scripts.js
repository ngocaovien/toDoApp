//declaring variable for eventlistener.
let submitBtn = document.querySelector('.todobtn'); //Don't forget to camelCase! -RJH
//creating the delete button

//eventlistener below add items to the todo list.
submitBtn.addEventListener('click', e =>{

  //creating the delete and edit button.
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let deleteText = document.createTextNode("Delete");
  let editText = document.createTextNode("Edit");
  deleteBtn.appendChild(deleteText); //This is an interesting way of putting the text into the buttons -RJH
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

//setting the delete btn eventlistener and moving the item from one list to the other.
let deleteItem = document.getElementsByClassName('delete');

deleteItem[deleteItem.length-1].addEventListener('click' , e => { //You are going to run into issues with this delete function in the "done" list because you're targetting a node that isn't this node's parent. -RJH
  // listOfToDo.removeChild(newLi);
  let removedChild = listOfToDo.removeChild(newLi);
  const listOfDone = document.querySelector(".done-list");
  listOfDone.appendChild(removedChild);
});


  document.forms.todoform.reset(); //nice use of reset()! -RJH
});
