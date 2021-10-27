import './style.css';




window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  const submitBtn = document.querySelector('#submit-btn');
  const todoList = document.querySelector('.list-group');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const icon = document.createElement('i');

    li.classList = 'list-group-item';
    li.setAttribute('draggable', 'true');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList = 'checkbox';
    label.innerText = title.value;
    icon.classList = 'fa fa-ellipsis-v drag-drop float-end';

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(icon);
    todoList.appendChild(li);

    title.value = '';
  })
});



































// const submit = document.querySelector('#enter-task');
// const taskList = document.querySelector('#task-list');
// const clearBtn = document.querySelector('#clr-btn');
// const taskInput = document.querySelector('#task-name');

//   submit.addEventListener('click',(e) => {
//     e.preventDefault();

//   const li = document.createElement('li');
//   const checkBox = document.createElement('input');
//   const p = document.createElement('p');
//   const icon = document.createElement('i');

//   li.classList = 'list-group-item';
//   li.setAttribute('dragdraggable', 'true');
//   checkBox.setAttribute('type', 'checkbox');
//   checkBox.classList = 'check-box';
//   p.classList = 'd-inline';
//   p.innerText = taskInput.value;
//   icon.classList = 'fas fa-ellipsis-v drag-drop float-end';

//   li.appendChild(checkBox);
//   li.appendChild(p);
//   li.appendChild(icon);
//   taskList.appendChild(li);

//   taskInput.value = '';
//   });