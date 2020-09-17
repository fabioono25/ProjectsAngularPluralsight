import { StrengthPipe } from './strength.pipe';
describe('StrengthPipe', () => {
  // // system under test
  // let sut;

  // beforeEach(() => {
  //   sut = {};
  // });

  it('should display weak if strength is 5', () => {
    // arrange
    const pipe = new StrengthPipe();

    // act
    const val = pipe.transform(5);

    // assert
    expect(val).toEqual('5 (Weak)');
  });
});
