const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

let notes = [];

// Función para renderizar la lista de notas
function renderNotes() {
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('li');
        noteItem.classList.add('note-item');
        
        const noteText = document.createElement('input');
        noteText.type = 'text';
        noteText.value = note;
        noteText.classList.add('note-text');
        noteText.readOnly = true;

        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editNote(index, noteText);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteNote(index);

        noteItem.appendChild(noteText);
        noteItem.appendChild(editBtn);
        noteItem.appendChild(deleteBtn);
        noteList.appendChild(noteItem);
    });
}

// Función para agregar una nota
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        noteInput.value = '';
        renderNotes();
    }
}

// Función para editar una nota
function editNote(index, noteTextElement) {
    if (noteTextElement.readOnly) {
        noteTextElement.readOnly = false;
        noteTextElement.focus();
    } else {
        notes[index] = noteTextElement.value.trim();
        noteTextElement.readOnly = true;
        renderNotes();
    }
}

// Función para eliminar una nota
function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

// Event listeners
addNoteBtn.addEventListener('click', addNote);
noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
});
