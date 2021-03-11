const FindDate = require('../src/findDate')
const simplifiedDate = require('./helpers')
let date = simplifiedDate()


describe('findDate', () => {
  test('creates a new date', () => {
    let newDate = new FindDate()
    expect(newDate.format()).toEqual(date)
  })
})

// const getCurrentDate = () => new FindDate();
// test('It should create new date', () => {
//   jest
//     .spyOn(global, 'Date')
//     .mockImplementationOnce(() => new Date('02/01/2020'));

//   expect(getCurrentDate().date).toEqual(new FindDate());
// });