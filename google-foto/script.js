let images = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg', 
'./images/image5.jpg', './images/image6.jpg', './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', 
'./images/image10.jpg', './images/image11.jpg', './images/image12.jpg', './images/image13.jpg', './images/image14.jpg', './images/image15.jpg', './images/image16.jpg', 
'./images/image17.jpg', './images/image18.jpg', './images/image19.jpg'];
let imagesIndex = 0;

function load() {
    let image = document.getElementById('image');
    image.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        let imageFirst = images[i];
        image.innerHTML += /*html*/`
         <img id="image${i}" class="images" onclick="imgPresent(${i})" src="${imageFirst}" alt="Image ${i + 1}">
        `;
    }
}

function imgPresent(i) {
    let img = images[i];
    imagesIndex = i;

    const menu = document.getElementById('presentImg');
    const menuImage = document.getElementById('menuImage');
    menu.style.display = 'flex';
    menu.innerHTML = /*html*/ `
    <span class="close" onclick="closeImg()">close</span>
            
           
            <img class="arrow" onclick="backIMG()" src="./images/links.png">
            <img src="${img}"class="menu-content" id="menuImage">
            <img class="arrow" onclick="nextIMG()" src="./images/rechts.png">`;  
}

function closeImg() {
    const menu = document.getElementById('presentImg');
    menu.style.display = 'none';
}

function backIMG() {
    imagesIndex--;

    if (imagesIndex < 0) {
        imagesIndex = images.length - 1;
    }

    imgPresent(imagesIndex);
}

function nextIMG() {
    imagesIndex++;

    if (imagesIndex >= images.length) {
        imagesIndex = 0;
    }

    imgPresent(imagesIndex);
}
