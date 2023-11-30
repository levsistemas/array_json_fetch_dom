// Cargar la lista de nombres desde el archivo JSON
fetch('personajes.json')
  .then(response => response.json())
  .then(data => {
    lista = document.getElementById('listaPersonajes');
    data.forEach(function (nombre) {
      const LI = document.createElement('li');
      LI.textContent = nombre;
      lista.appendChild(LI);




    });
  })
  .catch(error => console.error('Error al cargar los datos: ', error));