class Site {
  name(): void {
    console.log("Runoob asd")
  }
}
var obj = new Site();
obj.name();

let a: string = '123'

function sum(a: number, b: number): number {
  return a + b;
}

let num: number = sum(3, 4)

function isOdd(n: number): boolean {
  return n == 1
}
// 数组类型检查
let nums: any[] = [true, 1, 2, '123']
nums = [false]

let n: undefined = undefined

let name: string | undefined;

if (typeof name === "string") {
  // 类型保护
  name.length
}

let throwError = (msg: string) => {
  throw new Error(msg)
  console.log(123123)
}

function alwaysDoSomething(): never {
  while (true) {

  }
}
// 字符串字面量
let gender: "male" | "female"
// 数组字面量
let arr: []
// 对象字面量，必须要有字符串属性name，number属性age
// 接口替代
let user: {
  name: string
  age: number
}
user = {
  name: 'string',
  age: 123123
}
// 元组类型定义
let tu: [string, string, number]
tu = ['1', '1', 2]

// 类型别名-字面量类型
type name2 = string | 'string' | '123123' | '133123'
let qwe: name2 = 'sting'

// 类型别名
type Gender = '男' | '女'
type User = {
  name: string,
  age: number,
  gender: Gender
}

let u: User;

u = {
  name: 'zeng',
  age: 12,
  gender: '男'
}

function getUsers(g: Gender): User[] {
  return [{ name: 'asd', age: 1, gender: g }];
}

getUsers('女')

// 函数的相关约束
// 函数重载：在函数实现之前，对函数调用的多种情况进行声明
function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string): number | string {
  return <string>a + <string>b
}

let result = combine(3, 3)
// 可选参数：可以在某些参数名后加问号，表示该参数为可选
function sumall(a: number, b: number = 3, c?: number) {
  if (c) {
    return a * b * c
  }
  return a + b
}
sumall(1, 2, 3)

sumall(1)

/**
 *  扩展类型：类型别名、枚举、接口、类
 *  枚举通常用于约束某个变量的取值范围。
 *  字面量和联合类型配合使用，也可以达到同样的效果。
 * 
 */

// 扩展类型-枚举
// 字面量类型的问题
/**
 * 1.在类型约束的位置，会产生重复的代码，可以使用类型别名解决该问题
 */
let newGender: '男' | '女';
type newGender = '男' | '女';
function searchUsers(g: "男" | "女") {

}
function newSearchUsers(g: Gender) {

}

/**
 * 2.逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改。
 * 3.字面量类型不会进入到编译结果
 */
// let newGender: '男' | '女' 改为 let newGender: '帅哥' | '美女'，逻辑含义不变真实值被改变

enum Sex { male = '男', female = '女' }
let sex: Sex;
// 将逻辑含义赋值给性别变量，就不会存在大量修改,如果需要修改逻辑名称，点击没居中的逻辑名称按 F2
sex = Sex.male
sex = Sex.female
let male;
console.log(Sex['male']);
function searchSex() {

}

/**
 * 枚举的好处：
 * 1.将逻辑含义赋值给性别变量，就不会存在大量修改,如果需要修改逻辑名称，点击没居中的逻辑名称按 F2。
 * 2.枚举会出现在编译结果中，编译结果中表现为对象
 * 枚举的规则：
 * 1.枚举的字段的值可以是字符串或数字
 * 2.当为数字枚举时，如果不定义真实值，真实值自动自增赋值
 * 3.被数字枚举约束的变量，可以直接被赋值为数字，而字符串枚举则不允许，例如console.log(Sex['男'])会报错
 * 4.数字枚举的编译结果 和 字符串枚举的编译结果有差异
 * 
 */
// 数字枚举的编译结果--特殊处理
// var Level;
// (function (Level) {
//     Level[Level["level1"] = 5] = "level1";
//     Level[Level["level2"] = 6] = "level2";
//     Level[Level["level3"] = 7] = "level3"; // 7
// })(Level || (Level = {}));

enum Level {
  level1 = 5, // 5
  level2, // 6
  level3 // 7
}
enum age {
  age1, //0
  age2, //1
  age3, //2
}
console.log(age[0])

/**
 * 最佳实践：
 * 1.尽量不要在一个枚举中既出现字符串字段，又出现数字字段，开发这么多年没见过。
 * 2.使用枚举时，尽量使用枚举字段的逻辑含义名称，而不使用真实的值。
 */

function getLevel(lev: Level) {
  console.log(lev)
}
getLevel(Level.level2)

/**
 * 扩展知识：位枚举（枚举的位运算）
 * 针对的是数字枚举
 */
