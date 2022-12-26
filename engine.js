// Находим все действующие элементы на странице
let taskListElem = document.querySelector('.task-list');
/*let taskItemElem = document.querySelectorAll('.task-item');*/
let taskItem__icon_defaultElem = document.querySelectorAll('.task-item__icon_default');
let taskItem__icon_checkedElem = document.querySelectorAll('.task-item__icon_checked');
let taskItem__txtElem = document.querySelectorAll('.task-item__txt');
let buttonAddTaskElem = document.getElementById('button-add-task');
let inputTaskNameElem = document.getElementById('input-task-name');

// Создаем объекты
let taskListObj = [];
let taskItemObj = {
    name: null,
    status: null,
}

// Обработчик отправки формы
buttonAddTaskElem.onclick = function () {
    if (inputTaskNameElem.value !== '') {
        createTaskElem()
    } else {
        inputTaskNameElem.classList.add('error')
    }
}
// Форма: отмена состояния ошибки
inputTaskNameElem.onclick = function () {
    inputTaskNameElem.classList.remove('error')
}

// Функция: Добавление элемента
let createTaskElem = function () {
    // Создаем нужные элементы на странице
    let newTaskItemElem = document.createElement('button');
        newTaskItemElem.classList.add('task-item');
        newTaskItemElem.id = taskListObj.length;
    let newTaskItem__icon_defaultElem = document.createElement('img');
        newTaskItem__icon_defaultElem.classList.add('task-item__icon_default');
        newTaskItem__icon_defaultElem.id = taskListObj.length;
    let newTaskItem__txtElem = document.createElement('p');
        newTaskItem__txtElem.classList.add('task-item__txt');
        newTaskItem__txtElem.classList.add('txt');
        newTaskItem__txtElem.id = taskListObj.length;
    // Размещаем созданные элементы на странице
    newTaskItemElem.append(newTaskItem__icon_defaultElem);
    newTaskItemElem.append(newTaskItem__txtElem);
    newTaskItem__txtElem.textContent = inputTaskNameElem.value;
    taskListElem.append(newTaskItemElem);
    // Создаем объект и вписываем его в массив списка задач
    let newTaskItemObj = {
        name: inputTaskNameElem.value,
        status: 'active',
    };
    taskListObj.push(newTaskItemObj);
    console.log(taskListObj)
    // Очищаем инпут
    resetInput();
    reviewTasks();
}

// Функция очистки инпута
let resetInput = function () {
    inputTaskNameElem.value = '';
}

// Функция: Перебор элементов taskItemElem
let reviewTasks = function () {
    let taskItemElems = document.querySelectorAll('.task-item');
    let taskItemElem = document.querySelector('.task-item');
    for (taskItemElem of taskItemElems) {
        // Обработчик события: Клик на задачу
        taskItemElem.onclick = function (e) {
            console.log('Клик на таск ' + e.target.textContent)
        }
    }
}
reviewTasks()




