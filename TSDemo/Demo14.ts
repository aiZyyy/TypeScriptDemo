// class Person14 {
//     public readonly _name :string;
//     constructor(name:string ){
//         this._name = name;
//     }
// }

// const person14 = new Person14('jspang')
// // person14._name= '谢广坤'
// console.log(person14._name)

abstract class Girl14{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
}

class Waiter extends Girl14{
    skill(){
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl14{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl14{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
    }
}