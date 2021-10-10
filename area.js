const inputVal = document.querySelectorAll('.user-input');

const areaButton = document.querySelector('#areabtn');

const outputArea = document.querySelector('#area-output');

function userInput(a, b){
    
        const areaResult = ((a * b)/2);
        console.log(areaResult);
        return areaResult;
}

function calcArea(){
    if (Number(inputVal[0].value) > 0 && Number(inputVal[1].value) > 0){
        const finalAns = userInput(Number(inputVal[0].value), Number(inputVal[1].value));
        outputArea.innerText = "The Area of the triangle is " + Math.abs(finalAns) + " cm2";
    }else{
        outputArea.innerText = "PLEASE ENTER POSITIVE VALUE";
    }    
}

areaButton.addEventListener('click', calcArea);