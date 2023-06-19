
var number = 0;
var string = 'The script has loaded.';

console.log(string);

function changeNumber() {
    document.getElementById('header-number').innerHTML = number;
    console.log('Number: ' + number);
}

function increment() {
    ++number;
    changeNumber();
}

function decrement() {
    --number;
    changeNumber();
}
function makeCircle() {
    console.log('Changing to circle...');
    document.getElementById('block').style.backgroundColor = 'crimson';
    document.getElementById('block').style.borderRadius = '100%';
}

function makeSquare() {
    console.log('Changing to square...');
    document.getElementById('block').style.backgroundColor = 'gray';
    document.getElementById('block').style.borderRadius = '2%';
}


function doSomething() {
    console.log('Shape clicked...');

    if (document.getElementById('block').style.borderRadius == "100%") {
        makeSquare();
    } else {
        makeCircle();
        console.log(document.getElementById('block').style.borderRadius)
    }

    // document.getElementById('block').style.backgroundColor = 'crimson';
    // document.getElementById('block').style.borderRadius = '100%';
}