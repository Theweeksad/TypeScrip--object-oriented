console.log('Math.PI', Math.PI);
console.log('MAth.max', Math.max(1,2,3,8,4,0));

class MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    console.log(numbers)
    return numbers.reduce((max, item) => max >= item ? max: item, 0);
  }
}

// const math = new MyMath();
// math.PI;

console.log('MyMath',MyMath.PI);
console.log('MyMath.max', MyMath.max(1,2,3,3,4,5,5678))
const numbers = [12,2,3,34,434,23,2,12321312]
console.log('MyMath.max', MyMath.max(...numbers))
console.log('MyMath.max', MyMath.max(-1,-9,-8))
