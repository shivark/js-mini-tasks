import target from './';

describe('nth fibinacci number', () => {

    it('should return 3 for 5th fibonacchi number', () => {
        expect(target(5)).toBe(3);
    });

    it('should return 34 for 10th fibonacchi number', () => {
        expect(target(10)).toBe(34);
    });
});