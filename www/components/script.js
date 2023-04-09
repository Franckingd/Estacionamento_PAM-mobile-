let modeloCarro = "";
let placa = "";
let hora = 0;
let pagamento = 0;

if (localStorage.getItem("config") === null) {
    let config = {cont: 1}
    localStorage.setItem('config' , JSON.stringify(config));
}

let configDados = localStorage.getItem('config'); 
let configJson = JSON.parse(configDados); 
let cont = configJson.cont;


function register(){
    placa = document.getElementById('placa').value;
    let vlModelo = document.getElementById('modelo').value;
    hora = document.querySelector('input[name="horas"]:checked').value;
    pagamento = (vlModelo * hora);
    let msg = document.getElementById('msg');

    if(vlModelo == 3.50){
        modeloCarro = "Subcompacto";
    }else if(vlModelo == 4.00){
        modeloCarro = "Compacto";
    }else if(vlModelo == 4.50){
        modeloCarro = "Hatch";
    }else if(vlModelo == 5.00){
        modeloCarro = "Sedan";
    }else if(vlModelo == 6.00){
        modeloCarro = "SUV";
    }else if(vlModelo == 7.00){
        modeloCarro = "Pick-up";
    }

    if(modeloCarro == "" || placa == "" || hora == 0 || pagamento == 0){
        msg.innerHTML = "Preencha todos os dados para registrar uma vaga!";
    }else{        
        let text = "Modelo: "+modeloCarro+"<br>Placa: "+placa+"<br>Horas pagas: "+hora+"<br>Valor a pagar: "+pagamento.toFixed(2);
        msg.innerHTML = text;

        let btnConfirm = document.getElementById('confirmacao');
        btnConfirm.style.display = "inline-block";
    }
    let configDados = localStorage.getItem('config');
    let configJson = JSON.parse(configDados);
    let cont = configJson.cont;

    for(let c = 1; c <= cont; c++){
        let reg = localStorage.getItem(c);
        let registro = JSON.parse(reg);
        let placaReg = registro.placa;

        if(placaReg == placa){
            alert("Veículo já está cadastrado em uma vaga!");
            // return;
            window.location.href = "index.html";
        }
    }
}
function ConfirmaRegistro(){
    let dados = document.getElementById('dados');
    dados.style.display = "none";

    alert("Confirmado!");

    let btnConfirm = document.getElementById('confirmacao');
    btnConfirm.style.display = "none";

    let registro = {codigo: cont, placa: placa, modelo: modeloCarro, horas: hora, valor: pagamento.toFixed(2)}
    localStorage.setItem(cont , JSON.stringify(registro));
    
    cont++;
    let config = {cont: cont}
    localStorage.setItem('config' , JSON.stringify(config));

    let novaCompra = document.getElementById('novaCompra');
    novaCompra.style.display = "inline-block";
}
function newRegistro(){
    alert("Os dados dos campos serão limpos!");

    let dados = document.getElementById('dados');
    dados.style.display = "inline-block";

    let novaCompra = document.getElementById('novaCompra');
    novaCompra.style.display = "none";

    document.getElementById('placa').value = "";
    document.getElementById('modelo').value = 0;
    document.getElementById('hora1').checked = true;
    document.getElementById('msg').innerHTML = "";
}

