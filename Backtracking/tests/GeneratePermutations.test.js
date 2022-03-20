import { permutations as permutationsJS } from '../GeneratePermutations/Javascript'
import { permutations as permutationsTS } from '../GeneratePermutations/Typescript'

const expectedPermutationsOf12 = [
  [1, 2],
  [2, 1],
]
const expectedPermutationsOf123 = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
const expectedPermutationsOf1234 = [
  [1, 2, 3, 4],
  [1, 2, 4, 3],
  [1, 3, 2, 4],
  [1, 3, 4, 2],
  [1, 4, 2, 3],
  [1, 4, 3, 2],
  [2, 1, 3, 4],
  [2, 1, 4, 3],
  [2, 3, 1, 4],
  [2, 3, 4, 1],
  [2, 4, 1, 3],
  [2, 4, 3, 1],
  [3, 1, 2, 4],
  [3, 1, 4, 2],
  [3, 2, 1, 4],
  [3, 2, 4, 1],
  [3, 4, 1, 2],
  [3, 4, 2, 1],
  [4, 1, 2, 3],
  [4, 1, 3, 2],
  [4, 2, 1, 3],
  [4, 2, 3, 1],
  [4, 3, 1, 2],
  [4, 3, 2, 1]
]

describe('Permutations', () => {
  describe('Javascript', () => {

    it('Permutations of [1, 2]', () => {
      expect(permutationsJS([1, 2])).toEqual(expectedPermutationsOf12)
    })
    it('Permutations of [1, 2, 3]', () => {
      expect(permutationsJS([1, 2, 3])).toEqual(expectedPermutationsOf123)
    })

    it('Permutations of [1, 2, 3, 4]', () => {
      expect(permutationsJS([1, 2, 3, 4])).toEqual(expectedPermutationsOf1234)
    })

  })

  describe('Typescript', () => {
    it('Permutations of [1, 2]', () => {
      expect(permutationsTS([1, 2])).toEqual(expectedPermutationsOf12)
    })
    it('Permutations of [1, 2, 3]', () => {
      expect(permutationsTS([1, 2, 3])).toEqual(expectedPermutationsOf123)
    })
    it('Permutations of [1, 2, 3, 4]', () => {
      expect(permutationsTS([1, 2, 3, 4])).toEqual(expectedPermutationsOf1234)
    })
  })
})
