const fizzBuzz = max => {
    let s = '';
    for (var i = 1; i < max + 1; i++) {
        s += ` ${getNext(i)}`;
    }

    return s.trim();
};

const getNext = i => {
    return !(i % 15) && 'fizzbuzz' || !(i % 3) && 'fizz' || !(i % 5) && 'buzz' || i;
};

// const getNext = i => {
//   switch (true) {
//     case !(i % 15):
//       return "fizzbuzz";

//     case (!(i % 3)):
//       return "fizz";

//     case (!(i % 5)):
//       return "buzz";

//     default:
//       return i;
//   }
// }

export default fizzBuzz;