
/* Находим объекты на странице */
const formAddTaskEl = document.querySelector('.form-add-task');
const inputTaskNameEl = document.querySelector('#input-task-name');
const taskListEl = document.querySelector('.task-list');

/* Создаем массив с задачами */
let taskListObj = [];

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
}

/* Отрисовка таска */
function renderTaskItemEl(taskItemObj) {
    const imgState = taskItemObj.done ? './icons/checkbox-on.svg' : './icons/checkbox-off.svg';
    const pState = taskItemObj.done ? '.txt_checked' : '';
    const taskHTML =
        `<li id="${taskItemObj.id}" class="task-item">
            <img class="task-item__icon" src="${imgState}" width="20" height="20" alt="checkbox">
            <p class="task-item__txt txt ${pState}">${taskItemObj.text}</p>
        </li>`;
    taskListEl.insertAdjacentHTML('beforeend', taskHTML);
}


/* Смена статуса задачи */
taskListEl.onclick = () => {
    let taskItemsEl = document.querySelectorAll('.task-item');
    let taskItemEl = document.querySelector('.task-item');
    for (taskItemEl of taskItemsEl) {
        taskItemEl.onclick = function () {
            const taskId = Number(this.id);
            const taskItemObj = taskListObj.find(function (taskItemObj) {
                if (taskItemObj.id === taskId) {
                    return true
                }
            })
            taskItemObj.done = !taskItemObj.done;
            const taskItem__iconEl = this.querySelector('.task-item__icon');
            const taskItem__txtEl = this.querySelector('.task-item__txt');
            if (taskItemObj.done === true) {
                taskItem__iconEl.src = "./icons/checkbox-on.svg";
                taskItem__txtEl.classList.add('txt_checked');
                console.log('test1');
            } else {
                taskItem__iconEl.src = "./icons/checkbox-off.svg";
                taskItem__txtEl.classList.remove('txt_checked');
                console.log('test2');
            }
            console.log(this.id + taskListObj);
        }
    }
}

