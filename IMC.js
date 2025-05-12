function calcular (){
    let valorPeso = parseFloat(document.getElementById("peso").value);
    let valorAltura = parseFloat(document.getElementById("altura").value);
    let valorIMC = valorPeso / (valorAltura*valorAltura);

    if (valorIMC < 18.5) {
        document.getElementById("res_IMC").textContent = "Cuidado, você está abaixo do peso, seu IMC é " + valorIMC.toFixed(2) ;
    } else if (valorIMC < 25){
        document.getElementById("res_IMC").textContent = "Você está com peso normal, seu IMC é " + valorIMC.toFixed(2) ;
    } else if (valorIMC < 30){
        document.getElementById("res_IMC").textContent = "Você está com sobrepeso, seu IMC é " + valorIMC.toFixed(2) ;
    } else if (valorIMC < 35){
        document.getElementById("res_IMC").textContent = "Cuidado, você está om Obesidade de grau I, seu IMC é " + valorIMC.toFixed(2) ;
    }else if (valorIMC < 40){
        document.getElementById("res_IMC").textContent = "Cuidado, você está com obesidade de grau II, seu IMC é " + valorIMC.toFixed(2) ;
    }else{
        document.getElementById("res_IMC").textContent = "Cuidado, você está com Obesidade de grau III, seu IMC é " + valorIMC.toFixed(2) ;
    }
    
}