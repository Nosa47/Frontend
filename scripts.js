// External JavaScript code for interacting with Flask backend
const backendUrl = 'http://192.168.1.32'; // Replace with your backend server's IP or domain

function addTask() {
    const taskInput = document.getElementById('task-input');
    const newTask = { title: taskInput.value };

    fetch(`${backendUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(response => response.json())
    .then(data => {
        taskInput.value = '';
        addTaskToUI(data);
    })
    .catch(error => console.error('Error:', error));
}

function addTaskToUI(task) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = task.title;
    taskItem.classList.add('task-item'); // Add styling class
    taskList.appendChild(taskItem);
}
