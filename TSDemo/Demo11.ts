class Person {
  public name: string;
  public sayHello() {
    console.log(this.name + " say Hello");
  }
}

const person = new Person();
person.name = "jspang.com";

console.log(person.name);
