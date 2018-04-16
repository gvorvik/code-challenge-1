console.log('JS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery has arrived');
    generateButton();
};

function generateButton() {
    $('#generateButton').on('click', function() {
        console.log('Generate Button Clicked');
    });
}
