console.log('JS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery has arrived');
    $('#generateButton').on('click', appendDiv);
};

function appendDiv() {
    $('body').append(`<div></div>`);
}



