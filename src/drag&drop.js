import * as task from './status';
import listIt from './index'; // eslint-disable-line

let dragStartIndex;

function swapItems(startIndex, endIndex, list) {
  const itemOne = list[startIndex];
  const itemTwo = list[endIndex];
  list[startIndex] = itemTwo;
  list[endIndex] = itemOne;
  task.saveLocal(list);
  listIt();
}

function dragStart(i) {
  dragStartIndex = i;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(draggable, index, list) {
  const dragEndIndex = index;
  swapItems(dragStartIndex, dragEndIndex, list);
  draggable.classList.remove('over');
  task.updateIndex();
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function addEvents(list) {
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach((draggable, index) => {
    draggable.addEventListener('dragstart', () => {
      dragStart(index);
    });
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', () => {
      drop(draggable, index, list);
    });
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
  });
}
export default addEvents;