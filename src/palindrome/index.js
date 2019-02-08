const palindrome = s => {
    let n = s.toLowerCase().replace(/\W/g, '');
    let r = n.split('').reverse();

    return r.join('') === n;
};

export default palindrome;