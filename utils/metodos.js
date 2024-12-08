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

        const espera = calcularPromedioEspera(tiempos);
        contenedor.innerHTML = '';
        contenedor.textContent = "El tiempo de espera es: "+espera+ " minutos."

    },3500);
    setTimeout(() => {
        alert("Ha llegado un nuevo paciente");
        tiempos.push(30);

        const espera = calcularPromedioEspera(tiempos);
        contenedor.innerHTML = '';
        contenedor.textContent = "El tiempo de espera es: "+espera+ " minutos."
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
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            alert("Formulario enviado con éxito. ¡Gracias por tu interés!");
        });
    } else {
        console.error("No se encontró el formulario con el ID 'formulario' PESTAÑA CONTACTO");
    }
});


    //Funciones para las clases DOCTOR
class Doctor {
    constructor(nombre, especialidad, años, disponibilidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._años = años;
        this.disponibilidad = disponibilidad; 
        this.atenciones = 3;       
    }

    get años() {
        return this._años;
    }
    set años(valor) {
        if (valor >= 0) {  // Solo permitimos valores positivos para los años
            this._años = valor;
        } else {
            console.log("El valor de 'años' no puede ser negativo.");
        }
    }

    static buscarMedicoPorNombre(medicos, nombreBuscado) {
        const medicoEncontrado = medicos.find(medico => medico.nombre.includes(nombreBuscado));
        if (medicoEncontrado) {
            console.log("se encontro =)");
            return medicoEncontrado;
        } else {
            console.log("No se encontro nada!");
            return null;
        }
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Especialidad: ${this.especialidad}`);
        console.log(`Años de experiencia: ${this.años}`);
        console.log(`Disponibilidad: ${this.disponibilidad}`);
        
    }
}

class Cirujano extends Doctor {
    constructor(nombre, especialidad, años, disponibilidad, operacionesRealizadas) {
        // Llamamos al constructor de la clase base (Doctor)
        super(nombre, especialidad, años, disponibilidad);
        this.operacionesRealizadas = operacionesRealizadas || 0;  // Si no se proporciona, por defecto será 0       
}


realizarOperacion() {
    this.operacionesRealizadas++;
    console.log(`Operación realizada. Total de operaciones: ${this.operacionesRealizadas}`);
}
}


function crearMedicosDesdeJSON(jsonData) {
    
    // Convertir el JSON a un array de objetos Medico
    return jsonData.map(dato => new Doctor(
        dato.nombre,
        dato.especialidad,
        dato.años,
        dato.disponibilidad,
       
    ));
}

function buscarMedicoClass()
{
// Le pide al usuario un nombre a buscar
const nombre = prompt("Indique el nombre del medico a buscar:");

// Crea todas las clases medico (desde el .json)
fetch('medicos.json') // Ruta al archivo JSON
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json(); // Convertir la respuesta en JSON
    })
    .then(datosProfesionales => {
        // Crear los objetos Medico a partir del JSON
        const medicos = crearMedicosDesdeJSON(datosProfesionales);
        console.log('Médicos cargados:', medicos);       

        
        medicos.forEach(medico => medico.mostrarInformacion());
// Leer el archivo JSON

// busca al medico 
const medico = Doctor.buscarMedicoPorNombre(medicos, nombre);
console.log("estamos aca");

if(medico)
{   
    const mensaje = `
    Información de contacto de ${medico.nombre}:
    - Especialidad: ${medico.especialidad}
    - Pecientes Atendidos: ${medico.atenciones}           
        `;



    const contenedor = document.querySelector('.medBuscado');               
    contenedor.innerHTML = '';
    contenedor.textContent = mensaje;
}
else
{   
     const mensaje = `No se ha encontrado informacion del médico`;
    const contenedor = document.querySelector('.medBuscado');               
    contenedor.innerHTML = '';
    contenedor.textContent = mensaje;

}




    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
   
}