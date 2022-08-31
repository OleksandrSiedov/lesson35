const input = document.getElementById('taskInput');
const [addBtn] = document.getElementsByClassName('addBtn');
const ul = document.getElementsByClassName('todoList')[0];
const tasks = JSON.parse(localStorage.getItem('tasks')) || []  ;

tasks.forEach(addTask);

addBtn.onclick = () => {
  if (!input.value) return;

  tasks.push(input.value);
  localStorage.tasks = JSON.stringify(tasks);

  addTask(input.value);
  input.value = '';
};
// addBtn.addEventListener('click',() => addTask(document.getElementById('taskInput').value));

input.onkeydown = (e) => {
  if (e.key !== "Enter" || !input.value) return;

  addTask(input.value);
  input.value = '';
}


function addTask(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');

  li.append(checkbox, span);
  checkbox.type = 'checkbox';
  span.innerText = text;
  ul.append(li);

  checkbox.onchange = (e) => {
    // if (checkbox.checked) {
    //   span.style.textDecoration = 'line-through'
    // } else {
    //   span.style.textDecoration = null;
    // }
    span.style.textDecoration = (checkbox.checked? 'line-through': null);
  }
  
}





