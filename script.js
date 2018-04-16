console.log('JS Sourced');
let clicks = 1;

$(document).ready(onReady);

function onReady() {
    console.log('JQuery has arrived');
    $('#generateButton').on('click', appendDiv);
};

function appendDiv() {
    $('body').append(`<div class="generatedDiv">
        <p>${clicks}</p>
        <button class="swapButton">Swap</button>
        <button class="deleteButton">Delete</button>
    </div>`);
    clicks++;
    $('.deleteButton').on('click', deleteDiv);
}

//Deletes the div when delete button is pressed
function deleteDiv() {
    $(this).parent().remove();
}



