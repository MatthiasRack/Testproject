let titleNote = [];
let notesDescription = [];
let trashNote = [];


load();

function render() {
    let note = document.getElementById('note');
    note.innerHTML = '';

    note.innerHTML += `
    <div class="inputFields">
    <input id="title" class="input" placeholder="Titel..." type="text">
    <textarea id="notes" type="text" placeholder="Hallo" cols="0" rows="0">
        </textarea>
    <div class="buttonContainer">
        <button class="addButton" onclick="addNote()">Hinzufügen</button>
    </div>
    </div>

    `;

    for(i = 0; i< titleNote.length; i++) {
        const titleNotes = titleNote[i];
        const noteDescript = notesDescription[i];

        note.innerHTML += `
        <div class="notes">
            <p><b>${titleNotes}</b></p> <br>
            <p>${noteDescript}</p>
            <button onclick="deleteNotes(${i})">Notiz entfernen!</button> 
        </div>
        `; 
    }
}

    function addNote() { // Hinzufügen von Titel sowie Notizen!
        let title = document.getElementById('title');
        let notes = document.getElementById('notes');

        titleNote.push(title.value);
        notesDescription.push(notes.value);
        render();
        save();
    }

    function deleteNotes(i) {  // entfernen von Titel und Notizen!
        titleNote.splice(i,1);
        notesDescription.splice(i, 1);

        render();
        save();
    }

    function save() { // speichert die Variablen
        let titleNoteAsText = JSON.stringify(titleNote);
        localStorage.setItem('titleNote', titleNoteAsText);

        let notesDescriptionAsText = JSON.stringify(notesDescription);
        localStorage.setItem('notesDescription', notesDescriptionAsText);
    }

    function load() { // 
        let titleNoteAsText = localStorage.getItem('titleNote');
        let notesDescriptionAsText = localStorage.getItem('notesDescription');

        if(titleNoteAsText && notesDescriptionAsText) {
        titleNote = JSON.parse(titleNoteAsText);
        notesDescription =JSON.parse(notesDescriptionAsText);
    }
    }

    function addGarbage() {
        let gargabe = document.getElementById('garbage');

    }