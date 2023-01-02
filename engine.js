const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const tasksListEl = document.querySelector('.tasks-list');

let tasks = []; // Создаем массив с задачами

formEl.addEventListener('submit', addTask); // Обработчик отправленной формы

function addTask(event) {
    event.preventDefault(); // Сброс перезагрузки страницы при отправке формы
    const taskText = inputEl.value; // Забираем введенный текст из инпута
    const newTask = { // Создаем Новый таск как объект
        id: Date.now(),
        name: taskText,
        done: false
    }
    tasks.push(newTask) // Добавляем его в массив
    /* Создаем и разметку и вставляем на страницу */
    const taskHTML = `
        <li id="${newTask.id}" class="task-item">
            <img class="task-item__icon" src="./icons/checkbox-off.svg" width="20" height="20" alt="checkbox">
            <p class="task-item__txt txt">${taskText}</p>
        </li>
    `
    tasksListEl.insertAdjacentHTML('beforeend', taskHTML);
    /* */
    inputEl.value = '';
    inputEl.focus();
}
