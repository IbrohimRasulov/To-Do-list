export function saveLocal(list) {
  window.localStorage.setItem('todos', JSON.stringify(list));
}

export function toggle(el, list) {
  list.forEach((task) => {
    if (task === el) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveLocal(list);
}

export function add(list) {
  list.push({ description: document.querySelector('#newTask').value, isCompleted: false, index: list.length });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
}

export function updateIndex(list) {
  let i = 0;
  list.forEach((el) => {
    el.index = i;
    i += 1;
  });
}

export function removeDone(list) {
  list = list.filter((el) => el.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
}

export function removeThis(task, list) {
  list = list.filter((el) => el !== task);
  updateIndex(list);
  saveLocal(list);
}