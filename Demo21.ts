// class SelectGirl {
//   constructor(private girls: string[]) {}
//   getGirl(index: number): String {
//     return this.girls[index];
//   }
// }
// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

// class SelectGirl<T> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index];
//   }
// }

// //   const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]);
console.log(selectGirl.getGirl(1));
