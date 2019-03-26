import target from './';

describe('Is prime number', () => {

    it('should return true for prime numbers', () => {
        expect(target(3)).toBe(true);
        expect(target(5)).toBe(true);
        expect(target(2)).toBe(true);
        expect(target(13)).toBe(true);
        expect(target(11)).toBe(true);
    });

    it('should return false for none prime numbers', () => {
        expect(target(0)).toBe(false);
        expect(target(1)).toBe(false);
        expect(target(4)).toBe(false);
        expect(target(20)).toBe(false);
        expect(target(56)).toBe(false);
    });
});