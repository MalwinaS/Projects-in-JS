const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove-all')

const noteArea = document.querySelector('.note-area')
const deleteNoteBtn = document.getElementsByClassName('delete-note')
const noteTitle = document.querySelector('.note-title')

const popup = document.querySelector('.popup')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const error = document.querySelector('.error')
const note = document.querySelector('#note')
const category = document.querySelector('#category')

let selectedValue
let cardID = 0

const createNote = () => {
    popup.style.display = 'flex'
}

const addNote = () => {
    if(note.value !== '' && category.options[category.selectedIndex].value !== 0) {
        saveNote()
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}

const cancelNote = () => {
    popup.style.display = 'none'
    error.style.visibility = 'hidden'
    note.value = ''
    category.selectedIndex = 0
}

const saveNote = () => {

    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)

    newNote.innerHTML = `
    <div class="note-item">
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
             <button class="delete-note">
                <i class="fas fa-times icon"></i>
            </button>
        </div>
        <div class="note-body">
            ${note.value}
        </div>
    </div>`

    noteArea.appendChild(newNote)
    cardID++

    error.style.visibility = 'hidden'
    note.value = ''
    category.selectedIndex = 0
    popup.style.display = 'none'
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

addBtn.addEventListener('click', createNote)
saveBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', cancelNote)
