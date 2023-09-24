const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
console.log(inputBox.value);

function AddTask() {
    if(inputBox.value===''){
        alert("Please! Add your task");
    }else{
        let li = document.createElement('li');
        li.innerHTML  = inputBox.value;
        console.log(listContainer);
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);

        inputBox.value='';

        listContainer.addEventListener('click',function (e) {
            // console.log("hello");
            console.log(e.target.tagName);
            if(e.target.tagName === "LI"){
                e.target.classList.toggle('checked')
            }
            else if(e.target.tagName === 'SPAN'){
                e.target.parentElement.remove();
            }
        })

        // console.log("innerHTML in newly created li",li);

    }
    // console.log("button pressed",inputBox.value);
}