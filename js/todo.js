const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  function checkToDo() {
    if (checkBtn.style.color === "whitesmoke") {
      checkBtn.style.color = "#3fe87f";
      // document.querySelector("#todo-list span").style.textDecoration = "none";
    } else {
      checkBtn.style.color = "whitesmoke";
      // document.querySelector("#todo-list span").style.textDecoration = "line-through";
    }
  }

  const checkBtn = document.createElement("i");
  checkBtn.classList = "fa-solid fa-square-check";
  checkBtn.addEventListener("click", checkToDo);

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const deleteBtn = document.createElement("i");
  deleteBtn.classList = "fa-solid fa-square-minus";
  deleteBtn.addEventListener("click", deleteToDo);

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const visibleTodo = document.querySelector(".todo-btn");
visibleTodo.addEventListener("click", toggleTodo);

function toggleTodo() {
  const hiddenTodo = document.querySelector(".todo-box");

  // hiddenTodo.classList.toggle("hidden");

  if (hiddenTodo.style.opacity !== "0") {
    hiddenTodo.style.opacity = "0";
  } else {
    hiddenTodo.style.opacity = "1";
  }
}
