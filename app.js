//const argv = require('yargs').argv
const { argv } = require('./config/yargs')
const { crear, getlistado,actualizar,eliminar } = require('./por-hacer/por-hacer')
const colors= require('colors')


let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log(tarea)
        break
    case 'listar':
        console.log('Mostrar todas las tareas por hacer')
        let lista=getlistado()
        for (const item of lista) {
            console.log('========Por hacer========'.green)
            console.log(item.descripcion)
            console.log(`Estado: ${item.completado}`)
            console.log('========================='.green)
        }
        break
    case 'actualizar':
        let actualiazado=actualizar(argv.descripcion,argv.completado)
        console.log(actualiazado)
        break
    case 'eliminar':
        let borrado= eliminar(argv.descripcion)
        console.log(borrado)
break
    default:
        console.log('Comando no reconocido')
}