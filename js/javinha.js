// function  serve para ativar o recebimento de informações 
function calcular(){
  
    var nome = document.getElementById("cxnome").value;
    var placa = document.getElementById("cxplaca").value;
    var carro = document.getElementById("cxcarro").value;
    var dias = document.getElementById("cxdias").value;
    var valor = document.getElementById("cxvalor").value;
    
    var bruto=parseFloat(dias)*parseFloat(valor);
     
    document.getElementById("cxnome2").value = nome;
    document.getElementById("cxplaca2").value = placa; 
    document.getElementById("cxcarro2").value = carro;
    document.getElementById("cxdias2").value = dias;
    document.getElementById("cxvalor2").value = valor;
    document.getElementById("cxbruto").value = bruto; 
    

    
    if (bruto >150) {
        var total = bruto - (bruto*0.10);
      
    } else {
        var total= bruto;
      
    }
}
function limpar(){
    document.getElementById("cxnome").value = "";
    document.getElementById("cxplaca").value = "";
    document.getElementById("cxcarro").value = "";
    document.getElementById("cxdias").value = "";
    document.getElementById("cxvalor").value = "";
}
function sair(){
    alert("Obrigado volte sempre");
}
    