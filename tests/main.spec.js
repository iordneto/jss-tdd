import { expect } from 'chai';
import FizzBuz from '../src/main';

describe('FizzBuzz', () => {
  it('should return Fizz when the number is multiple of 3', () => {
    expect(FizzBuz(3)).to.be.equal('Fizz');
    expect(FizzBuz(5)).not.to.be.equal('Fizz');
    expect(FizzBuz(6)).to.be.equal('Fizz');
  });

  it('should return Buzz when the number is multiple of 5', () => {
    expect(FizzBuz(3)).not.to.be.equal('Buzz');
    expect(FizzBuz(5)).to.be.equal('Buzz');
    expect(FizzBuz(10)).to.be.equal('Buzz');
  });

  it('should return FizzBuzz when the number is multiple both of 3 and 5', () => {
    expect(FizzBuz(15)).to.be.equal('FizzBuzz');
  });

  it('should return number when the number is not multiple of 3 or 5', () => {
    expect(FizzBuz(7)).to.be.equal(7);
  });

  it('should return 0 when the number is 0', () => {
    expect(FizzBuz(0)).to.be.equal(0);
  });
});
