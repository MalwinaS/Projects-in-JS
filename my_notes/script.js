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

const checkColor = note => {
    switch(selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(60,179,113)'
            break
        case 'Praca':
            note.style.backgroundColor = 'rgb(0,0,255)'
            break
        case 'Dom':
            note.style.backgroundColor = 'rgb(255,165,0)'
            break
    }
}

const saveNote = () => {

    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)

    newNote.innerHTML = `
    <div class="note-item">
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
             <button class="delete-note" onclick="removeNote(${cardID})">
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

    checkColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

const removeAllNotes = () => {
    noteArea.textContent = ''
}

const removeNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}

addBtn.addEventListener('click', createNote)
saveBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', cancelNote)
removeBtn.addEventListener('click', removeAllNotes)
