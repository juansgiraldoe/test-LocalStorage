//Local storage test.

//Con objetos
const producto = {
  nombre: 'Monitor',
  precio: 300
}
const productoString = JSON.stringify(producto)
localStorage.setItem('producto', productoString)

//Con arreglos.
const meses = ['Enero', 'Febrero', 'Marzo']
localStorage.setItem('meses', JSON.stringify(meses))