import target from './';

describe('Reverse number', () => {
    describe('solution1', () => {
        it('should reverse positive number', () => {
            expect(target.reverse1(123)).toBe(321);
        });

        it('should reverse negative number', () => {
            expect(target.reverse1(-123)).toBe(-321);
        });

        it('should return 0 for numbers over (2 power 32 -1)', () => {
            expect(target.reverse1(1534236469)).toBe(0);
        });

        it('should return 0 for numbers less than (-(2 power 32 -1)', () => {
            expect(target.reverse1(-1534236469)).toBe(0);
        });
    });

    describe('solution2', () => {
        it('should reverse positive number', () => {
            expect(target.reverse2(123)).toBe(321);
        });

        it('should reverse negative number', () => {
            expect(target.reverse2(-123)).toBe(-321);
        });

        it('should return 0 for numbers over (2 power 32 -1)', () => {
            expect(target.reverse2(1534236469)).toBe(0);
        });

        it('should return 0 for numbers less than (-(2 power 32 -1)', () => {
            expect(target.reverse2(-1534236469)).toBe(0);
        });
    });
});