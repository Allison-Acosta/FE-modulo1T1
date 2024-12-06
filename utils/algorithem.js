/* Revisa que los items Nombre, email y asunto esten llenados.
Si no estan, emite una alerta y pide que se llene el campo.
Si todos los campos estan bien llenados, emite un mensaje de "Mensaje enviado"*/

function reviewInformation()
{
    var textoNombre = document.getElementById("nombre").value;
    var textoEmail = document.getElementById("correo").value;
    var textoAsunto = document.getElementById("asunto").value;


    // 1. Revisa Nombre: que tenga informacion 
    var texAsunto = true;
    console.log(textoNombre +" // " + textoEmail +" // " + textoAsunto);   

    if(textoNombre === "")
    {
        const nombre = prompt("Indicar Nombre:"); 
        if(nombre != "")
            {
                document.getElementById("nombre").value = nombre;                
                console.log("nuevo nombre: "+ nombre );   
            }       
    }

    // 2. Revisa el mail: que tenga informacion, y que tenga un @ dentro del texto
    if(textoEmail === "")
        {
            const email = prompt("Indicar Email:"); 
            if(email != "" && email.includes("@"))
                {
                    document.getElementById("correo").value = email;
                    console.log("nuevo email: "+ email );
                }       
        }
    else if (! textoEmail.includes("@"))
    {
        const email = prompt("Indicar Email válido:"); 
        if(email != "" && email.includes("@"))
            {
                document.getElementById("correo").value = email;
                console.log("nuevo email: "+ email );
            }    
    }

    // 3. advierte a la persona si el contenido esta vacio. Se puede aceptar o rechazar
    if(textoAsunto === "")
        {
           texAsunto = false;
            const validar = confirm("El contenido del asunto esta vacio, ¿Desea continuar?");
            if (validar) 
                {
                texAsunto = true;
                } 
            else {
                // Se cancela y no sigue. 
              }           
        }

    // 4. Si todo esta bien y el contenido fue aceptado. Se envia mail con "mensaje enviado"
        if( texAsunto)
        {
            alert("Mensaje enviado. Gracias!");
            console.log("mensaje enviado");
        }

        textoNombre = document.getElementById("nombre").value;
        textoEmail = document.getElementById("correo").value;
        textoAsunto = document.getElementById("asunto").value;
        console.log(textoNombre +" // " + textoEmail +" // " + textoAsunto);   



}




/* Funcion que revisa si los items de servicios estan o no disponibles
*/
function filtrarServicios() {    
    const servicios = document.querySelectorAll('.nav__item');  
   
    servicios.forEach(servicio => {
      // Verifica el atributo data-disponible
      const disponible = servicio.getAttribute('data-disponible');
  
      if (disponible === "false") {
        // Si el servicio no está disponible, lo ocultamos
        servicio.style.display = 'none';
      } else {
        // Si el servicio está disponible, lo mostramos
        servicio.style.display = 'block';
      }
    });
  }


  /* Funcion que prende todos los servicios (por si los servicios no disponibles se hubieran ocultado.)
*/
function mostrarServicios() {    
    const servicios = document.querySelectorAll('.nav__item');  
   
    servicios.forEach(servicio => {      
        servicio.style.display = 'block';
      
    });
  }


  /* Funciones relacionadas al mantenedor de los medicos*/
  // Búsqueda secuencial
function buscarProducto(inventario, nombre) {
    return inventario.find((producto) => producto.nombre === nombre);
}

// Ordenamiento por burbuja
function ordenarPorNombre(inventario) {
    for (let i = 0; i < inventario.length; i++) {
        for (let j = 0; j < inventario.length - i - 1; j++) {

            // Reviso los nombres que esta comparando en consola
            console.log (inventario[j].nombre + " vs " + inventario[j+1].nombre);

            if (inventario[j].nombre > inventario[j + 1].nombre) 
                {
                    [inventario[j], inventario[j + 1]] = [inventario[j + 1], inventario[j]];
                }
        }
    }
    return inventario;
}
function ordenarPorEspecialidad(inventario) {
    for (let i = 0; i < inventario.length; i++) {
        for (let j = 0; j < inventario.length - i - 1; j++) {
            
            // Reviso los nombres que esta comparando en consola
            console.log (inventario[j].especialidad + " vs " + inventario[j+1].especialidad);

            if (inventario[j].especialidad > inventario[j + 1].especialidad) 
                {
                    [inventario[j], inventario[j + 1]] = [inventario[j + 1], inventario[j]];
                }
        }
    }
    return inventario;
}


// Convertir JSON
function cargarInventario() {
    const data = localStorage.getItem("medicos");

    //console.log(data);
    return data ? JSON.parse(data) : [];
}

function guardarInventario(medicos) {
    // Reviso el dato a guardar:
    console.log("Se guardará el siguiente dato");
    console.log(JSON.stringify(medicos));
    localStorage.setItem("medicos", JSON.stringify(medicos));
}

function cargarDatosIniciales() {
    fetch("medicos.json")
    .then((response) => response.json())
    .then((data) => {
        guardarInventario(data);
        mostrarMedicos();
    });
}
