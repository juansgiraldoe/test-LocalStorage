const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito =[]

cargarEventListeners();
function cargarEventListeners() {
  //Agregar curso al carrito.
  listaCursos.addEventListener('click', agregarCurso)
  
  //Elimina cursos del carrito.
  carrito.addEventListener('click', eliminarCurso)

  //Vaciar carrito de compras.
  vaciarCarritoBtn.addEventListener('click', ()=> {
    articulosCarrito = [];
    carritoHTML();
  })
};

//Funciones:
function agregarCurso(e) {
  e.preventDefault();
  if ( e.target.classList.contains('agregar-carrito') ) {
    const cursoSeleccionado = e.target.parentElement.parentElement//.children[1].children[0].textContent;
    readDocument(cursoSeleccionado);
  }
}
function eliminarCurso(e) {
  e.preventDefault();
  if ( e.target.classList.contains('borrar-curso') ) {
    const cursoId = e.target.getAttribute('data-id');
    const cursoEnCarrito = articulosCarrito.find( curso => curso.id === cursoId);
    if (cursoEnCarrito) {
      // Verifica la cantidad del curso en el carrito
      if (cursoEnCarrito.cantidad > 1) {
        // Reduce la cantidad si es mayor a 1
        cursoEnCarrito.cantidad--;
      } else {
        // Elimina el curso del carrito si la cantidad es 1
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
      }

      // Actualiza la interfaz.
      carritoHTML();
    }
  }
}
  //Leemos el contenido del html al que dimos click y extrae la info del curso.

function readDocument(curso) {
  //Creamos un objeto con el contenido del curso actual.
  infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio .u-pull-right').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  //Revisa si un elemento ya esta en el carrito.
  const existe = articulosCarrito.some( curso => curso.id === infoCurso.id )
  if (existe) {
    //Actualizamos la cantidad.
    const cursos = articulosCarrito.map( curso => {
      if ( curso.id === infoCurso.id ) {
        curso.cantidad++
        return curso
      } else {
        return curso
      }
    })
    articulosCarrito = [...cursos]
  } else {
    //Agrega elementos al arreglo del carrito.
    articulosCarrito =[...articulosCarrito, infoCurso]
  }

  carritoHTML();
}

//Muestra los elementos en el HTML del carrito de compras.
function carritoHTML() {
  //Limpia el html.
  limpiarHmtl();

  //Recorre el carrito y genera el HTML.
  articulosCarrito.forEach( item => {
    const { imagen, titulo, precio, cantidad, id } = item
    const row = document.createElement('tr')
    row.innerHTML = `
    <td><img src='${imagen}' width='100'></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
      <a href='#' class='borrar-curso' data-id='${id}'> X </a>
    </td>
    `;

    //Agrega el hml al tbody
    contenedorCarrito.appendChild(row)
  });

  function limpiarHmtl() {
    //Forma lenta.
    //contenedorCarrito.innerHTML = '';
    //Mejor performance.
    while ( contenedorCarrito.firstChild ) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
  }
}