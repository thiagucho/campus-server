function guardar(){
   Texto=document.querySelector (".ql-editor")

    contenedor=document.querySelector (".contenedor")
    contenedor.innerHTML+=Texto.innerHTML;
}
