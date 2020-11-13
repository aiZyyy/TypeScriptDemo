// function getTotal(one: number, two: number) {
//     return one + two;
//   }

//   const total = getTotal(1, 2);

function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);

function sayHello(): void {
  console.log("hello world");
}

function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}

function add({ one, two }: { one: number; two: number }) {
  return one + two;
} 

const total1 = add({ one: 1, two: 2 });

function getNumber({ one }: { one: number }): number {
  return one;
}

const one1 = getNumber({ one: 1 });
