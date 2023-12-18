const elTodotext = document.querySelector('.todo__container__text')
const elContainer = document.querySelector('.todo__list')

let array = []

function onClick1() {
    event.preventDefault()
    const elValue = elTodotext.value
    array.push(elValue)
    onMap()
}

function onMap() {
    event.preventDefault()
    array.forEach((items, index) => {
        onCreat(items)
    });
}


function onCreat(items) {
    const valuetext = document.createElement('li')
    valuetext.classList.add('text')
    elContainer.append(valuetext)   
    
    if (items == "." || items == null) {
        console.log('error');
    }
    else  {
        valuetext.innerHTML = items
        elTodotext.value = null
        array = []
    }
}


