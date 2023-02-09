/*** El Se deja algo de código para que se entienda lo que tiene que hacer el ejercicio
****/
/***
*/
onload = function(){
  recibir()
}

function recibir() {
  document.getElementById("miFormulario").addEventListener("submit", e => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));

    for(let datos in data){
      console.log(datos+": "+ data[datos])
    }
    

    //let formulario = (document.forms[0].elements)

    //validarFormulario(formulario)

    
  });
}

function validarFormulario(formulario){
  //nombre
  console.log("Nombre: " + formulario.nombre.value);

  //teléfono
  console.log("Telefono: " + formulario.telefono.value);

  // Fecha nacimiento
  console.log("Fecha nacimiento: " + formulario.dia.value + "/" + formulario.mes.value + "/" + formulario.ano.value);

  //socio
  console.log("Socio: " + formulario.socio.value);

  //curso seleccionado
  console.log("Curso: " + formulario.curso.value);

  // cursos realizados
  console.log("Cursos realizados  " + formulario.cursosRealizados.value);

  // descuento
  console.log("Descuento: " + formulario.descuento.value);

  //observaciones
  console.log("Observaciones: " + formulario.observaciones.value);
}

