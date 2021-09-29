const inputArea = document.querySelectorAll('.input-text');

const hypoButton = document.querySelector('#hypotenusbtn');

const output = document.querySelector('#output-text');

function sumOfSquare(a, b) {
    const userValue = Math.pow(a, 2) + Math.pow(b, 2);

    const hypoValue = Math.sqrt(userValue);
    return hypoValue;
}



function hypotenusCalc() {

    const result = sumOfSquare(Number(inputArea[0].value), Number(inputArea[1].value));

    output.innerText = "The hypotenus of the triangle is " + result;
}


hypoButton.addEventListener('click', hypotenusCalc);