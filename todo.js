function add() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
  }

  var li = document.createElement('li');
  var taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.appendChild(document.createTextNode(taskInput.value));
  li.appendChild(taskText);

  var deleteIcon = document.createElement('span');
  deleteIcon.className = 'delete-icon';
  deleteIcon.appendChild(document.createTextNode('🗑️'));
  deleteIcon.onclick = function () {
      deleteTask(li);
  };
  li.appendChild(deleteIcon);

  li.onclick = function () {
      this.classList.toggle('completed');
  };
  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(task) {
  task.parentElement.removeChild(task);
}
