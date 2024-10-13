document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    // Function to add a task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return; // ngebataasein biar gaada task baru ngebug jir

        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-task">X</button>`;
        li.addEventListener('dblclick', editTask); 
        li.addEventListener('click', toggleComplete); 

        taskList.appendChild(li);
        newTaskInput.value = ''; 
    }

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-task')) {
            e.target.parentElement.remove();
        }
    });

    // edit 
    function editTask() {
        const currentText = this.firstChild.textContent;
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null) {
            this.firstChild.textContent = newText;
        }
    }


    function toggleComplete() {
        this.classList.toggle('completed');
    }

    addTaskButton.addEventListener('click', addTask);

    // kalau misal pencet enter, ntar langsung ada di situ
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
