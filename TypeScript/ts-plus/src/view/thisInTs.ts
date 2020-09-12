interface IUser {
  name: string,
  age: number,
  // 约定this的指向
  sayHello(this: IUser): void
}

// const u:IUser = {
//   name: "ssf",
//   age: 33,
//   sayHello() {
//     console.log(this, this.name, this.age)
//   }
// }
// u.sayHello()
// const say = u.sayHello;
// say()  // 此时say的this指向了undefined

class UserI {
  constructor(
    public name: string,
    public age: number
  ) { }
  sayHello(this:UserI) {
    console.log(this, this.name, this.age)
  }
}

const u = new UserI('zc', 22)
const say = u.sayHello;
// say()  // 此时say的this指向了undefined