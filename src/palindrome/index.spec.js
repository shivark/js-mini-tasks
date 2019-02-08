import target from './';

describe('palindrome', () => {
    it('should return true when a word is palindrome', () => {
        expect(target('level')).toBeTruthy();
        expect(target('Level')).toBeTruthy();
    });

    it('should return false when a word is not palindrome', () => {
        expect(target('shiva')).toBeFalsy();
    });

    it('should return true when a sentence is palindrome', () => {
        expect(target('A car, a man, a maraca')).toBeTruthy();
    });
});