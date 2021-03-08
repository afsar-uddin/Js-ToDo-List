const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button')

function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !=='') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi)
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)
    }

    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent)
        checkBtn.style.display = 'none'
    })
    
    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    })
}

btn.addEventListener('click', addList);

input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null)
})

// console.log(newLi)