const submitForm = document.querySelector('.quiz-form');

const submitButton = document.querySelector('#submit-answer');

const outputEl = document.querySelector('#outputText');

const rightAnswer = ["90 deg", "Right Angled Triangle"];

function calculationArea(){
    let score = 0;
    let i = 0;

    const formStore = new FormData(submitForm);
    for(let value of formStore.values()){
        if(value === rightAnswer[i]){
            score += 1;
        }
        i += 1;
     }
     console.log(score);
     outputEl.innerText = "your score is :" + score;
}

submitButton.addEventListener('click', calculationArea);