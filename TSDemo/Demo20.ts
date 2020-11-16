function join<JSPang>(first: JSPang, second: JSPang) {
  return `${first}${second}`;
}
join<string>("jspang", ".com");

function myFun<T>(params: Array<T>) {
  return params;
}
myFun<string>(["123", "456"]);

function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join1<number, string>(1, "2");
