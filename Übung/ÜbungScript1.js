let names = ['Max Mustermann', 'Cora Mustermann', 'Ich Mustermann'];
let phoneNumbers = ['0151123456789', '0151987654321', '0151654321789'];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML ='';
    content.innerHTML = '<h1>My Contacts</h1>';

    content.innerHTML += `
    <div>
    <input placeholder="Name" id="name">
    <input placeholder="Telefon" id="phone">
    <button onclick="addContact()">Hinzufügen</button>
    </div>
    `;

    for(i = 0; i < names.length; i++) {
        const name =names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
        <div class="card">
        <b>Name: </b> ${name} <br>
        <b>Telefon:</b> ${phoneNumber} <br>
        <button onclick="deleteContact(${i})">Löschen</button>
        </div>
        `;
    }
}

function addContact() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    names.push(name.value);
    phoneNumbers.push(phone.value);
    render();
    save();
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();
}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);

    let phoneAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneAsText);
}

function load() {
    let namesAsText = localStorage.getItem('names');
    let phoneAsText = localStorage.getItem('phoneNumbers');

    if(namesAsText && phoneAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneAsText);
    }
}