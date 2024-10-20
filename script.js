document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage and display them in the task list
    function loadTasks() {
        // Retrieve tasks from Local Storage, or use an empty array if no tasks are found
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Iterate over each task and add it to the DOM
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // Don't save to Local Storage again during load
        });
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // If no taskText is provided, retrieve it from the input field
        if (taskText === undefined) {
            taskText = taskInput.value.trim();
        }

        // Check if the task input is not empty
        if (taskText === "") {
            alert("Please enter a task");
            return; // Stop further execution if the input is empty
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a 'Remove' button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event listener to remove the task when clicked
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the task (li) from the task list (ul)
            removeTaskFromLocalStorage(taskText); // Remove the task from Local Storage
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";

        // Save the task to Local Storage if needed
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        // Retrieve current tasks from Local Storage, or initialize an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        // Retrieve current tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Filter out the task that needs to be removed
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        
        // Save the updated array back to Local Storage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add event listener for the "Add Task" button
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Add event listener for pressing the "Enter" key inside the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage when the page is loaded
    loadTasks();
});
