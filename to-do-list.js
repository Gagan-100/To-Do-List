const todoList = [];

function addTodoListAgain() {
  let todoListHtml = "";

  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const htmlTodo = `

    <div>  ${name} </div>
    <div>   ${dueDate}  </div>
   
    <button  class ="js-delete-todo" data-index = "${index}">
      Delete
    </button> 
    `;

    todoListHtml += htmlTodo;
  });
  document.querySelector(".js-todo-display").innerHTML = todoListHtml;


document.querySelectorAll('.js-delete-todo').forEach((deleteBtn) =>{
  deleteBtn.addEventListener('click', () =>{
    const index = deleteBtn.dataset.index;
     todoList.splice(index,1);
     addTodoListAgain();
  });
});

}



const addTodoBtn = document.querySelector(".js-add-todo");
const addBtn = () => {
  addList();
};
addTodoBtn.addEventListener("click", addBtn);



function addList() {
  const inputElement = document.querySelector(".js-inputTodo");

  const nameValue = inputElement.value;

  const dueDateInputElement = document.querySelector(".js-date-input");
  const dueDateValue = dueDateInputElement.value;

 //this check the empty todo 
  if(nameValue === "" || dueDateValue === "" ){
    alert('please fill both fields');
    return;
  }

  todoList.push({ name: nameValue, dueDate: dueDateValue });

  inputElement.value = "";
  dueDateInputElement.value = "";

  addTodoListAgain();
}
