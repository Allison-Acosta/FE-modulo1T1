document.addEventListener("DOMContentLoaded", cargarDatosIniciales);

function agregarMedico() {
    const nombre = prompt("Nombre del nuevo Médico:");
    const especialidad = prompt("Especialidad:");
    const anos = parseInt(prompt("Años de experiencia:"), 10);
    
    // Validación de disponibilidad (true/false)
    let disponibilidad = prompt("¿Está disponible? (true/false):").toLowerCase();
    while (disponibilidad !== 'true' && disponibilidad !== 'false') {
        alert("Por favor, ingresa 'true' o 'false' para la disponibilidad.");
        disponibilidad = prompt("¿Está disponible? (true/false):").toLowerCase();
    }
    disponibilidad = disponibilidad === 'true'; // Convertimos a booleano

    // Validación de horarios AM y PM
    const horariosAM = prompt("Días disponibles en la mañana (separados por coma):").split(",").map(dia => dia.trim());
    const horariosPM = prompt("Días disponibles en la tarde (separados por coma):").split(",").map(dia => dia.trim());

    // Validación del número de teléfono (9 dígitos)
    let telefono = prompt("Teléfono (9 dígitos):");
    while (!/^\d{9}$/.test(telefono)) {
        alert("El número de teléfono debe tener exactamente 9 dígitos.");
        telefono = prompt("Teléfono (9 dígitos):");
    }
    telefono = parseInt(telefono, 10);  // Convertimos el teléfono a número

    // Validación del correo electrónico (formato adecuado)
    let mail = prompt("Correo electrónico:");
    while (!/\S+@\S+\.\S+/.test(mail)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        mail = prompt("Correo electrónico:");
    }

    // Crear el nuevo objeto médico
    const producto = {
        nombre,
        especialidad,
        anos,
        disponibilidad: disponibilidad.toString(), // Convertimos a string para el formato del JSON
        horarios: {
            AM: horariosAM,
            PM: horariosPM
        },
        contacto: {
            telefono,
            mail
        }
    };


    const inventario = cargarInventario();
    inventario.push(producto);
    guardarInventario(inventario);
    alert("Nuevo funcionario agregado!");
}




function mostrarMedicos() {
    const inventario = cargarInventario();
    const output = document.getElementById("output");
    //output.innerHTML = inventario
    //.map((prod) => `${prod.nombre}: ${prod.especialidad} Contacto: ${prod.contacto.mail}`)
    //.join("<br>");

    output.innerHTML = inventario
    .map(prod => {
        return `
            <div>                
                <p><strong>Nombre:</strong> ${prod.nombre}</p>
                <p><strong>Especialidad:</strong> ${prod.especialidad}</p>
                <p><strong>Años de experiencia:</strong> ${prod.años}</p>
                <p><strong>Disponibilidad:</strong> ${prod.disponibilidad === "true" ? "Disponible" : "No disponible"}</p>
                <p><strong>Horarios:</strong></p>
                <ul>
                    <li><strong>AM:</strong> ${prod.horarios.AM.join(", ")}</li>
                    <li><strong>PM:</strong> ${prod.horarios.PM.join(", ")}</li>
                </ul>
                <p><strong>Contacto:</strong></p>
                <ul>
                    <li><strong>Teléfono:</strong> ${prod.contacto.telefono}</li>
                    <li><strong>Email:</strong> <a href="mailto:${prod.contacto.mail}">${prod.contacto.mail}</a></li>
                    </ul>
            </div>
            <hr>
        `;
    })
    .join("");
}

function orderMedicosByName() {
    let inventario = cargarInventario();
    inventario = ordenarPorNombre(inventario);
    guardarInventario(inventario);
    mostrarMedicos();
}

function orderMedicosByEspeciality() {
    let inventario = cargarInventario();
    inventario = ordenarPorEspecialidad(inventario);
    guardarInventario(inventario);
    mostrarMedicos();
}

function lookFor() 
{
    // Cambiado el nombre de la función
    const inventario = cargarInventario();
    const nombreProducto = prompt("Nombre completo del medico a buscar:"); 

    console.log("el nombre ingresado es:" + nombreProducto);
    console.log("el inventario es:" + inventario);
    // Cambiado el nombre de la variable
    const productoEncontrado = buscarProducto(inventario, nombreProducto); 
    console.log("el medico encontrado es:" + productoEncontrado.nombre );

    //Cambiado el nombre de la variable
    if (productoEncontrado) 
        {
            const mensaje = `
            Nombre: ${productoEncontrado.nombre}
            Especialidad: ${productoEncontrado.especialidad}
            Años de experiencia: ${productoEncontrado.años}
            Disponibilidad: ${productoEncontrado.disponibilidad === "true" ? "Disponible" : "No disponible"}
            
            Horarios:
            Mañana (AM): ${productoEncontrado.horarios.AM.join(", ")}
            Tarde (PM): ${productoEncontrado.horarios.PM.join(", ")}
    
            Contacto:
            Teléfono: ${productoEncontrado.contacto.telefono}
            Email: ${productoEncontrado.contacto.mail}
        `;

        alert(mensaje);
    } else {
        alert("El médico buscado no se encuentra dentro de nuestro Staff.");
    }
}