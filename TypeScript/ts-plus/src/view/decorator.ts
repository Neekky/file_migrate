
// class User3 {
//   @require
//   @range(3,5)
//   @descripition("账号")
//   loginid: string; //必须是3-5个字符
//   loginpwd: string; //必须是6-12个字符
//   age: number; //必须是0-100之间的数字
//   gender: "男" | "女";

//   validate() {

//   }

//   constructor() {
//     this.loginid = ''
//     this.loginpwd = ''
//     this.age = 1
//     this.gender = "男"
//   }
// }

// const u3 = new User3();

// 对用户对象中的数据进行验证
// function decTest(target: new (...args: any[]) => object) {
//   console.log('我要替换了')
//   return class B extends target {

//   }
// }

// function checkStr(str: string) {
//   return function (target: new (...args: any[]) => object) {

//   }
// }

// @decTest
// @checkStr('给一个函数调用')
// class Decorator {
// }

// const a = new Decorator();

// console.log(a)

// type constructor = new (...args: any[]) => object;

// function d1() {
//   console.log('d1')
//   return function (target: constructor) {
//     console.log('d1 decorator')
//   }
// }

// function d2() {
//   console.log('d2')

//   return function (target: constructor) {
//     console.log('d2 decorator')
//   }
// }
// 通过一个普通函数，返回一个装饰器
// @d1()
// @d2()
// class A {
//   constructor(public prop1: string) { }
// }


// class A {
//   @d()
//   prop1: string = '1'
//   @d()
//   static prop2: string = '2'
// }

// console.log((A.prototype as any).__props)
// console.log((A as any).__props)


// function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
//   // console.log(target,key,descriptor)
//   descriptor.enumerable = true;
// }
// function useless(target: any, key: string, descriptor: PropertyDescriptor) {
//   descriptor.value = function () {
//     console.warn(key + "方法已过期")
//   }
// }

// class A {

//   @enumerable
//   method1() {
//     console.log('method1')
//   }

//   @enumerable
//   @useless
//   method2() {
//     console.log('method2')
//   }
// }

// const a = new A();

// for (const key in a) {
//   console.log(key)
// }
// a.method1()
// a.method2()

// import "reflect-metadata";
// import { IsNotEmpty, validate, MinLength, MaxLength, Min, Max } from "class-validator"
// const key = "descripitor"
// // const key = Symbol.for("descripitor");

// function descriptor(descripition: string) {
//   return Reflect.metadata(key, descripition)
// }


// function printObj(obj: any) {
//   const cons = obj.__proto__.constructor
//   // 输出类的名字
//   if (Reflect.hasMetadata(key, cons)) {
//     console.log(Reflect.getMetadata(key, cons))
//   } else {
//     console.log(obj.__proto__.constructor.name)
//   }
//   // 输出所有的属性描述和属性值
//   for (const k in obj) {
//     if (Reflect.hasMetadata(key, obj, k)) {
//       console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`)
//     } else {
//       console.log(`\t${key}:${obj[key]}`)
//     }
//   }
// }

// @descriptor("用户")
// class User {
//   @IsNotEmpty({ message: "账号不能为空" })
//   @MinLength(5, { message: "账号至少输入5个字符" })
//   @MaxLength(12, { message: "账号至多输入12个字符" })
//   @descriptor("账号")
//   loginId: string | undefined

//   @descriptor("密码")
//   loginPwd: string = "1"

//   @Min(0, { message: "年龄最小值为0" })
//   @Max(120, { message: "年龄最大值为120" })
//   age: number | undefined
// }

// const u1 = new User()
// u1.loginId = "475383200"
// u1.loginPwd = "123456"
// u1.age = 23
// // printObj(u1)

// @descriptor("文章")
// class Article {
//   @descriptor('标题')
//   title: string = 'A'
//   @descriptor('内容')
//   content: string = "B"
//   @descriptor('日期')
//   date: Date = new Date()
// }

// const ar = new Article();
// ar.title = "xxxxx";
// ar.content = "熬点粥喝"
// ar.date = new Date();

// // printObj(ar)
// validate(u1).then(error => console.log(error))
// @Reflect.metadata("B", "一个类")
// class B {
//   @Reflect.metadata("prop", "一个属性")
//   prop1: string = "1"
// }

// const obj = new B()

// console.log(Reflect.getMetadata("B", B))
// console.log(Reflect.getMetadata("prop", obj, "prop1"))

// import axios from "axios"
// import { plainToClass, Type } from "class-transformer"
// class NewUser {
//   id: number | undefined
//   firstName: string | undefined
//   lastName: string | undefined
//   @Type(() => Number)
//   age: number = 1

//   getName() {
//     return this.firstName + " " + this.lastName
//   }

//   isAdult() {
//     return this.age > 36 && this.age < 60
//   }
// }

// axios.get("http://api.myjson.com/bins/rwr9w").then(
//   resp => resp.data
// ).then((users: NewUser[]) => {
//   for (const u of users) {
//     const user = plainToClass(NewUser, u)
//     console.log(user.getName(), user.isAdult(),typeof user.age,user.age)
//   }
// })
// import "reflect-metadata"

// class MyMath {
//   sum(a: number, @paramTest b: number) {
//     return a + b;
//   }
// }

// function paramTest(target: any, method: string, index: number) {
//   console.log(target, method, index)
// }

// class Eat {
//   @Reflect.metadata("a", "b")
//   breakfast: string | undefined

//   @Reflect.metadata("a", "b")
//   lunch: string | undefined
// }


class RegUser {
  loginId!: string
  
  loginPwd!: string
  
  age!: number
  
  pid!: string
  
  email!: string
  
  /**
   * 将用户保存到数据库
   */
  save() {
    // 验证处理

    // 通过后保存到数据库
  }
}

