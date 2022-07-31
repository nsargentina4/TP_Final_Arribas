function jsvalidar(){
    

    if(document.pmForm.Nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.Nombre.focus()
        return 0;  
    }
    if(document.pmForm.Apellido.value.length==0){
        alert("Tiene que escribir su Apellido")
        document.fvalida.Apellido.focus()
        return 0;  
    }
    if (email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
      }
      
 
 alert("Muchas gracias por enviar el formulario");
 document.pmForm.submit();
}
