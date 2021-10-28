import './style.css';
import { addTask } from './status.js';

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
  document.querySelector('.list-group').appendChild(li);
}

function showBook() {
  document.querySelector('.list-group').innerHTML = '';

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
})
