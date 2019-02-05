import target from './index';

describe('FizzBuzz', () => {
    it('should print fizz for multiples of three', () => {
        expect(target(4)).toBe('1 2 fizz 4');
    });

    it('should print buzz for multiples of five', () => {
        expect(target(5)).toBe('1 2 fizz 4 buzz');
        expect(target(6)).toBe('1 2 fizz 4 buzz fizz');
    });

    it('should print fizzbuzz for multiples of five  and three', () => {
        expect(target(15)).toBe('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz');
    });
});