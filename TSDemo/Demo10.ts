class Lady {
  content = "Hi，帅哥";
  sayHello() {
    return this.content;
  }
}
class XiaoJieJie10 extends Lady {
  sayLove() {
    return "I love you";
  }
}

// const goddess = new Lady();
// console.log(goddess.sayHello());

const goddess1 = new XiaoJieJie10();
console.log(goddess1.sayHello());
console.log(goddess1.sayLove());

class XiaoJieJie122 extends Lady {
  sayLove() {
    return "I love you!";
  }
  sayHello() {
    return super.sayHello() + "。你好！";
  }
}
