document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Add task when the button is clicked
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Add task when the Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});



function addTask(taskText, save = true) {
    taskText = taskText.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item (li) and remove button
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function () {
        taskList.removeChild(li);
        removeTask(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById('task-input').value = "";

    // Save task to Local Storage
    if (save) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}



function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => addTask(task, false));
}
