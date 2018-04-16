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
        <button id="swapButton${clicks}">Swap</button>
        <button id="deleteButton${clicks}">Delete</button>
    </div>`);
    $(`#swapButton${clicks}`).on('click', swapColor);
    $(`#deleteButton${clicks}`).on('click', deleteDiv);
    clicks++;
}

//Swaps background colors of the div
function swapColor() {
    $(this).parent().toggleClass('generatedDiv');
}

//Deletes the div when delete button is pressed
function deleteDiv() {
    $(this).parent().remove();
}



