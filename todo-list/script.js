function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function() {
      taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = ""; 
}
