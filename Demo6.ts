const numberArr = [1, 2, 3];

const numberArr1: number[] = [1, 2, 3];

const stringArr: string[] = ["a", "b", "c"];

const undefinedArr: undefined[] = [undefined, undefined];

const arr: (number | string)[] = [1, "string", 2];

const xiaoJieJies6: { name: string; age: Number }[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

//类似于Java的实体类
type Lady1 = { name: string; age: Number };

const xiaoJieJies66: Lady1[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

class Madam {
  name: string;
  age: number;
}

const xiaoJieJies666: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
