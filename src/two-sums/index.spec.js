import target from './';

describe('Two sums', () => {
    describe('Solution 1, two array loops', () => {
        it('should return array of indices of array that sum is 10', () => {
            const arry = [2, 5, 1, 8, 6];

            const result = target.sum1(arry, 10);

            expect(result[0]).toBe(0);
            expect(result[1]).toBe(3);
        });

        it('should return array of indices of array that sum is 6', () => {
            const arry = [3, 2, 4];

            const result = target.sum1(arry, 6);

            expect(result.includes(2)).toBeTruthy();
            expect(result.includes(1)).toBeTruthy();
        });
    });

    describe('Solution 2, two loops with Map', () => {
        it('should return array of indices of array that sum is 10', () => {
            const arry = [2, 5, 1, 8, 6];

            const result = target.sum2(arry, 10);

            expect(result[0]).toBe(0);
            expect(result[1]).toBe(3);
        });

        it('should return array of indices of array that sum is 6', () => {
            const arry = [3, 2, 4];

            const result = target.sum2(arry, 6);

            expect(result[0]).toBe(1);
            expect(result[1]).toBe(2);
        });
    });

    describe('Solution 3, 1 loop with Map', () => {
        it('should return array of indices of array that sum is 10', () => {
            const arry = [2, 5, 1, 8, 6];

            const result = target.sum3(arry, 10);

            expect(result.includes(0)).toBeTruthy();
            expect(result.includes(3)).toBeTruthy();
        });

        it('should return array of indices of array that sum is 6', () => {
            const arry = [3, 2, 4];

            const result = target.sum3(arry, 6);

            expect(result.includes(2)).toBeTruthy();
            expect(result.includes(1)).toBeTruthy();
        });
    });
});