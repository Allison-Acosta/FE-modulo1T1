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