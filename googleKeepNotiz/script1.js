let noteTitel = [];
let notes = [];
let trashNoteTitle = [];
let trashNotes = [];

load();
loadTrash();

function render() {
    let note = document.getElementById('note');
    note.innerHTML = '';
    note.innerHTML += `
    <div class="notiz">
            <input placeholder="Titel" type="text" id="title"> 
            <textarea id="notize" placeholder="Deine Notiz bitte!" type="text" cols="0" rows="10"></textarea>
            <button class="noteButton" onclick="addNote()">Hinzufügen</button>
            </div>
    `;


    for (i = 0; i < noteTitel.length; i++) {
        const noteTitels = noteTitel[i];
        const notesEntry = notes[i];

        note.innerHTML += `
        <div class="addNote">
        <a>${noteTitels} </a>  <br>
        <a>${notesEntry} </a>  <br>
        <br>
        <button class="deleteButton" onclick="deleteNotize(${i})">Löschen</button> <br>
        </div>
        `;
    }
    
}

function addNote() {
    let title = document.getElementById('title').value;
    let notize = document.getElementById('notize').value;

    if(title.length == 0) {
        alert ('Bitte geben Sie einen Titel ein')
    } else if(notize.length == 0) {
        alert ('Bitte geben Sie eine Notiz ein')
    } else{

    noteTitel.push(title);
    notes.push(notize);
    render();}
    save();
   
}

function deleteNotize(i) {
    trashNoteTitle.push(noteTitel[i]);
    trashNotes.push(notes[i]);

    noteTitel.splice(i, 1);
    notes.splice(i, 1);

    render();
    save();
    saveTrash();
    
}

function save() {
    let noteTitelAsText = JSON.stringify(noteTitel);
    localStorage.setItem('noteTitel', noteTitelAsText);

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes', notesAsText);
}

function load() {
    let noteTitelAsText = localStorage.getItem('noteTitel');
    let notesAsText = localStorage.getItem('notes');

    if (noteTitelAsText && notesAsText) {

        noteTitel = JSON.parse(noteTitelAsText);
        notes = JSON.parse(notesAsText);
    }
}

function saveTrash() {
    let trashNoteTitleAsText = JSON.stringify(trashNoteTitle);
    localStorage.setItem('trashNoteTitle', trashNoteTitleAsText);

    let trashNotesAsText = JSON.stringify(trashNotes);
    localStorage.setItem('trashNotes', trashNotesAsText);
}

function loadTrash() {
    let trashNoteTitleAsText = localStorage.getItem('trashNoteTitle')
    let trashNotesAsText = localStorage.getItem('trashNotes');

    if(trashNoteTitleAsText && trashNotesAsText) {

        trashNoteTitle = JSON.parse(trashNoteTitleAsText);
        trashNotes = JSON.parse(trashNotesAsText);


    }
}

function trashRender() {
    let tresh = document.getElementById('tresh');
    tresh.innerHTML = '';

    for(let x = 0; x < trashNoteTitle.length; x++) {
        const trashNoteTitles = trashNoteTitle[x];
        const trashNotess = trashNotes[x];

        tresh.innerHTML += `
        <div>
        <a>${trashNoteTitles}</a> <br>
        <a>${trashNotess}</a> <br>
        <button onclick="deleteTrash(${x})">Löschen</button>
        </div>
        
        `;
    }
}

function deleteTrash(x) {
    trashNoteTitle.splice(x, 1);
    trashNotes.splice(x, 1);
    
    trashRender();
    saveTrash();
}