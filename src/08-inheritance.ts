export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('o');
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal{

  constructor(
    name: string,
    public owner: string
    ) {
      super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('WOOFFF!!')
    }
  }
};

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting())

const cheis = new Dog('cheis',  'mauro');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
