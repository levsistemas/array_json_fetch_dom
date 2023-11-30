const INICIAL= document.getElementById('inicial')
miembros= ["Stiven","Leandro","Karol","Simba"]

for (let index = 0; index < miembros.length; index++) {
    const element = miembros[index];
    console.log(element + ' ' + index)
    H2=document.createElement('h2')
    H2.innerHTML=element + ' ' + index
    INICIAL.appendChild(H2)
}

miembros.forEach(function(nombre) {
    console.log(nombre + ' desde el forEach')
    const H3=document.createElement('h3')
    H3.innerHTML=nombre + ' ' + 'desde el forEach'
    INICIAL.appendChild(H3)
});

miembros.forEach((personas) => {
    console.log(personas + ' desde el forEach arrow function')
    const H4=document.createElement('h4')
    H4.innerHTML=personas + ' ' + 'desde el forEach con arrow function'
    INICIAL.appendChild(H4)
});



fetch ('./personajes.json')
.then( response => response.json())
.then( response => {
    response.forEach((personaje)=>{
        const e = document.createElement('h2')
    e.innerHTML = personaje
    INICIAL.appendChild(e)
    })
})

fetch ('https://ejemplo-nodejs.onrender.com/array')
.then( response => response.json())
.then( response => {
    response.forEach((usuarios)=>{
        const e = document.createElement('h1')
        INICIAL.appendChild(e)
        e.innerHTML = '<h2>Nombre: ' + usuarios.name + "</h2> \n <h3>Edad: " + usuarios.edad + "</h3> \n <h4>DNI: " + usuarios.dni + "</h4>"
    })
})
