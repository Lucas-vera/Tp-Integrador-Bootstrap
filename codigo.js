function calcularTotal(){
    let categoria = document.getElementById("opcionDescuento").value;
    let cantidad = document.getElementById("inputCantidad").value;
    let descuento;
    
    if(categoria == 1){ 
        descuento=0.8;
    }else if(categoria == 2)
    {   descuento=0.5;
    }else{ 
        descuento= 0.15;
    }

    let totalAPagar = 200*cantidad-(200*descuento*cantidad);

    let cartel = document.getElementById("cartelTotal");
    cartel.value="  Total a Pagar: $ "+totalAPagar;
}

var btnEnviar = document.getElementById("botonResumen");

btnEnviar.addEventListener("click",(e)=>{
    e.preventDefault();
    calcularTotal();
})