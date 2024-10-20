document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to avoid re-saving to Local Storage
    }
  
    // Function to add a task
    function addTask(taskText, save = true) {
      if (!taskText) return;
  
      // Create a new li element for the task
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create a remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add = 'remove-btn';

      element.classList.add('class1', 'class2');

  
      // Set up the remove button to delete the task from both the DOM and Local Storage
      removeButton.onclick = function() {
        taskList.removeChild(li);
        removeTaskFromLocalStorage(taskText);
      };
  
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      // Save to Local Storage
      if (save) {
        saveTaskToLocalStorage(taskText);
      }
      
      // Clear the input field
      taskInput.value = "";
    }
  
    // Save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  
    // Remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    // Event listeners
    addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
      } else {
        alert("Please enter a task.");
      }
    });
  
    // Add task with Enter key
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
          addTask(taskText);
        } else {
          alert("Please enter a task.");
        }
      }
    });
  
    // Load tasks on page load
    loadTasks();
  });
  
