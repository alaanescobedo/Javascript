let totalPermutations: number[][];

const permutations = (arr: number[]) => {
  //Reinicializar estado de variables cada vez que se llama a la función
  totalPermutations = []

  return permute(arr, 0, arr.length - 1)
}

/**
 * @param arr Array de números
 * @param lowestIndex Índice del elemento más bajo
 * @param highestIndex Índice del elemento más alto
 * @returns Devuelve un array con todas las permutaciones posibles
 * Ejemplo: 
 * Dada la lista [1, 2, 3] con lowestIndex = 0 y highestIndex = 2,
 * * Loop 1 -- (arr, lowestIndex = 0, highestIndex), i = lowestIndex = 0
 * -swapValues(), no ocurre nada ya que los indices son iguales
 * -> permute(arr, lowestIndex = 0 + 1 , highestIndex)
 * * Loop 2 -- (arr, lowestIndex = 1, highestIndex) -- i = lowestIndex = 1
 * -swapValues(), tampoco ocurre nada ya que los indices vuelven a ser iguales
 * --> permute(arr, lowestIndex = 1 + 1 , highestIndex)
 * * Loop 3 -- (lowestIndex = 2, highestIndex = 2)
 * <- lowestIndex = 2 === highestIndex = 2, son iguales por lo que almacena el arreglo [1, 2, 3] y se retorna
 * * Loop 2 -- (arr, lowestIndex = 1, highestIndex) -- i++ = 2
 * -swapValues(), ahora se intercambian los indices 1 y 2, y se devuelve un nuevo arreglo [1, 3, 2]
 * --> permute(arr, lowestIndex = 1 + 1 , highestIndex)
 * * Loop 3 -- (lowestIndex = 2, highestIndex = 2)
 * <- lowestIndex = 2 === highestIndex = 2, son iguales por lo que almacena el arreglo [1, 3, 2] y se retorna
 * * Loop 2 -- (arr, lowestIndex = 1, highestIndex) -- i++ = 3 
 * - i = 3 > highestIndex = 2, no se inicia otro loop y se retorna
 * * Loop 1 -- (arr, lowestIndex = 0, highestIndex) -- i++ = 1
 * - swapValues(), ahora se intercambian los indices 0 y 1, y se devuelve un nuevo arreglo [2, 1, 3]
 * -> permute(arr, lowestIndex = 0 + 1 , highestIndex)
 * * Loop 2 -- (arr, lowestIndex = 1, highestIndex) -- i = lowestIndex = 1
 * - swapValues(), tampoco ocurre nada ya que los indices vuelven a ser iguales
 * -> permute(arr, lowestIndex = 1 + 1 , highestIndex)
 * * Loop 3 -- (lowestIndex = 2, highestIndex = 2)
 * <- lowestIndex = 2 === highestIndex = 2, son iguales por lo que almacena el arreglo [2, 1, 3] y se retorna
 * * Loop 2 -- (arr, lowestIndex = 1, highestIndex) -- i++ = 2
 * - swapValues(), ahora se intercambian los indices 1 y 2, y se devuelve un nuevo arreglo [2, 3, 1]
 * ... y continuan las permutaciones hasta que se termina el arreglo
 */
const permute = (arr: number[], lowestIndex: number, highestIndex: number) => {
  if (lowestIndex === highestIndex) {
    totalPermutations.push([...arr])
    return totalPermutations
  }
  for (let i = lowestIndex; i <= highestIndex; i++) {
    arr = swapValues(arr, lowestIndex, i)
    permute(arr, lowestIndex + 1, highestIndex)
  }
  return totalPermutations
}

/**
 * @param arr Array de números
 * @param lowestIndex Índice del elemento más bajo
 * @param index Índice del elemento que se intercambia
 * @returns Devuelve un array con los elementos intercambiados
 */
const swapValues = (arr: number[], lowestIndex: number, index: number): number[] => {
  const newArray = [...arr] as number[]
  [newArray[lowestIndex], newArray[index]] = [newArray[index], newArray[lowestIndex]] // Intercambia los elementos usando destructuring ES6
  return newArray
}


export { permutations }
