// 设计模式-模板模式
export abstract class Chess {
  x: number = 0
  y: number = 0
  abstract readonly name: string;
  move(targetX: number, targetY: number): boolean {
    console.log("1.边界判断")
    console.log("2.目标位置是否有己方棋子")
    if (this.rule(targetX, targetY)) {
      this.x = targetX;
      this.y = targetY;
      console.log(this.name + '移动成功')
      return true
    }
    console.log(this.name + '移动失败')
    return false
  }
  protected abstract rule(targetX: number, targetY: number): boolean;
}

// 抽象成员的三种实现方式
class Horse extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return true
  }
  // 将公共的功能方法抽出去所存在的问题
  // 1.重复的调用方法。
  // 2.方法调用的顺序和方式可能发生错误，没有强约束。
  readonly name: string = '马'
}

class Pao extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return false
  }
  readonly name: string;
  constructor() {
    super()
    this.name = "炮"
  }

}

class Soldier extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return true
  }
  get name() {
    return "兵"
  }
}

const h = new Horse();
const p = new Pao();
const s = new Soldier()
// s.move(3, 4)
// p.move(3, 4)
// h.move(3, 4)
// const c = new Chess()

// console.log(h.name, p.name, s.name)

// console.log(Number.MAX_VALUE)

class User {
  static users: User[] = [];

  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: number,
  ) {
    // 需要将新建的用户加入到数组中
    User.users.push(this);
  }

  sayHello() {
    console.log(`Hello! I am ${this.name}，is ${this.age} years old, my account is ${this.loginId}`)
  }

  static login(loginId: string, loginPwd: string): User | undefined {
    return User.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
  }
}
// 登录

const u1 = new User("38413", "123123", "Jack", 23)
const u2 = new User("65872", "123123", "Piter", 25)
const u3 = new User("54987", "123123", "Lucy", 21)

// u1.sayHello();
// u2.sayHello();
// u3.sayHello();
// console.log(User.users)

const result = User.login("38413", "123123")
if (result) {
  result.sayHello()
} else {
  console.log('登陆失败，账号或密码错误！')
}

// 设计模式-单例模式
class Board {
  width: number = 500;
  height: number = 700;

  init() {
    console.log("初始化棋盘");
  }

  private constructor() { }

  // 单例模式-方法一 
  // 问题一: 在一开始就创建好棋盘,而不是需要时创建
  // 问题二: 不能配置一些代码
  static readonly singleBoard:Board = new Board();

  // 单例模式-方法二
  private static _board?: Board;

  static createBoard():Board {
    if (this._board) {
      return this._board;
    }
    this._board = new Board()
    return this._board;
  }
}

const b = Board.createBoard();
const c = Board.createBoard();