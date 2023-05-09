export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomeThing() {
    console.log('dooo')
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
      console.log(`woof! ${this.name}` )
    }
    this.doSomeThing();
  }

  move() {
    //coed
    console.log('moving as a dog');
    super.move();
  }
};

const cheis = new Dog('cheis',  'mauro');
// cheis.name = 'other name';  no lo puedo modificar
cheis.woof(1);
// cheis.doSomeThing();
cheis.move();
