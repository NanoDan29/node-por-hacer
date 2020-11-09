const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('eliminar', 'Eliminar una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actulaizar el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv

module.exports = { argv }