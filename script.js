let input = document.getElementById('input');
let btn   = document.getElementById('btn');
let ulist = document.getElementById('ulist');
let clear  = document.getElementById('cls');
let list = document.getElementsByClassName('list');
// let count =localStorage.length;
let todos = JSON.parse(localStorage.getItem("todo")) || [];

btn.addEventListener('click',()=>{
    // let value = input.value;
    let value = input.value.trim();
    if (value === "") return;
    todos.push(value);
    localStorage.setItem("todo",JSON.stringify(todos));
    let li = document.createElement('li');
        li.textContent = value;
        ulist.append(li);
    // run()
    input.value=""
})

ulist.addEventListener('click',function(event){
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
})

clear.addEventListener('click',()=>{
    localStorage.clear()
})

// function run(){

//     todos.forEach(element => {
//         let lists = document.createElement('li');
//         let content = document.createTextNode(element);
//         lists.append(content);
//         ulist.append(lists);
//     });
// }

todos.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ulist.append(li);
    });



