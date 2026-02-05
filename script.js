let input = document.getElementById('input');
let btn   = document.getElementById('btn');
let ulist = document.getElementById('ulist');
let clear  = document.getElementById('cls');
let list = document.getElementsByClassName('list');
let count =localStorage.length;
btn.addEventListener('click',()=>{
    // let value = input.value;
    let value = input.value.trim();
    if (value === "") return;
    if(value!=""){
        let node = document.createElement('li');
        node.setAttribute("class","list")
        let nodeValue = document.createTextNode(value);
        node.appendChild(nodeValue)
        ulist.appendChild(node)
        localStorage.setItem(count,value);
        count++
    }
    input.value=" "
})

ulist.addEventListener('click',function(event){
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
})

clear.addEventListener('click',()=>{
    localStorage.clear()
})


for(let i =0;i<localStorage.length;i++){

    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let node = document.createElement('li');
    node.setAttribute("class","list")
    let nodeValue = document.createTextNode(value);
    node.appendChild(nodeValue)
    ulist.appendChild(node)
}

// localStorage.setItem("user","rasheed");

let u = localStorage.getItem("user");
console.log(u);

// let name1 = document.getElementById('name');

// name1.innerText = u;