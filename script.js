console.log('JS Sourced');
let clicks = 1;

$(document).ready(onReady);

function onReady() {
    console.log('JQuery has arrived');
    $('#generateButton').on('click', appendDiv);
};

function appendDiv() {
    $('body').append(`<div>
    <p>${clicks}</p>
    <button>Swap</button>
    <button>Delete</button>
    </div>`);
    clicks++;
}



