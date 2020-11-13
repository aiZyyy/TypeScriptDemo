// const screenResume = (name: string, age: number, bust: number) => {
//   age < 24 && bust >= 90 && console.log(name + "进入面试");
//   age > 24 || (bust < 90 && console.log(name + "你被淘汰"));
// };

// screenResume("大脚", 18, 94);

// const getResume = (name: string, age: number, bust: number) => {
//   console.log(name + "年龄是：" + age);
//   console.log(name + "胸围是：" + bust);
// };
// getResume("大脚", 18, 94);

interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}

// const screenResume = (girl: Girl) => {
//   girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//   girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
// };

// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
// };
const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 22,
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
};

// screenResume(girl);
getResume(girl);
