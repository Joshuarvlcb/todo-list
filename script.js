'use script';

const taskContainer = document.querySelector('.section')

const addBtn = document.querySelector('.add-btn')

const inputValue = document.getElementById('taskValue')

const task = document.querySelector('task')
addBtn.addEventListener('click',function(e){
    if(inputValue.value !== ''){
        const html = `<div class="list-container">
        <div class=" two-items">
            <div class="check">
                <input type="checkbox">
            </div>
            
        </div>
        <div class="task">${inputValue.value}</div>

        <div class="trash">
            <ion-icon class="trash-can" name="trash-outline"></ion-icon>
        </div>
</div>`
        taskContainer.insertAdjacentHTML('afterbegin',html)
        const trash = document.querySelector('.trash');

        trash.addEventListener('click',function(e){
            const element = document.querySelector('.list-container')
            element.innerHTML = ''
        })
        inputValue.value = ''
    }
})

const todaysDate = document.querySelector('.card-header-text')
const currentDate = function(date){
    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`
}
todaysDate.textContent = currentDate(new Date())


