function storeInLocalStorage(tasks) {
  localStorage.setItem('list', JSON.stringify(tasks));
}

export default function addTask(tasks) {
  tasks.push({ description: document.querySelector('#title').value, completed: false, index: tasks.length });

  storeInLocalStorage(tasks);

  document.querySelector('#title').value = '';
}
