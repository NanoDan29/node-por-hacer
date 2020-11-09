// const { require, describe } = require("yargs");

const fs = require('fs')

let listadoToDo = []

const guardarDB = () => {


    let data = JSON.stringify(listadoToDo)

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
}

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json')
    } catch (error) {
        listadoToDo = []
    }

}



const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: true
    }

    listadoToDo.push(porHacer)
    guardarDB()

    return porHacer
}

const getlistado = () => {
    cargarDB()
    return listadoToDo
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoToDo[index].completado = completado
        guardarDB()
        return true
    }
    return false
}

const eliminar = (descripcion) => {
    cargarDB()
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion != descripcion)

    if (listadoToDo.length === nuevoListado.length) return false
    listadoToDo = nuevoListado
    guardarDB()
    return true
}

module.exports = { crear, getlistado, actualizar, eliminar }