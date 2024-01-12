let menue = [
    {
        "name": "Cheesburger",
        "description": "150g Rinderhackfleisch, Salat, Gewürzgurken",
        "price": 10.90,
    },
    {
        "name": "Salami Pizza",
        "description": "100g Salami, Mozzarellakäse",
        "price": 11.90,
    },
    {
        "name": "Pizza Margharita",
        "description": "Käse, Tomatensoce",
        "price": 7.90,
    }
];
let dishesBasket = [];
let priceBasket = [];
let amountBasket = [];


function createHtml(order, i) {
    // HTML-Struktur als String speichern
    let htmlString = `
    <div class="food">
      <div class="addplusBasket">
        <h2>${order['name']}</h2>
        <a>${order['description']}</a> <br>
        <a>${order['price'].toFixed(2)} €</a><br>
      </div>
      <div class="plusBasket">
        <div class="addplusBasket plus">
          <img class="cursor" src="./images/plus.png" id="product" onclick="addOrder(${i})">
        </div>
      </div>
    </div>
    `;
    // HTML-String zurückgeben
    return htmlString;
}

function render() {
    let menu = document.getElementById('menu');
    menu.innerHTML += '';

    for (let i = 0; i < menue.length; i++) {
        const order = menue[i];
        // createHtml-Funktion aufrufen und Ergebnis an menu-Element anhängen
        menu.innerHTML += createHtml(order, i);
    }
}


function addOrder(i) {
    let names = menue[i]['name'];
    let prices = menue[i]['price'];
    let index = dishesBasket.indexOf(names);

    if (index == -1) {
        dishesBasket.push(names);
        priceBasket.push(prices);
        amountBasket.push(1);
    }
    else {
        amountBasket[index]++;
    }

    renderBasket();
}

function renderBasket() {
    let basket = document.getElementById('basket');
    let emptyContainer = document.getElementById('emptyContainer');
    basket.innerHTML = ``;
    for (let i = 0; i < dishesBasket.length; i++) {
        basket.innerHTML += shoppingBasket(i);
    }
    if (dishesBasket.length < 1) {
        emptyContainer.classList.remove('d-none');
    } else {
        emptyContainer.classList.add('d-none');
        basket.innerHTML += generateShoppingBasket();
        calculator();
    }
}

function shoppingBasket(i) {
    const dish = dishesBasket[i];
    //console.log(dish);
    const amount = amountBasket[i];
    //console.log(amount);
    return `
        <div class="stylefood">
        <div>
        ${amount} ${dish} 
        </div>
        <div>
        <img src="./images/plus.png" class= "plusminus" onclick="add_amount(${i})">
       
        <img src="./images/minus.png" class="plusminus" onclick="remove_amount(${i})"
        </div>
    
       </div>`;

}

function generateShoppingBasket() {
    return `
    <div>
        <div class="outBasket">
            <div class="LeftOutBasket">
                <span>Zwischensumme</span><br>
                <span>Lieferkosten</span><br>
                <span>Gesamt</span>
            </div>
            <div class="RightOutBasket">
                <span id="berechnen"></span><br>
                <span id="totalSum"></span><br>
             <span id="lieferK"></span>
            </div>
        </div>
        <div class="orderButton">
            <buttun oncklic="order()">Bestellen</button>
        </div>
    </div>
`;
}

function calculator() {
    let sum = 0;
    berechnen = document.getElementById('berechnen');
    lieferK = document.getElementById('lieferK');
    totalSum = document.getElementById('totalSum')
    for (i = 0; i < priceBasket.length; i++) {
        sum += priceBasket[i] * amountBasket[i];
    }
    berechnen.innerHTML = `<div class="outBasketSum">${(sum).toFixed(2)} € </div>`; //Zwischensumme
    // Anweisungen für den Fall sum >= 100 zuerst ausführen
    lieferK.innerHTML = `<div class="outBasketSum">${(sum).toFixed(2)} € </div>`;
    totalSum.innerHTML = `<div class="outBasketSum">0.00 € </div>`;

    if (sum < 100) {
        totalSum.innerHTML = `<div class="outBasketSum">1.50 € </div>`; //Lieferkosten
        lieferK.innerHTML = `<div class="outBasketSum">${(sum + 1.50).toFixed(2)} € </div>`; //Gesamt
    }
}

// Anzahl zufügen
function add_amount(i) {
    amountBasket[i]++;
    renderBasket();
}

// Anzahl abziehen
function remove_amount(i) {
    if (amountBasket[i] <= 1) {
        dishesBasket.splice(i, 1)
        priceBasket.splice(i, 1)
    }
    else {
        amountBasket[i]--;
    }
    renderBasket();
}

function hidemenu() {
    let rightDiv = document.getElementById('rightDiv');

    rightDiv.style.display = 'flex';
    rightDiv.classList.add('responsivBasket');
}

function closed() {
    document.getElementById('rightDiv').style.display = 'none';

}
