const elTodotext = document.querySelector('.todo__container__text')
const elContainer = document.querySelector('.todo__container')

let array = []

function onClick1() {
    event.preventDefault()
    const elValue = elTodotext.value
    array.push(elValue)
    onMap()
}

function onCreat(items) {
    const valuetext = document.createElement('p')
    valuetext.classList.add('text')
    if (items == "." || items == "  ") {
        console.log('error');
    }
    else  {
        valuetext.innerHTML = items
        elContainer.append(valuetext)
        elTodotext.value = null
        array = []
    }
}


function onMap() {
    event.preventDefault()
    array.forEach((items, index) => {
        onCreat(items)
    });
}
