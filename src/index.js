
document.addEventListener('DOMContentLoaded', () => {
    fetchImgs(URL);
    addEventToForm();
})

const ramenDiv = document.getElementById('ramen-menu');
const URL = "http://localhost:3000/ramens";
const imgDiv = document.getElementById('ramen-menu');
const imgDisplay = document.querySelector('.detail-image');
const nameDisplay = document.querySelector('.name');
const commentDisplay = document.getElementById('comment-display')
const ratingDisplay = document.getElementById('rating-display')
const restaurantDisplay = document.querySelector('.restaurant');
const form = document.getElementById('new-ramen');

function fetchImgs(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => render(json))
}

function render(ramenData) {
    ramenData.forEach((ramen) => {
        addRamenToDom(ramen.image, ramen.name, ramen.restaurant, ramen.rating, ramen.comment);
    })
};

function addRamenToDom(image, name, restaurant, rating, comment) {
    const img = document.createElement('img');
    img.src = image;
    imgDiv.appendChild(img);
    img.addEventListener('click', (e) => {
        imgDisplay.src = e.target.src;
        nameDisplay.innerText = name;
        restaurantDisplay.innerText = restaurant;
        ratingDisplay.innerText = rating;
        commentDisplay.innerText = comment;
    });
}

function addEventToForm() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newImg = document.createElement('img');
        const newName = document.createElement('h2');
        const newRestaurant = document.createElement('h3');
        const newRating = document.createElement('h3');
        const newComment = document.createElement('h3');


        newName.innerText = e.target[0].value;
        newRestaurant.innerText = e.target[1].value;
        newImg.src = e.target[2].value;
        newRating.innerText = e.target[3].value;
        newComment.innerText = e.target[4].value;

        let myName = newName.innerText = e.target[0].value;
        let myRest = newRestaurant.innerText = e.target[1].value;
        let myImg = newImg.src = e.target[2].value;
        let myRating = newRating.innerText = e.target[3].value;
        let myComment = newComment.innerText = e.target[4].value;

        ramenDiv.appendChild(newImg);
      
        addRamenToDom(myImg, myName, myRest, myRating, myComment);
    })
}
