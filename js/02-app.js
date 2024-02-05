//Tomar objetos de local storage.
const productoLs = localStorage.getItem('producto')
const producto = JSON.parse(productoLs);
console.log(producto);

//Tomar arreglos de local storage.
const mesesLs = localStorage.getItem('meses')
const meses = JSON.parse(mesesLs);
console.log(meses);


//Si el elemento no existe, retorna null.