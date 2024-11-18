const MyName = 'Santiago';
const MyAge = 24;

const suma = (a: number, b: number) => {
  return a + b;
};

class Persona {
  /*
  private age;
  private name;

  constructor(age: number, name: string){
    this.age = age;
    this.name = name;
  }
  */

  // Este constructor se puede resumir sin tanta declaracion en la siguiente linea
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `mi nombre es ${this.name}, ${this.age}`;
  }
}

const Santiago = new Persona(MyAge, MyName);
Santiago.getSummary();
