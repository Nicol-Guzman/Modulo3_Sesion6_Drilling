// Dentro del codigo he incluido los logs que se muestran en la consola
// Los datos se ingresan por promts
document.addEventListener('DOMContentLoaded', function () {
    function Tarea(descripcion, estado) {
        this.descripcion = descripcion;
        this.estado = estado;
    }

    let tareas = [];

    function agregarTarea() {
        let descripcion = prompt("Ingresa la descripción de la tarea:");

        if (descripcion) {
            let nuevaTarea = new Tarea(descripcion, false);
            tareas.push(nuevaTarea);
            alert("Tarea ingresada.");
        } else {
            alert("La descripción de la tarea no puede estar vacía.");
        }
    }

    function completarTarea() {
        let indice = prompt("Ingresa el número de la tarea que deseas marcar como completada (Vea la opción 'Filtrar Tarea' en el menú principal para obtener el número de la tarea):");
        let cantIndice = parseInt(indice, 10);

        if (!isNaN(cantIndice) && cantIndice >= 1 && cantIndice <= tareas.length) {
            tareas[cantIndice - 1].estado = true;
            alert("Tarea completada.");
        } else {
            alert("El número de tarea no es válido.");
        }
    }

    function filtrarTareas() {
        let filtro = prompt("Escribe '1' para acceder a las tareas completadas o '2' las tareas pendientes:");
        let tareasFiltradas;

        if (filtro === '1') {
            tareasFiltradas = tareas.filter(tarea => tarea.estado);
            console.log(`Tareas completadas: ${tareasFiltradas.length}`);
            
        } else if (filtro === '2') {
            tareasFiltradas = tareas.filter(tarea => !tarea.estado);
            console.log(`Tareas pendientes: ${tareasFiltradas.length}`);
        } else {
            alert("El filtro ingresado no es valido.");
            return;
        }
        if (tareasFiltradas.length > 0) {
            alert(tareasFiltradas.map((tarea, index) => `${index + 1}. ${tarea.descripcion}`).join('\n'));
        } else {
            alert("No hay tareas con este filtro actualmente.");
        }
    }

    function mostrarTareas() {
        console.log(`Número total de tareas: ${tareas.length}`);
        alert(`Número total de tareas: ${tareas.length}`);
    }

    function menu() {
        let opcion;
        do {
            opcion = prompt("Elige una opción:\n1. Agregar Nueva Tarea\n2. Completar Tarea\n3. Filtrar Tareas\n4. Mostrar número total de tareas\n5. Salir");
            switch (opcion) {
                case '1':
                    agregarTarea();
                    break;
                case '2':
                    completarTarea();
                    break;
                case '3':
                    filtrarTareas();
                    break;
                case '4':
                    mostrarTareas();
                    break;
                case '5':
                    alert("Gracias por usar nuestra aplicación!");
                    break;
                default:
                    alert("Opción no válida.");
            }
        } while (opcion !== '5');
    }
    menu();
});