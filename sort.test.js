import { expect } from 'chai'
import { sort } from './sort.js'

describe('Package sort function', () => {
  it('should throw an error with invalid input', () => {
    expect(() => sort(0,1,1,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,0,1,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,1,0,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,1,1,0)).to.throw('Invalid input into sort() function')
    expect(() => sort(-1,1,1,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,-1,1,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,1,-1,1)).to.throw('Invalid input into sort() function')
    expect(() => sort(1,1,1,-1)).to.throw('Invalid input into sort() function')
  })

  it('should return "STANDARD" for standard packages', () => {
    expect(sort(1,1,1,1)).to.equal('STANDARD')
    expect(sort(10,10,1,1)).to.equal('STANDARD')
    expect(sort(5,5,5,1)).to.equal('STANDARD')
    expect(sort(10,10,10,19)).to.equal('STANDARD')
    expect(sort(5,44,3,10)).to.equal('STANDARD')
    expect(sort(8,12,16,4)).to.equal('STANDARD')
    expect(sort(7,7,7,7)).to.equal('STANDARD')
  })

  it('should return "SPECIAL" for special packages', () => {
    expect(sort(1,1,1,25)).to.equal('SPECIAL')
    expect(sort(1000,1000,1000,1)).to.equal('SPECIAL')
  })

  it('should return "REJECTED" for rejected packages', () => {
    expect(sort(1000,1000,1000,25)).to.equal('REJECTED')
  })
})
