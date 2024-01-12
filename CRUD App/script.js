let names = ['Erica Mustermann', 'John Doe'];
let phoneNumbers = ['0151987654321', '0151123456789'];

function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML += `<h1>My Contacts</h1>`;

  for (i = 0; i < names.length; i++) {
    const name = names[i];
    const phoneNumber = phoneNumbers[i];

    content.innerHTML += `
      <div class="card">
        <b>Name: </b> ${name} <br>
        <b>Telefon: </b> ${phoneNumber} <br>
        </div>
      `;
  }


}