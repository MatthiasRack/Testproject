let posts = [
    {
        "authorImg": "./img/1.jpg",
        "author": "Tagesschau",
        "image": "./img/Tagesschau.jpg",
        "description": "",
        "location": "Berlin",
        "comment": [],
        "likes": 15,
        "liked": false,
        "heartcolor": "./img/herz.png",
    },
    {
        "authorImg": "./img/2.jpg",
        "author": "amazon",
        "image": "./img/Amazon.png",
        "description": "",
        "location": "Hamburg",
        "comment": [],
        "likes": 12985,
        "liked": false,
        "heartcolor": "./img/herz.png",
    }, {
        "authorImg": "./img/3.jpg",
        "author": "Nike",
        "image": "./img/nike.jpg",
        "description": "Hinter dem Nike-Logo versteckt sich Mythologie Stattdessen ist <br> das Nike-Logo den Flügeln der Siegesgöttin und Namensgeberin der Brand, <br> Nike nachempfunden. Die Göttin Nike entspringt der griechischen Mythologie. <br>Ihr römisches Pendant ist Victoria, quasi die Namensgeberin unseres Victory-Zeichens.",
        "location": "Beaverton, Oregon",
        "comment": [],
        "likes": 153698,
        "liked": false,
        "heartcolor": "./img/herz.png",
    }, {
        "authorImg": "./img/4.jpg",
        "author": "abaut-you",
        "image": "./img/Aboutyou.png",
        "description": "",
        "location": "New York",
        "comment": [],
        "likes": 56977,
        "liked": false,
        "heartcolor": "./img/herz.png",
    }, {
        "authorImg": "./img/5.jpg",
        "author": "underamor",
        "image": "./img/Under_aarmour.png",
        "description": "",
        "location": "Boston",
        "comment": [],
        "likes": 9558974,
        "liked": false,
        "heartcolor": "./img/herz.png",
    }
];
load();

function render() {
    let postconatainer = document.getElementById('postconatainer');
    postconatainer.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        postconatainer.innerHTML += `
        <div class="postContainer">

            
            <div class="postMain">
            <div class="menu">
            <div><img class="upperPicture" src="${post['authorImg']}"></div>
            <div class="author"><h2>${post['author']}</h2></div>
            </div>
            <div><img class="picture" src="${post['image']}"></div>
            <div class="postIcon">
                <div class="postIcons">
                    <img class="postIconsImg" id="heartPost${i}" src=" " alt="herz" onclick="like(${i})" >
                    <img class="postIconsImg" src="./img/comment.png" alt="Kommentar">
                    <img class="postIconsImg" src="./img/nachrichten.png" alt="Nachrichten">
                </div>
                     <div>
                        <img class="saveIcon" src="./img/speichern.png" alt="speichern">
                    </div>
            </div>
            <div>
            <p id="quantityLikes${post['likes']}">Gefällt: ${post['likes']}</p>
            </div>
            <div class="margin"><a>${post['description']}</a></div
            <div><a>${post['location']}</a></div>
            <div class="margin" id="addpost${i}"> <input class="inputPost" id="input${i}" placeholder="Kommentar. . . . "><button class="buttonPost" onclick="addPost(${i})">posten</button> </div>
            </div>
        </div>
        `;

        let addpost = document.getElementById(`addpost${i}`);
        for (let j = 0; j < post['comment'].length; j++) {
            const comments = post['comment'][j];
            addpost.innerHTML += `<div>${comments}</div>`;
        }

        if (post['liked']) {
            document.getElementById(`heartPost${i}`).classList.add("heartred");
        } else {
            document.getElementById(`heartPost${i}`).classList.add("heart");
        }
    }

}

function addPost(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comment'].push(input.value);

    render();
    save();
}


function like(i) {
    let currentLike = posts[i].likes;
    let liked = posts[i].liked;
    let heartColor = document.getElementById(`heartPost${i}`);
    if (!liked) {
        currentLike++;
        posts[i].liked = true;
        heartColor.classList.add("heart");
    } else {
        currentLike--;
        posts[i].likes = currentLike;
        heartColor.classList.remove("heartred");
        posts[i].liked = false;
    }

    posts[i].likes = currentLike;
    render();
}

function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);

}

function load() {
    let postsAsText = localStorage.getItem('posts');

    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
}
