// 索引器
export const obj = {
  name: 'asdf',
  age: 22,
  'my-pid': 430215448864489875
}
for (const key in obj) {
  console.log(key, obj[key])
}

export const methodName = "dance"

export class User {
  [prop: string]: string | number | { (): void }
  constructor(
    public name: string,
    public age: number
  ) { } 
  [methodName]() {
    console.log("dance")
    return this.name
  }
}
export const u1 = new User('zc', 123)
u1['dance']()
console.log(u1["name"])
u1.pid = "45642313"
console.log(u1.pid)

const arr = new Array()
console.log(arr[3])

class MyArray {
  // 这就是索引器，
  [index: number]: string | number | object
  0 = 1
  1 = '3123'
  2 = {
    1: 123,
    a: '12313'
  }
}

const myArr = new MyArray()

myArr[3] = 24
myArr[4] = '24'

const arr2:number[] = []
arr2[0] = 1;
arr2["0"] = 3;
console.log(arr2[0]);

// 索引器的值必须一样，这样子是防止arr[0]，arr["0"]的情况
class A{
  [prop:string] :number | string
}

const a = new A()
a[0] = 12