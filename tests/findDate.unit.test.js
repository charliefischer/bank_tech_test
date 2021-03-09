const FindDate = require('../src/findDate')
const simplifiedDate = require('./helpers')
let date = simplifiedDate()


describe('findDate', () => {
  test('creates a new date', () => {
    let newDate = new FindDate()
    expect(newDate.format()).toEqual(date)
  })
})