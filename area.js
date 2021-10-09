const inputVal = document.querySelectorAll('.user-input');

const areaButton = document.querySelector('#areabtn');

const outputArea = document.querySelector('#area-output');

function userInput(a, b){
    const areaResult = ((a * b)/2);
    console.log(areaResult);
    return areaResult;
}

function calcArea(){
    const finalAns = userInput(Number(inputVal[0].value), Number(inputVal[1].value));

    outputArea.innerText = "The Area of the triangle is " + finalAns + " cm2";
}

areaButton.addEventListener('click', calcArea);