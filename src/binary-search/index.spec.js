import target from './index';
// [2,5,26,576,123,673,324]
fdescribe('binary search', () => {
    it('should return middle item', () => {
        expect(target([3, 4, 7, 9, 24, 64, 35, 34, 67, 45], 24)).toBe(4);
    })
});