/**
 * 示例：文件权限，一个文件有这四个操作权限，如果想同时具备其中某几个权限该怎么办呢？
 * 我们可使用二进制上的1位，来设置文件有哪些权限
 */
enum Permission {
  Read = 1,   //2^0 0001
  Write = 2,  //2^1 0010
  Create = 4, //2^2 0100
  Delete = 8, //2^3 1000
}

/**
 * 1.如何组合权限
 * 位运算：两个数字换算成二进制后进行的运算
 * 或运算： 0001 或 0010 = 0011
 * 且运算： 0011 且 0010 = 0010
 * 异或运算：0011 异或 0010 = 0001 两个想同取0，不同取1
 */
// 组合权限
let p: Permission = Permission.Read | Permission.Write;
p = p | Permission.Delete;

/**
 * 2.如何判断是否拥有某个权限
 * 0011 0001
 */
function hasPermission(target: Permission, per: Permission) {
  return (target & per) === per
}
// 判断变量p是否拥有可读权限
console.log(hasPermission(p, Permission.Read))

/**
 * 3.如何删除某个权限
 * 
 */
p = p ^ Permission.Write;

console.log(hasPermission(p, Permission.Write))

// typescript模块化，我们常用的模块化是 ES6 和 commonJS。
/**
 * 在TS中如何导入一个模块、导出一个模块
 * 前端领域中的模块化标准：ES6、commonjs、amd、umd、system、esnext
 */

// TS如何书写模块化语句，TS中，导入和导出模块，统一使用ES6的模块化标准
import { sum as newSum, name as newName } from './myModule'
console.log(newSum(2, 5))
console.log(newName)

/**
 * 编译结果中的模块化，它是可配置的
 * TS中的模块化在编译结果中：
 * 1.如果编译结果的模块化标准是es6，那么结果没有区别
 * 2.如果编译结果的模块化标准是commonjs，那么导出的声明会变成exports的属性
 * 默认的导出会变成exports的default属性
 * 3.如果编译结果的模块化标准是commonjs，导入模块时，直接取属性
 */

import fs from "fs"
import { Interface } from 'readline';
import { ArrayHelper } from './ArrayHelp';
// fs.readFileSync('./web')

/**
 * 如何在TS中书写commonjs模块化代码
 * 格式规范
 * 导出：export = xxx
 * 导入：import xxx = require("xxx")
 */
exports = {
  name: 1,
  add: function () { console.log('asd') }
}

/**
 * 模块解析：应该从什么位置寻找模块
 * TS中，有两种模块解析策略
 * classic：经典模块解析策略
 * node：node解析策略（唯一的变化，是将js替换成ts）
 */

/** 接口：interface
 * 接口和类型兼容性
 * typescript的接口：用于约束类、对象、函数的契约（标准），它是必须要满足的标准
 * API文档：把前后端交互的接口都写成文档，API文档（弱标准）
 * 代码约束（强标准）
 */

// 1.接口如何约束对象,接口与类型别名、对象字面量有什么区别呢？
// 接口主要是进行约束类。
// 接口和类型别名一样不出现在编译结果中。
interface Aser {
  name: string,
  age: number,
  sayHello: () => void
}

let aser: Aser = {
  name: 'string',
  age: 123,
  sayHello: () => {
    return '123'
  }
}
// 2.接口约束函数
// 使用类型别名的方式去写函数约束
// type Condition = (n: number) => boolean
type Condition = (n: number) => boolean

function eat(food: number[], callback: limitFunc) {
  let s = 0;
  food.forEach(n => {
    if (callback(n)) {
      s += n
    }
  })
  return s
}

const eatResult = eat([1, 2, 3, 4, 51, 23, 42, 123], ele => ele % 2 !== 0)
console.log(eatResult);

// 使用接口去约束函数
interface limitFunc {
  (n: number): boolean
}

// 接口可以继承
// class Mycomponent extends React.Component{
//
// }

interface A {
  T1: string
}
interface B extends A {
  T2: number
}
// 在TS里接口可以多继承，可以通过接口之间的继承，实现多种接口的组合
interface C extends A, B {
  T3: Function
}

let TT: B = {
  T1: '123',
  T2: 123
}

let TTT: C = {
  T1: '123',
  T2: 123,
  T3() { }
}
// 但是如果使用类型别名，它是没有继承的，
// 但我们可以用 & 符号，实现类似的效果，它叫做交叉类型
type D = {
  T1: string
}
type E = {
  T2: number
}
type F = {
  T3: Function,
  // T1: number
} & D & E

