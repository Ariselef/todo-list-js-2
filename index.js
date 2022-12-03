let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let newTasks = document.getElementById('tasks');


addToDoButton.addEventListener('click', () => {
    if (inputField.value.length == 0) {
        alert('Enter a Task!')
    } else {
        newTasks.innerHTML += `
        <div class="task">
        <span id="taskName">${inputField.value}</span>
            ${inputField.value = ''}

            <button class = 'delete'>
            <i class = 'far fa-trash-alt'></i>
            </button>
        </div>
        `;

        var deleteTasks = document.querySelectorAll('.delete');
        for(var i=0; i<deleteTasks.length; i++) {
            deleteTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
})