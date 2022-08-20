const input = document.getElementById('taskInput');
const [addBtn] = document.getElementsByClassName('addBtn');
const ul = document.getElementsByClassName('todoList')[0];

addBtn.onclick = () => {
  if (!input.value) return;
  
  addTask(input.value);
  input.value = '';
};
// addBtn.addEventListener('click',() => addTask(document.getElementById('taskInput').value));

function addTask (text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');

  li.append(checkbox, span);
  checkbox.type = 'checkbox';
  span.innerText = text;
  ul.append(li);
}



