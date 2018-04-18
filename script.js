console.log('JS Sourced');
let clicks = 1;

$(document).ready(onReady);

function onReady() {
    console.log('JQuery has arrived');
    $('#generateButton').on('click', appendDiv);
    //descendant selector click handlers!!!
    $('body').on('click', '.deleteButton', deleteDiv);
    $('body').on('click', '.swapButton', swapColor);
};

function appendDiv() {
    $('body').append(`<div class="generatedDiv">
        <p>${clicks}</p>
        <button class="swapButton">Swap</button>
        <button class="deleteButton">Delete</button>
    </div>`);
    clicks++;
}

//function for deleting div
function deleteDiv() {
    $(this).parent().remove();
}

//function for swapping background color
function swapColor() {
    $(this).parent().toggleClass('generatedDiv');
}
