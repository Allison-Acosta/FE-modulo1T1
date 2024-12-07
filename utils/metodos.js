// Aca sacaré datos de los medicos disponibles y los mostraré en consola y en la web 


function mostrarContacto(datoNombre){

    fetch('medicos.json') // Ruta del archivo JSON
        .then(response => response.json()) // Convertir la respuesta a un objeto JavaScript
        .then(datosProfesionales => {
            // Buscar al profesional por nombre
            const profesional = datosProfesionales.find(p => p.nombre.toLowerCase() === datoNombre.toLowerCase());

        console.log(profesional);
        
        // Verificar si se encontró al profesional
        if (profesional) {
                    
            const mensaje = `
                Información de contacto de ${profesional.nombre}:
                - Teléfono: ${profesional.contacto.telefono}
                - Correo: ${profesional.contacto.mail}           
            `;
            console.log(mensaje);
            const email = alert(mensaje); 
        } 
        else {
            // Si no se encuentra al profesional
            console.log("No se encontró un profesional con ese nombre.");
        }

    })

}

function mostrarMedicosDisponibles() {

    fetch('medicos.json') // Ruta del archivo JSON
    .then(response => response.json()) // Convertir la respuesta a un objeto JavaScript
    .then(datosProfesionales => {
        // Buscar al profesional por nombre
        const medicosDisponibles = datosProfesionales.filter(p => p.disponibilidad === "true");

        // Seleccionamos el contenedor de la lista
        const contenedor = document.querySelector('.medDisponibles');
        
        // Limpiamos el contenedor antes de agregar los elementos
        contenedor.innerHTML = '';

        // Recorremos la lista de médicos disponibles y agregamos un <li> por cada uno
        medicosDisponibles.forEach(medico => {
            // Creamos el elemento <li>
            const li = document.createElement('li');
            // Añadimos el contenido al <li>
            li.textContent = `${medico.especialidad}-${medico.nombre}`;
            // Lo agregamos al contenedor
            contenedor.appendChild(li);


             // mostramos en consola los datos del medico
             let datomedicos = JSON.parse(JSON.stringify(medico));
             console.log(datomedicos);
 
        });
    })
}


function mostrarMedicosNoDisponibles() {

    fetch('medicos.json') // Ruta del archivo JSON
    .then(response => response.json()) // Convertir la respuesta a un objeto JavaScript
    .then(datosProfesionales => {
        // Buscar al profesional por nombre
        const medicosnoDisponibles = datosProfesionales.filter(p => p.disponibilidad === "false");

        

        // Seleccionamos el contenedor de la lista
        const contenedor = document.querySelector('.medNoDisponibles');
        
        // Limpiamos el contenedor antes de agregar los elementos
        contenedor.innerHTML = '';

        // Recorremos la lista de médicos disponibles y agregamos un <li> por cada uno
        medicosnoDisponibles.forEach(medico => {
            // Creamos el elemento <li>
            const li = document.createElement('li');
            // Añadimos el contenido al <li>
            li.textContent = `${medico.especialidad}-${medico.nombre}`;
            // Lo agregamos al contenedor
            contenedor.appendChild(li);


            // mostramos en consola los datos del medico
            let datomedicos = JSON.parse(JSON.stringify(medico));
            console.log(datomedicos);

        });
    })    
}


function reservarCita()
{
    const nombre = prompt("Indique el nombre del paciente:");

    // Validación del número de teléfono (9 dígitos)
    let telefono = prompt("Indique un teléfono de contacto (9 dígitos):");
    while (!/^\d{9}$/.test(telefono)) {
        alert("El número de teléfono debe tener exactamente 9 dígitos.");
        telefono = prompt("Teléfono (9 dígitos):");
    }
    telefono = parseInt(telefono, 10);  // Convertimos el teléfono a número

    const paciente = {
        nombre,
       telefono
    };

    const inventario = cargarPaciente();
    inventario.push(paciente);
    guardarPaciente(inventario);
    alert("Cita agendada con éxito!");

}

// FUNCIONES SALA DE ESPERA


function crearPilaPacientes()
{
    


}

function crearColaPaciente()
{

}

const tiempos = [10, 15, 20, 5, 30];  // tiempos en minutos
const calcularPromedioEspera = (tiemposEspera) => 
    tiemposEspera.reduce((total, tiempo) => total + tiempo, 0);

function evaluarTiempodeEspera()
{
      const espera = calcularPromedioEspera(tiempos);
      console.log(espera);  // 16

    // Seleccionamos el contenedor de la lista
    const contenedor = document.querySelector('.TiempoEspera');
    
    // Limpiamos el contenedor antes de agregar los elementos
    contenedor.innerHTML = '';
    contenedor.textContent = "El tiempo de espera es: "+espera+ " minutos."

      // una ves que se pregunta, habran 2 eventos con espera de 3.5 segundo donde llegará un nuevo paciente, y el tiempo de espera se actualizara
      setTimeout(() => {
        alert("Ha llegado un nuevo paciente.");
        tiempos.push(20);
    },3500);
    setTimeout(() => {
        alert("Ha llegado un nuevo paciente");
        tiempos.push(30);
    },7000);
}


// METODOS PARA PRESUPUESTOS
const precioConsulta = 25000;
const aplicarDescuento = (descuento) => (costo) => costo * (1 - descuento);

function consultaSimple(numero)
{
    alert("Calculando presupuesto...");

    const costo = numero * precioConsulta;
    const descuento = numero >= 2 ? 0.3 : 0; 
    const aplicarDescuentoFunc = aplicarDescuento(descuento);
    setTimeout(() => {
        alert("Presupuesto: $" + aplicarDescuentoFunc(costo) + ". Por " + numero + " consultas.");
    },3000);

}

function consultaMixta(numero)
{    
    alert("Calculando presupuesto...");
    const costo = numero * precioConsulta;
    const descuento = numero >= 2 ? 0.2 : 0; 
    const aplicarDescuentoFunc = aplicarDescuento(descuento);
    setTimeout(() => {
        alert("Presupuesto: $" + aplicarDescuentoFunc(costo) + ". Por " + numero + " consultas diferentes.");
    },3000);
}



// metodo listener para el envio de formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (evento) => {
        
        evento.preventDefault();
    
        
        alert("Formulario enviado con éxito. ¡Gracias por tu interés!");
        
        
      });
    });