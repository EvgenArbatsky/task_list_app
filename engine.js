let taskListElem = document.querySelector('.task-list');
let taskItemElem = document.querySelectorAll('.task-item');
let taskItem__icon_defaultElem = document.querySelectorAll('.task-item__icon_default');
let taskItem__icon_checkedElem = document.querySelectorAll('.task-item__icon_checked');
let taskItem__txtElem = document.querySelectorAll('.task-item__txt');
let buttonAddTaskElem = document.getElementById('button-add-task');
let inputTaskName = document.getElementById('input-task-name');


let taskListObj = [];
let taskItemObj = {
    name: null,
    status: null,
}

buttonAddTaskElem.onclick = function () {
    createTask()
}

let createTask = function () {
    let newTaskItemElem = document.createElement('button');
        newTaskItemElem.classList.add('task-item');
    let newTaskItem__icon_defaultElem = document.createElement('img');
        newTaskItem__icon_defaultElem.classList.add('task-item__icon_default');
    let newTaskItem__txtElem = document.createElement('p');
        newTaskItem__txtElem.classList.add('task-item__txt');
        newTaskItem__txtElem.classList.add('txt');
    newTaskItemElem.append(newTaskItem__icon_defaultElem);
    newTaskItemElem.append(newTaskItem__txtElem);
    newTaskItem__txtElem.textContent = inputTaskName.value;
    taskListElem.append(newTaskItemElem);



    resetInput();
}

let resetInput = function () {
    inputTaskName.value = '';
}