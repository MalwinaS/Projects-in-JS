const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove-all')

const noteArea = document.querySelector('.note-area')
const deleteNoteBtn = document.querySelector('.delete-note')
const noteTitle = document.querySelector('.note-title')

const popup = document.querySelector('.popup')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const error = document.querySelector('.error')
const note = document.querySelector('#note')
const category = document.querySelector('#category')



const createNote = () => {
    popup.style.display = 'flex'
}

const addNote = () => {
    if(note.value != '' && category.value != '') {
        console.log('buu')
    } else {
        error.style.visibility = 'visible'
    }
}

const cancelNote = () => {
    popup.style.display = 'none'
}

// const saveNote = () => {
//     popup.style.display = 'none'
//     const newNote = document.createElement('div')
//     newNote.classList.add('note')

//     noteArea.appendChild(newNote)
//     // category.value = noteTitle
    
// }

addBtn.addEventListener('click', createNote)
saveBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', cancelNote)
saveBtn.addEventListener('click', saveNote)