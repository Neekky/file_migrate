import { number } from "prop-types";

const a: string = "abc"
// 让b的类型与a的类型保持一致
let b: typeof a = "1213"

class User2 {
  loginid!: string;
  loginpwd!: string;
}

function createUser(cls: typeof User2): User2 {
  return new cls();
}

const u4 = createUser(User2)

interface UserInfo {
  loginId: string
  loginpwd: string
  age: number
}

function printUserProperty(obj: UserInfo, prop: keyof UserInfo) {
  console.log(obj[prop]);
}

const UI: UserInfo = {
  loginId: 'string',
  loginpwd: 'string',
  age: 2
}

printUserProperty(UI, "loginpwd")

type Obj = {
  [p in keyof UserInfo]: string
}
type Obj2 = {
  [p in keyof UserInfo]: UserInfo[p]
}
// 根据已知类型强化出新的类型
type UserInfoReadonly = {
  readonly [p in keyof UserInfo]: UserInfo[p]
}

// 增加泛型，制作成通用类型
type AllCanUse<T> = {
  readonly [p in keyof T]: T[p]
}



const uuu: Obj = {
  loginId: 'string',
  loginpwd: 'string',
  age: '2'
}

const u12: Obj2 = {
  loginId: 'string',
  loginpwd: 'string',
  age: 2
}
uuu.loginId = '123'


type T = "男" | "女" | null | undefined;

type NEWT = Exclude<T, null | undefined>

type NEWT2 = Extract<T, null | undefined>

type str = string | null | undefined;

// 剔除null、undefined
type strNotEmpty = NonNullable<str>

type func = () => number

// infer 推断
type returnType1 = ReturnType<func>

function sum(a: number, b: number) {
  return a.toString() + b;
}

let aa: ReturnType<typeof sum>

console.log(typeof sum)

// 获取构造函数类型的实例类型

class Desk {
  private log: string | undefined
  constructor(a: any) {
    this.log = a
  }
}

let ddd: InstanceType<typeof Desk>

type TwoParamsConstructor = new (arg1: any, arg2: any) => Desk

const A: TwoParamsConstructor = class Test extends Desk {
  constructor(arg1: any, arg2: any) {
    super(arg1)
  }
}

type gzhs = InstanceType<TwoParamsConstructor> 