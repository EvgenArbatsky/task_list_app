
/* Находим объекты на странице */
const formAddTaskEl = document.querySelector('.form-add-task');
const inputTaskNameEl = document.querySelector('#input-task-name');
const taskListEl = document.querySelector('.task-list');
const buttonDeleteDoneTasksEl = document.querySelector('#button-delete-done-tasks')

/* Создаем массив с задачами */
let taskListObj = [];

resetTasks();
checkDoneTasks();

/* Добавление задачи */
formAddTaskEl.addEventListener('submit', addTask); // Обработчик отправленной формы
function addTask(event) {
    event.preventDefault(); // Сброс перезагрузки страницы при отправке формы
    const taskText = inputTaskNameEl.value; // Забираем введенный текст из инпута
    const taskItemObj = { // Создаем Новый таск как объект
        id: Date.now(),
        text: taskText,
        done: false
    }
    taskListObj.push(taskItemObj); // Добавляем его в массив
    renderTaskItemEl(taskItemObj); // Отрисовываем таск в HTML
    inputTaskNameEl.value = ''; // Очищаем инпут
    /*inputTaskNameEl.focus(); // Возвращаем фокус на инпут*/
    resetTasks();
}

/* Отрисовка таска */
function renderTaskItemEl(taskItemObj) {
    // Определяем стиль внутренних элементов в зависимости от статуса объекта
    const imgState = taskItemObj.done ? './icons/checkbox-on.svg' : './icons/checkbox-off.svg';
    const pState = taskItemObj.done ? '.txt_checked' : '';
    // Рисуем HTML
    const taskHTML =
        `<li id="${taskItemObj.id}" class="task-item">
            <img class="task-item__icon" src="${imgState}" width="20" height="20" alt="checkbox">
            <p class="task-item__txt txt ${pState}">${taskItemObj.text}</p>
        </li>`;
    // Вставляем в разметку
    taskListEl.insertAdjacentHTML('beforeend', taskHTML);
}

/* Пересчитать пункты задач на странице */
function resetTasks() {
    let taskItemsEl = document.querySelectorAll('.task-item');
    let taskItemEl = document.querySelector('.task-item');
    /* Смена статуса задачи */
    for (taskItemEl of taskItemsEl) {
        taskItemEl.onclick = function () {
            // Находим в массиве с задачами объект, связанный по ID, и меняем его статус
            const taskId = Number(this.id);
            const taskItemObj = taskListObj.find(function (taskItemObj) {
                if (taskItemObj.id === taskId) {
                    return true
                }
            })
            taskItemObj.done = !taskItemObj.done;
            // Меняем стиль внутренних элементов в зависимости от статуса объекта
            const taskItem__iconEl = this.querySelector('.task-item__icon');
            const taskItem__txtEl = this.querySelector('.task-item__txt');
            if (taskItemObj.done === true) {
                taskItem__iconEl.src = "./icons/checkbox-on.svg";
                taskItem__txtEl.classList.add('txt_checked');
            } else {
                taskItem__iconEl.src = "./icons/checkbox-off.svg";
                taskItem__txtEl.classList.remove('txt_checked');
            }
            checkDoneTasks();
        }
    }
}

/* Удалить выполненные задачи */
buttonDeleteDoneTasksEl.onclick = () => {
    taskListObj = taskListObj.filter (function (taskItemObj){
        if (taskItemObj.done === false) {
            return true
        }
    });
    let taskItemsEl = document.querySelectorAll('.task-item');
    let taskItemEl = document.querySelector('.task-item');
    for (taskItemEl of taskItemsEl) {
        taskItemEl.remove();
    }
    taskListObj.forEach(function (taskItemObj){
        renderTaskItemEl(taskItemObj)
    });
    checkDoneTasks();
}

/* Кнопка удаления выполненных задач доступна только, если они есть */
function checkDoneTasks() {
    let taskListObj_done = null;
    taskListObj.find (function (taskItemObj){
        if (taskItemObj.done === true) {
            taskListObj_done = true;
        }
    });
    console.log('Сработала функция checkDoneTasks')
    if (taskListObj_done === true) {
        buttonDeleteDoneTasksEl.classList.remove('hidden')
    } else {
        buttonDeleteDoneTasksEl.classList.add('hidden')
    }
}









