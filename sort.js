const BULKY_VOLUME = 1000000
const BULKY_DIMENSION = 150
const HEAVY_MASS = 20

const STANDARD_STACK_NAME = 'STANDARD'
const SPECIAL_STACK_NAME = 'SPECIAL'
const REJECTED_STACK_NAME = 'REJECTED'

export const sort = (width, height, length, mass) => {
  let isBulky = false
  let isHeavy = false

  if (
    !width || !height || !length || !mass ||
    width <= 0 || height <= 0 || length <=0 || mass <= 0
  ) {
    throw new Error('Invalid input into sort() function')
  }

  if (
    [width, height, length].find(d => d >= BULKY_DIMENSION) ||
    width * height * length >= BULKY_VOLUME
  ) {
    isBulky = true
  }

  if (mass >= HEAVY_MASS) {
    isHeavy = true
  }

  if (isHeavy && isBulky) {
    return REJECTED_STACK_NAME
  }

  if (isHeavy || isBulky) {
    return SPECIAL_STACK_NAME
  }

  return STANDARD_STACK_NAME
}
