const conversionFactor = 0.01

const IMC_STATUS_DICT = {
    UNDERWEIGHT: "UNDERWEIGHT",
    REGULAR: "REGULAR",
    OVERWEIGHT: "OVERWEIGHT",
    OBESITY: "OBESITY",
}

function getClassificationDescription(classification) {
    return{
        [IMC_STATUS_DICT.UNDERWEIGHT]: "Você está abaixo do peso ideal.",
        [IMC_STATUS_DICT.REGULAR]: "Você está no peso ideal.",
        [IMC_STATUS_DICT.OVERWEIGHT]: "Você está acima do peso ideal.",
        [IMC_STATUS_DICT.OBESITY]: "Você está com obesidade.",
    }[classification] || "Classificação não registrada.";
    }
        
function classificateIMC(imc) {
    if (imc < 18.5){
        return IMC_STATUS_DICT.UNDERWEIGHT;
    } else if (imc <= 18.5 && imc < 25) {
        return IMC_STATUS_DICT.REGULAR;
    } else if (imc <= 30) {
        return IMC_STATUS_DICT.OVERWEIGHT;
    }else {
        return "OBESITY";
    }
}
function calculateIMC() {
    const name = document.getElementById("nameInput").value;
    const weight = parseFloat(document.getElementById("weightInput").value);
    const heigth = parseFloat(document.getElementById("heigthInput").value) * 0.01;

    if (!name || isNaN(weight) || isNaN(heigth)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const person = {
        name,
        weight,
        heigth
    };

    let imc = person.weight / (person.heigth * person.heigth);
    const classification = classificateIMC(imc);
    const classificationDescription = getClassificationDescription(classification);

    const resultText = `Olá, ${person.name}. Seu IMC é ${imc.toFixed(2)}. ${classificationDescription}`;
    document.getElementById("resultado").innerText = resultText;
    console.log(resultText);
}

