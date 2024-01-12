let noteTitel = ['Termin'];
let notes = ['Basketball'];
load();

function render() {
    let note = document.getElementById('note');
    note.innerHTML = '';
    note.innerHTML += '<h1>Notizen</h1>';

    note.innerHTML += `
    <div class="mainContainer" >
        <div  class="trash">
        <img src="mülltone.jpg"/>
        <a>Papierkorb</a>
        </div>
                <div class="notize">
                    <div class="addNote">
                        <input class="inputField" placeholder="Titel" id="titel">
                        <textarea id="entry" type="text" placeholder="Notiz" cols="30" rows="10"></textarea>
                        <div class="addButton">
                         <button onclick="addNotes()">Hinzufügen</button>
                         </div>

                         <div id="notesresult">

                         </div>

                     </div>
                     
                    
                </div>    
    </div>
    `;
    renderNotes();
}

function renderNotes() {
    const notesResult = document.getElementById('notesresult');
    notesResult.innerHTML += ``;

    for(i = 0; i < noteTitel.length; i++) {
        const notesTitle = noteTitel[i];
        const notesEntry = notes[i];

        note.innerHTML += `
        <div class="adsNotes">
        <b> ${notesTitle}</b> <br>
        <b> ${notesEntry}</b> <br>
        <div class="adsNotesDelete"><img onclick="deleteNotise(${i})" src="mülltone.jpg"/></div>
        </div
        `;
    }
    
}

function addNotes() {
    let titel = document.getElementById('titel');
    let entry = document.getElementById('entry');

    noteTitel.push(titel.value);
    notes.push(entry.value);
    render();
    save();
}

function deleteNotise(i) {
    noteTitel.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
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

    if(noteTitelAsText && notesAsText) {
        noteTitel = JSON.parse(noteTitelAsText);
        notes = JSON.parse(notesAsText);
    }
}