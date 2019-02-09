const $ = require("jquery");
require("materialize-css");

function checkConnexion(){
    if(navigator.onLine === false){
        alert("vous êtes deconneté, veuillez vous reconnecter pour continuer.");
    }
}

$(document).ready(() =>{
    const previousButton = $('#previous');
    const nextButton = $('#next');
    const post = $('.post');

    let id = 1;

    $.getJSON(`https://jsonplaceholder.typicode.com/photos/${id}`, (data) => {
        post.html(
         `
            <div class="row">
                <div class="col s12">
                    <div class="card">
                        <div class="card-image">
                            <img src="${data.thumbnailUrl}">
                            <span class="card-title">${data.id}</span>
                        </div>
                        <div class="card-content">
                            <p>${data.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
        );

    })

    previousButton.on('click', () => {
        checkConnexion();
        console.log("prev : "+id);
        if(id===1){
            alert('Plus de post précédent, cliquez sur suivant.');
            return
        }
        id=id - 1;
        $.getJSON(`https://jsonplaceholder.typicode.com/photos/${id}`, (data) => {
            post.html(
            `
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                                <img src="${data.thumbnailUrl}">
                                <span class="card-title">${data.id}</span>
                            </div>
                            <div class="card-content">
                                <p>${data.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            );

        })
    })

    nextButton.on('click', () => {
        checkConnexion();
        console.log("next : "+id);
        id=id + 1;
        $.getJSON(`https://jsonplaceholder.typicode.com/photos/${id}`, (data) => {
            post.html(
             `
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                                <img src="${data.thumbnailUrl}">
                                <span class="card-title">${data.id}</span>
                            </div>
                            <div class="card-content">
                                <p>${data.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            );

        })
    })
    
})


