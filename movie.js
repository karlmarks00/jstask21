let searchButton = document.getElementById("searchButton")
let movieInput = document.getElementById('movieInput')
let movieInfo = document.getElementById("movieInfo")


//
let fav = document.querySelector('.fav')
let container = document.querySelector('.container')
let hulk = {
    title: 'Hulk',
    year: '2007',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
}
localStorage.setItem('movie1', JSON.stringify(hulk))

searchButton.addEventListener('click', () => {
    const movieName = movieInput.value;
    if (movieName) {
        fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=6ddf134a`)
        .then((response) => response.json())
        .then((data) => {
            if (data.Response == "True") {
                movieInfo.innerHTML = `
                    <img src='${data.Poster}'><img>
                    <h2>${data.Title}</h2>
                    <p>Год выпуска: ${data.Year}</p>
                    <p>Режиссер: ${data.Director}</p>
                    <p>Номинации: ${data.Awards}</p>
                    <p>Страна: ${data.Country}</p>
                    <p>Жанр: ${data.Genre}</p>
                    <p>Язык: ${data.Language}</p>
                    <p>Plot: ${data.Plot}</p>
                    <p>Год: ${data.Year}</p>
                    <p>Оценка IMDB: ${data.imdbRating}</p>
                `;
console.log(data);
            } else {
                movieInfo.innerHTML = "Фильм не найден";
            }
        })
        .catch((error) => {
            console.error(error);
            movieInfo.innerHTML = "Произошла ошибка";
        });
} else {
    movieInfo.innerHTML = "Пожалуйста, введите название фильма";
}
});



//
function addRemoveLocalStorage(obj, chboxId, i) {
    // console.log(chboxId);
    let chbox = document.getElementById(chboxId.id)
    if (chbox.checked) {
        localStorage.setItem(chboxId.id, JSON.stringify(obj))
        // console.log(obj.title);
        console.log('add');
    } else {
        localStorage.removeItem(chboxId.id)
        console.log('removed');
    }
}

function addRemoveLocalStorage(obj, chboxId, i) {
    // console.log(chboxId);
    let chbox = document.getElementById(chboxId.id)
    if (chbox.checked) {

        localStorage.setItem(chboxId.id, JSON.stringify(obj))
        addFavorite(obj, chboxId, i)
    } else {
        localStorage.removeItem(`chboxid${i}`)
        console.log(`chboxid${i}`);
        document.querySelector(`.imgId${i}`).remove()
    }
}

function addFavorite(obj, chboxId, i) {
    let test = JSON.parse(localStorage.getItem(chboxId.id)).Poster
    favorities.innerHTML += `
        <img src='${test}' class='imgId${i}' onclick='removeFavority(${i})'>
    `

}

function removeFavority(i) {
    console.log(`chbox${i}`);
    document.querySelector(`.imgId${i}`).remove()
    localStorage.removeItem(`chboxid${i}`)
}

function clearFavBtn() {
    localStorage.clear()
    favorities.innerHTML = ''
}

function mainF() {
    console.log('good');
    for (let is = 1; is < 10; is++) {
        console.log('');
        // `
        if (localStorage.getItem(`chboxid${is}`) == null) {
            // console.log(123123);
        } else {
            let dowPhoto = localStorage.getItem(`chboxid${is}`)
            let a = JSON.parse(dowPhoto)
            console.log(a);
            favorities.innerHTML += `
                <img class='imgId${is}' src=${JSON.stringify(a.Poster)} onclick="removeFavority(${is})">
            `
        }
    }
}
mainF()



//
function go() {
    let move1 = JSON.parse(localStorage.getItem('movie1'))
    console.log(move1.poster);
    for (let i = 0; i < localStorage.length; i++) {
    container.innerHTML = `
    <img src="${hulk.poster}" class='imgOne' alt="" >
    <input type='checkbox' class='chbox' id='chboxid${i}' onchange='addRemoveLocalStorage(${JSON.stringify(hulk)} , chboxid${i} , ${i})'> 
    `
    }

    console.log('good');
}
go()

function create() {
    console.log('run');
    for (let i = 0; i < 1; i++) {  //TODO Вместо 3 написать сколкько ключей в локальной хранилище
        console.log(`work${i}`);
        container.innerHTML += `
        <label for="chboxid${i}">
        <input type='checkbox' class='favoriteChbox' id='chboxid${i}' onchange='addRemoveLocalStorage(${JSON.stringify(hulk)} , chboxid${i} , ${i})'> <br>
        <img src="${hulk.poster}" class="poster" alt="">
        </label>
        `
    }
}

function addRemoveLocalStorage(obj, chboxId , i) {
    // console.log(chboxId);
    let chbox = document.getElementById(chboxId.id)
    if (chbox.checked) {

        localStorage.setItem(chboxId.id , JSON.stringify(obj))
        // console.log(obj.title);
        console.log('add');
        addFavorite(obj, chboxId , i)
    } else {
        localStorage.clear(chboxId.id)
        console.log('removed');
        document.querySelector(`.imgId${i}`).remove()
    }
}

function addFavorite(obj, chboxId , i) {
    console.log(`chboxid${i}`);
    console.log(2121);
    let test = JSON.parse(localStorage.getItem(chboxId.id)).poster
    console.log(test);
    fav.innerHTML = `
        <img src='${test}' class='imgId${i}'>
    `


    console.log('good');
}


create()

localStorage.setItem('test', 1);