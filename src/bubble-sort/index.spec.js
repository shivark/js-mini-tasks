import target from './';

describe('Bubble sort', () => {
    const arr = [6, 10, 1];

    it('should sort the array', () => {
        let actual = target(arr);

        expect(actual[0]).toBe(1);
        expect(actual[1]).toBe(6);
        expect(actual[2]).toBe(10);
    });
});