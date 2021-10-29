import './style.css';
import { addTask } from './status';

const taskList = document.querySelector('.list-group');

let tasks = [];

function printTasks(task) {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  const icon = document.createElement('i');
  const label = document.createElement('label');

  li.classList = 'list-group-item';
  li.setAttribute('draggable', 'true');
  checkBox.type = 'checkbox';
  checkBox.classList = 'checkbox';
  checkBox.checked = task.completed;
  label.innerHTML = task.description;
  icon.classList = 'fa fa-ellipsis-v drag-drop float-end';

  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(icon);
  taskList.appendChild(li);
}

function showBook() {
  taskList.innerHTML = '';

  if (localStorage.getItem('list')) {
    tasks = JSON.parse(localStorage.getItem('list'));
  }
  tasks.forEach((task) => printTasks(task));
}

showBook();

document.querySelector('#input-form').addEventListener('submit', (e) => {
  e.preventDefault();

  addTask(tasks);

  showBook();
});

// taskList.addEventListener('click', (e) => {
//   if (e.target.classList = 'checkbox') {
//     e.target.parentNode.childNodes[1].classList.toggle('completed');
//   }
// });