let CC: F = {
  T1: '1',
  T2: 22,
  T3() { }
}
/**
 * 类型别名的 & 符号交叉类型和接口的继承，区别是什么：
 * 子接口不能覆盖父接口的成员
 * 交叉类型会把想同成员的类型进行交叉
 */
CC.T1

/**
 * readonly 修饰符
 * 只读修饰符，修饰的目标是只读的，
 * 在接口和类型别名里都能够使用
 */

interface PromiseRead {
  readonly id: string,
  name: string,
  age: number
}

let superRead2 = {
  id: '123123',
  name: 'zc',
  age: 12,
  asd: 123213
}
let superRead: PromiseRead = {
  id: '123123',
  name: 'zc',
  age: 12,
  // asd:123213
}

type PromiseWrite = {
  readonly id: string,
  name: string,
  readonly age: number
}

let read: PromiseRead = {
  id: '123123',
  name: 'zc',
  age: 12
}

let write: PromiseWrite = {
  id: '123123',
  name: 'zc',
  age: 12.123213123
}

console.log(write.age.toFixed(2))
// readonly修饰数组，表示为只读的数组，不能使用改变数组的方法，例如splice
// 它只起作用在编译之前，只读修饰符不在编译结果中
let arr3: readonly number[] = [3, 4, 6];
arr3 = [4, 5, 6, 7]

/**
 * 类型兼容性
 * 鸭子辨型法（子结构辨型法）：
 * 目标类型需要某一些特征，赋值的类型只要能满足该特征即可。
 * 基本类型判定：使用完全匹配方式。
 * 对象类型判断：鸭子辨型法，
 * 当直接使用对象字面量赋值的时候，会进行更加严格的判断，因为你已经在明确的定义它的字段了，那是没意义的。
 * 而如果是将复制对象先定义成一个变量，再赋值给接口定义过的类型，则判断会宽松一些，会采用鸭子辩型法。
 */

/**
 * 类型断言
 * <类型>值 或 值 as 类型
 * 非空断言
 * 在数据之后加上一个！，告诉TS，不用考虑该数据为空的情况
 */
interface Duck {
  sound: '嘎嘎嘎',
  swin(): void,
  age?: number
}

// 这个人的对象有鸭子的特征
let person = {
  name: "伪装成鸭子的人",
  age: 11,
  sound: <"嘎嘎嘎">'嘎嘎嘎',
  swin() {
    console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音")
  }
}

let duck: Duck = person

/**
 * 函数类型的类型兼容性判定，一切都无比自然
 * 1.函数参数怎么处理的，传递给目标函数的参数可以少，但是不可以多。
 * 2.返回值：要求返回则必须返回，且类型要匹配
 */

type ConditionRun = (n: number, i: number) => boolean

function run(food: number[], callback: ConditionRun):number {
  let s = 0;
  food.forEach((n, i) => {
    if (callback(n, i)) {
      s += n
    }
  })
  return s
}

const runResult = run([1, 2, 3, 4, 51, 23, 42, 123], ele => ele % 2 !== 0)
console.log(runResult);

interface A1 {
  a: string,
  b: string
}
interface A2 {
  c: number,
  d: number
}

type arrType = (A1 | A2)[]
let arr4: arrType = [{ a: '1', b: '1', c: 1, d: 2 }, { a: '2', b: '3', c: 2 }]


/**
 * TS中的类
 * 面向对象思想
 * 基础部分，学习类的时候，仅讨论新增的语法部分,抽象类、抽象方法
 * 
 * 类的属性：
 * 在类中定义属性，需要使用属性列表来描述类中的属性.
 * 属性的舒适化检查：
 * "strictPropertyInitialization": true
 * 属性的初始化位置：
 * 1.构造函数中
 * 2.属性默认值
 * 
 * 属性可以修饰为可选的，通过在属性后面加问号？
 * 属性可以修饰为只读的，有的属性一旦完成初始化就不能再改变。
 * 
 * TS的类中，可以使用访问修饰符，分别是 public、private 和 protected。
 * 访问修饰符可以控制类中的某个成员的访问权限
 * public：默认的访问修饰符，改开的，所有的代码均可访问
 * private：私有的访问修饰符，只有在类中可以访问，出了类的范围就用不了了
 * protected：修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 
 * 属性简写
 * 属性的语法糖，
 * 如果确认其是公有属性，
 * 且这个属性通过接收参数直接赋值，并且不做其他处理，可以简写，在函数参数前加访问修饰符
 * 
 */
class AbstractUser {
  readonly id: number
  gender: "男" | "女" = "男" //属性默认值
  pid?: string //属性可以修饰为可选的
  private _publishNumber: number = 3; //每天可发布文章数量
  private _curNumber: number = 0 //当前已发布文章数量

