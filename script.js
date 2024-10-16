document.addEventListener('DOMContentLoaded', function() {
    // Your code here will run after the DOM has fully loaded
    console.log('DOM fully loaded and parsed');
    
    // Example: Let's say you have a function to display quotes
    displayQuotes();

    // You can also set up other event listeners, manipulate DOM elements, etc.
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements and storing in constants
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Example: Checking if elements are selected
    console.log(addButton, taskInput, taskList);

    // Your task management logic can be placed here
});


document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            // Logic to add the task will go here (e.g., creating a new list item)
            console.log("Task to be added:", taskText);
        }
    }

    // Optionally
})


document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign onclick event to remove the task (li element)
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Add an event listener to the addButton for adding tasks
    addButton.addEventListener('click', addTask);
});


document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
    }
})
