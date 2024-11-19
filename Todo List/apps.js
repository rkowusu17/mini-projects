const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", createElement);
newTodoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createElement();
  }
});

function createElement() {
  const newTodoText = newTodoInput.value;

  if (newTodoText !== "") {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newTodoText;
    const deleteTodoBtn = document.createElement("button");

    deleteTodoBtn.innerText = "x";
    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", function () {
      newTodoItem.remove();
    });

    newTodoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newTodoItem);

    newTodoInput.value = "";
  }
  //   } else {
  //     newTodoItem.innerHtml = `<p class="error"> Please add a To-Do list </p>`;
  //   }
}
