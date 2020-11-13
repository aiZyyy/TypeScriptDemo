class Person12 {
  constructor(public name: string) {}
}

const person12 = new Person12("jspang");
console.log(person12.name);

class Person122{
    constructor(public name:string){}
}

class Teacher extends Person122{
    constructor(public age:number){
        super('jspang')
    }
}

const teacher = new Teacher(18)
console.log(teacher.age)
console.log(teacher.name)