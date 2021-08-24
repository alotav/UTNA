// REPASO JS CLASE 1

/*  tenemos 3 tipos de vatiables:

    - const: valores que no van a cambiar, se les asigna un valor inicial y este valor no puede cambiar
    - let: variables que pueden cambiar de valor
    - var: variable global (NO LA USAMOS)

    TIPOD DE DATOS:

    - INT: NUMERO ENTEROS
    - FLOAT: numeros decimales
    - STRING: cadena de caracteres
    - CHAR: caracter
    - BOOLEAN: 2 valotes, true or false (0 o 1)
*/

const jon = {
    nombre: 'jon',
    apellido: 'gibaut',
    edad: 19,
    mails: ['ejemplo@gmail.com', 'ejemplo2@gmail.com'],
}

const personajes = [
    {
        nombre: 'Homero',
        apellido: 'Simpson',
        trabajo: ['operario'],
    },
    {
        nombre: 'Bart',
        apellido: 'Simpson',
        trabajo: ['estudiante'],
    },
    {
        nombre: 'Lisa',
        apellido: 'Simpson',
        trabajo: ['estudiante'],
    },
    {
        nombre: 'Magui',
        apellido: 'Simpson',
        trabajo: ['no'],
    },
    {
        nombre: 'Marge',
        apellido: 'Bouvier',
        trabajo: ['ama de casa'],
    },
]


const getAll = (arrayDeObjetos)  => {  //entre parentesis pasamos valores a la funcion.
    arrayDeObjetos.forEach(item => { //recorremos con el foeEach al arrayDeObjetos. El valor "item" tambien puede tomar otro nombre cualquiera.
    let mas1trabajo = false;  //recorremos el array de objetos y declaramos una variable let en false. Si la logintud es mayor a 1, cambiamos su valor a true y lo imprimimos en consola.
    if (item.trabajo.length > 1){
        mas1trabajo = true;
    }
    console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tiene mas de un trabajo? ${mas1trabajo ? 'SI' : 'NO'}`);
    });
}

getAll(personajes) //aca pasamos a la funcion el array personajes, que arriba fue llamada arrayDeObjetos. Arriba puede tomar cualquier nombre, pero cuando pasamos los datos debe tener el nombre del array (o dato declarado) correctamente .



////// INSTALAMOS AXIOS para manejar consultas http con este modulo: con esto traemos los personajes desde la api de breaking

const axios = require ('axios'); // y la requerimos para usarla

async function get(url) { //el valor entre parentesis es reemplazado con el valor declarado abajo.
    const personajes = await axios.get(url);
    console.log(personajes);
}

get('https://breakingbadapi.com/api/characters'); //pasamos el valor de la url al get.

