let modal = null
const focusableSelector = 'button, a, input, textarea'
let focusables = []
let previouslyFocusedElement = null
let addModal = document.querySelector('#modal-add')
let workModal = document.querySelector("#modal-work")

const openModal = function (e) {
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute('href'))
    focusables = Array.from(modal.querySelectorAll(focusableSelector))
    previouslyFocusedElement = document.querySelector (':focus') 
    modal.style.display = null
    addModal.style.display = 'none'
    workModal.style.display = 'flex'
    focusables[0].focus()
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const openAddModal = function (e) {
    e.preventDefault()
    addModal.style.display = 'flex'
    workModal.style.display = 'none'
    focusables = Array.from(modal.querySelectorAll(focusableSelector))
    previouslyFocusedElement = document.querySelector (':focus') 
    focusables[0].focus()
}


const backModal = function(e) {
    e.preventDefault()
    addModal.style.display = 'none'
    workModal.style.display = 'flex'
    document.getElementById("js-add-form").reset();
}
/*addModal.style.display = 'none' //PB sur addModal quand on click en dehos de la modale pour fermer
    workModal.style.display = null*/

const closeModal = function (e) {
    if (modal === null) return
    if(previouslyFocusedElement !== null) previouslyFocusedElement.focus()
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
}

const stopPropagation = function (e) {
    e.stopPropagation()
}



const focusInModal = function (e) {
    e.preventDefault()
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
    if (e.shiftKey === true) {
        index--
    } else {
        index++
    }
    
    if (index >= focusables.length){
        index = 0
    }
    if (index < 0) {
        index = focusables.length - 1
    }
    focusables[index.focus()]
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener('click', openModal)
})

document.querySelectorAll(".js-modal-add").forEach(a => {
    a.addEventListener('click', openAddModal)
})

document.querySelector('#back-modal-btn').addEventListener('click', backModal)


window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
    if (e.key ==='Tab' && modal !== null) {
        focusInModal(e)
    }
})