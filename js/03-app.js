//Eliminar de localstorage.

localStorage.removeItem('producto')

//Si queremos actualizar un elemento. (Se reescriben).

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();