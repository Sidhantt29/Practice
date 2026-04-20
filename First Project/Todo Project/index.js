let todoList =[
  {
    item:'Buy Milk',
    dueDate:'4/10/23',

  },
  {
    item:'Buy Chocklate',
    dueDate:'5/10/23',
  }

];
displayItem();


function addtodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';


  displayItem();

}

function displayItem(){
  let containerElement = document.querySelector('.todo-container')
  let newHTML ='';
  for(let i=0; i < todoList.length; i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].duedate;
    let{item, dueDate} = todoList[i];
    newHTML +=
    `<div>
     <span>${item}</span>
     <span>${dueDate}</span>
     <button onclick="todoList.splice(${i},1);
     displayItem();">Delete</button>
     </div>
    
    
    `;
  }
containerElement.innerHTML =newHTML;
}