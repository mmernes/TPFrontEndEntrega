

const form = document.getElementById("myForm");
form.addEventListener("submit",handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    // Your submit event handling code here
    console.log('Formulario no enviado');
  
    const cant=(document.getElementById("cantIn").value);
    const cate=document.getElementById("catIn").value;
    console.log('cantidad' + cant, 'categoria'+ cate);
    let pago = 0;
    document.getElementById("pagarOut").value =
        "Monto total a pagar: $" + pago.toFixed(2);
    
    const ticket = 200;
    
    switch(cate){
        case '1' : 
        porc = 80/100;  
        pago=(cant*ticket)-(cant*ticket*porc);
        break;
        case '2' :
        porc = 50/100;  
        pago=(cant*ticket)-(cant*ticket*porc);
        break;
        case '3' :
        porc = 15/100;  
        pago=(cant*ticket)-(cant*ticket*porc);
        break;
        default :
        pago=(cant*ticket);
     }
     console.log('pago' + pago);
     document.getElementById("pagarOut").value =
        "Monto total a pagar: $" + pago.toFixed(2);

    
  }

  function borrar() {
    const form = document.getElementById("myForm");
    form.reset();

}







            

