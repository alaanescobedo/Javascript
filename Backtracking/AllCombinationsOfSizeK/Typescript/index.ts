let currentCombination: number[]
let totalCombinations: number[][]

const allCombinationsOfSizeK = (totalLengthN: number, maxCombinationsK: number): number[][] => {
  //Reinicializar estado de variables cada vez que se llama a la función
  currentCombination = []
  totalCombinations = []
  // Se ejecuta creando otra funcion, para que la funcion principal no requiera del parametro "initial"
  return findCombinations(totalLengthN, maxCombinationsK)
}

/* Se inicia una funcion recursiva a partir e la configuracion de longitud total, y la maximas combinaciones a buscar
 - Ejemplo:
 Si la longitud total es 4 y la combinacion maxima es 2, 
- [ 1 , 2 , 3 , 4 ] = longitu total de 4
- [ _ , _ ] = combinacion actual de 2
- [ *1* ,2 ,3 ,4 ] = indice actual
++ En la primera iteracion almacenamos el 1
- [ 1 , _ ] = combinacion actual de 2 - 1
- Volvemos a llamar la funcion con los datos actualizados disminuyendo el maximo de combinaciones en uno ([ x , _ ]) y recorriendo el indice
- [ 1 , *2* , 3 , 4 ] = indice actual
++ En la segunda iteracion almacenamos el 2
- [ 1 , 2 ] = combinacion actual de 2 - 2
- Volvemos a llamar la funcion con los datos actualizados disminuyendo el maximo de combinaciones en de nuevo en uno ([ x , x ]) y recorriendo el indice
++ Ahora el maximo de combinaciones es 0, por lo que se almacena la combinacion actual y retornamos el arreglo con todas las combinaciones
- Liberamos el ultimo indice ([ 1 , *2* ]) del maximo de combinaciones con el metodo pop 
- Volvemos a llamar la funcion con los datos actualizados con el maximo de combinaciones en uno ([ x , _ ]) y recorriendo el indice
- [ 1 , 2 , *3* , 4 ] = indice actual
++ Ahora en la tercera iteracion almacenamos el 3
- [ 1, 3 ] = combinacion actual de 2 - 2
++ Ahora el maximo de combinaciones de nuevo es 0, por lo que se almacena la combinacion actual y retornamos el arreglo con todas las combinaciones
- Y se continua con el ciclo hasta que se recorra la longitud total
*/
const findCombinations = (totalLength: number, maxCombinations: number, initial: number = 1) => {
  if (maxCombinations === 0) {
    totalCombinations.push([...currentCombination])
    return totalCombinations
  }
  for (let i = initial; i <= totalLength; i++) {
    currentCombination.push(i)
    findCombinations(totalLength, maxCombinations - 1, i + 1)
    currentCombination.pop()
  }
  return totalCombinations
}

export { allCombinationsOfSizeK as findCombinations } 