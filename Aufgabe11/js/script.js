let ToDo = {
    todosText: ["Brot kaufen"],
    todosChecked: [true, false, false],
};
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < ToDo.todosText.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + ToDo.todosChecked[index] + "'><i class='fas fa-check'></i></span>"
            + ToDo.todosText[index] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.insertBefore(todo, todosDOMElement.firstChild);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = ToDo.todosText.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        ToDo.todosText.push(inputDOMElement.value);
        ToDo.todosChecked.push(false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    ToDo.todosChecked[index] = !ToDo.todosChecked[index];
    drawListToDOM();
}
function deleteTodo(index) {
    ToDo.todosText.splice(index, 1);
    ToDo.todosChecked.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map