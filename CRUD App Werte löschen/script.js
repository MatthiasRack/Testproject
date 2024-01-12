let names = ['Erica Mustermann', 'John Doe'];
let phoneNumbers = ['0151987654321', '0151123456789'];

function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML += `<h1>My Contacts</h1>`;

  content.innerHTML += `
      <div>
      <input placeholder="Name" id="name">
      <input placeholder="Telefon" id="phone">
      <button onclick="addContact()">Hinzufügen</button>
     
      </div>
      `;

  for (i = 0; i < names.length; i++) {
    const name = names[i];
    const phoneNumber = phoneNumbers[i];

    content.innerHTML += `
        <div class="card">
          <b>Name: </b> ${name} <br>
          <b>Telefon: </b> ${phoneNumber} <br>
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
}

function deleteContact(i) {
  names.splice(i, 1);
  phoneNumbers.splice(i, 1);
  render();
}
