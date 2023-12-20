const elTodotext = document.querySelector('.todo__container__text')
const elContainer = document.querySelector('.todo__list')


function onClick1() {
    event.preventDefault()
    const elValue = elTodotext.value
    if (elValue == "") {
        elTodotext.classList.add('active__input')
    }
    else {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const delet = document.createElement('button')
        elTodotext.classList.remove('active__input')

        li.classList.add('todo__link')
        delet.classList.add('todo__delete')
        p.classList.add('text')

        elContainer.append(li)
        li.append(p)
        li.append(delet)
        p.innerHTML = elValue
    }
    
    elTodotext.value = ""
}

elContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('active')
    }
    else if (e.target.classList == "todo__delete"){
        e.target.parentElement.remove()
    }
},false)

