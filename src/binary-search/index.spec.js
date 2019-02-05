import target from './index';

describe('binary search', () => {
    const oddArray = [3, 4, 7, 9, 24, 64, 35, 34, 67, 45, 70]; //11
    const evenArray = [3, 4, 7, 9, 24, 64, 35, 34, 67, 45]; // 10

    it('should return item index in even length array', () => {
        expect(target(evenArray, 24)).toBe(4);
    });

    it('should return item index in odd length array', () => {
        expect(target(oddArray, 24)).toBe(4);
    });

    it('should return -1 when item does not exists in even length array', () => {
        expect(target(evenArray, 36)).toBe(-1);
    })

    it('should return -1 when item does not exists in odd length array', () => {
        expect(target(oddArray, 71)).toBe(-1);
    })

    it('should return item in end start of the array', () => {
        expect(target(oddArray, 3)).toBe(0);
    });

    it('should return item in the end of the array', () => {
        expect(target(oddArray, 70)).toBe(10);
    });
});