  constructor(public name: string, private _age: number, gender: "男" | "女" = "男") { //构造函数中
    this.id = Math.random();
  }

  public publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log("发布一篇文章" + title);
      this._curNumber++;
    } else {
      console.log("今日发布文章到达上限");
    }
  }
  
  set age(value: number) {
    if (value < 0) {
      this._age = 0
    } else if (value > 200) {
      this._age = 200;
    } else {
      this._age = Math.floor(value);
    }
  }
  get age() {
    return this._age
  }
}

const abs = new AbstractUser('zc', 21, '男')
abs.gender = "女"
abs.pid = "123123"
abs.publish("哈哈")
abs.publish("哈哈")
abs.publish("哈哈")
abs.publish("哈哈")
abs.publish("哈哈")


/**
 * 访问器
 * 作用：用于控制属性的读取和赋值
 */
abs.age = 24
console.log('年龄', abs.age)


/** 
 * 泛型
 * 有时书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）
 * 
 * 泛型：是指附属于函数、类、接口、类型别名之上的类型，
 * 它相当于是一个类型的变量，在定义时，如果无法预先知道具体的类型，可以用该变量来代替
 * 只有到调用时，才能确定它的类型，使用泛型我们能获得类型更加一致的检查。
 * 
 * 很多时候TS会智能的根据传递的参数，推导出泛型的具体类型
 * 在调用函数时，如果未指定类型，则会推导类型
 * 前提是函数的参数使用了泛型才可以
 * 如果无法完成推导，并且有没有传递具体的类型，默认为空对象
 * 
 * 我们还可以给泛型传递默认值
 */

// 在函数中使用泛型：在函数名之后写上 <泛型名称>
// 他还能够进行类型推导，在调用函数时，如果未指定类型，则会推导类型
function takeSomething<T = number>(arr: T[], n: number): T[] {
  if (n >= arr.length) {
    return arr;
  }
  const newArr: T[] = [];
  for (let i = 0; i < n; i++) { 
    newArr.push(arr[i]);
  }
  return newArr
}

// 以字符串形式调用函数
const stringArr = takeSomething<string>(['1', '2', '3', '4', '5', '6'], 1)

// 以数字形式调用函数
const numberArr = takeSomething([1, 2, 3, 4, 5, 6], 1)

const newArr = takeSomething([1, 2, 3, 1, 2, 3, 1], 4)
console.log(newArr)

/**
 * 如何在类型别名、接口、类中使用泛型
 * 
 * 直接在名称后写上 <泛型名称>
 */
// 类型别名使用泛型，定义了一个回调函数：判断数组中的某一项是否满足条件
type callback<T> = (n: T, i: number) => boolean;
// 接口使用泛型
interface callback2<T> {
  (n: T, i: number): boolean
}

function filter<T>(arr: T[], callback: callback<T>): T[] {
  const newArr: T[] = [];
  arr.forEach((n, i) => {
    if (callback(n, i)) {
      newArr.push(n)
    }
  })
  return newArr
}

const arr2 = [29, 23, 14, 21, 55, 1, 1, 23, 46, 6, 4, 8, 5]

console.log(filter(arr2, n => n % 2 !== 0))

/**
 * 在类中使用泛型
 */

const helper = new ArrayHelper<number>([3, 1, 2, 4, 5, 7, 6, 9, 8])
helper.shuffle()
console.log(helper.arr)

helper.take(2)

/**
 * 泛型约束，它是用于限制泛型的取值
 * 我们可以使用接口、类型别名、类来约束泛型
 * 使用场景如下
 */
const helper2 = new ArrayHelper<string>(['1', '2', '3'])
/**
 * 将某个对象的name属性的每个单词的首字母大写，然后返回该对象
 */
// 通过接口约束泛型
interface hasNameProperty1 {
  name: string
}
// 通过类型别名约束泛型
type hasNameProperty2 = {
  name: string
}
function nameToUpperCase<T extends hasNameProperty2>(obj: T): T {
  obj.name = obj.name
    .split(" ")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join(" ")
  return obj
}

const o = {
  name: "neeky zeng",
  age: 22,
}

const newO = nameToUpperCase(o);

console.log(newO.name)

/**
 * 多泛型
 * 
 */

//  将两个数组进行混合
function mixinArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  let result: (T | U)[] = []
  let min: number = Math.min(arr1.length, arr2.length)
  let maxArr: (T | U)[] = arr1.length > arr2.length ? arr1.splice(min) : arr2.splice(min)
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  console.log(maxArr)
  if (maxArr) result.push(...maxArr);
  return result;
}

console.log(mixinArray([1,2,3,4,5,6,7],['a','b','c']))