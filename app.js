const input = document.querySelectorAll('.angle');

const triangleBtn = document.querySelector('#trianglebtn');

const outputEl = document.querySelector('#output');

function sumOfAllAngles(angle1, angle2, angle3){
   
        const sumOfAngles = angle1 + angle2 + angle3;
        return sumOfAngles;   
}



function triangleAngleCalc(){
    if(Number(input[0].value) > 0 && Number(input[1].value) > 0 && Number(input[2].value) > 0){
    const sumOfTriangles = sumOfAllAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
        if(sumOfTriangles === 180){
            outputEl.innerText = "It is a triangle because sum of angles of triangles is " + sumOfTriangles + " deg.";
        }else{
            outputEl.innerText = "This will not form Triangles as the sum of triangles is not equal to 180 deg.";
        }

    }else{
        outputEl.innerText = "PLEASE ENTER POSITIVE VALUE";
    }
}
triangleBtn.addEventListener('click', triangleAngleCalc);


