let pictures = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg', './images/image5.jpg', './images/image6.jpg', './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', './images/image10.jpg', './images/image11.jpg', './images/image12.jpg']
let pictureIndex = 0; 

function load() {
    for  (i = 0; i < pictures.length; i++) {
        document.getElementById('gallery').innerHTML += /*html*/`
            <div onclick ="fullscreen(${i})" class='imagebox'><img src='${pictures[i]}'></div>;
        ` 
    }
}


function fullscreen(i) {
    
    let picture = pictures[i];
    pictureIndex = i; 
    
    let fullscreenImg = document.getElementById('fullscreenImg'); 
    let gallery = document.getElementById('gallery');
    let body = document.getElementById('body');
    gallery.classList.add('galleryNoDisplay');
    body.classList.add('black');
    fullscreenImg.innerHTML = ''; 
    
    fullscreenImg.innerHTML += /*html*/` <img class = "arrow" onclick="previousPicture()" src ="img/icons8-previous-48.png"> 
    <img onclick ="closeFullscreen()" class ="close" src= "img/icons8-close-64.png"> 
    <img class= "full" src="${picture}"> <img class = "arrow" onclick="nextPicture()" src ="img/icons8-next-48.png">`;
  }

  function closeFullscreen() {
    
    let fullscreenImg = document.getElementById('fullscreenImg'); 
    let gallery = document.getElementById('gallery');
    let body = document.getElementById('body');
    
    gallery.classList.remove('galleryNoDisplay');
    body.classList.remove('black');
    
    fullscreenImg.innerHTML = '';
}

function nextPicture() {
    
    pictureIndex++; 

    if (pictureIndex >= pictures.length) { pictureIndex = 0; 

    }

    fullscreen(pictureIndex);

    
}
        



function previousPicture() {

    pictureIndex--; 

    if (pictureIndex < 0) { pictureIndex = pictures.length - 1; 

    }

    fullscreen(pictureIndex);

    
}