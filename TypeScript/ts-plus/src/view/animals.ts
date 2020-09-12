import { IFireShow, IWisdomShow, IBalanceShow } from "./interfaces";

// 接口对类的约束
export abstract class Animal {
  abstract type: string;

  constructor(
    public name: string,
    public age: number
  ) { }

  sayHello() {
    console.log(`各位观众，大家好，我是${this.type}，我叫${this.name}，今年${this.age}岁`)
  }
}

export class Lion extends Animal implements IFireShow {
  type: string = "狮子"
  singleFire() {
    console.log(`${this.name}穿越了单火圈`)
  }
  doubleFire() {
    console.log(`${this.name}穿越了双火圈`)
  }
}

export class Tiger extends Animal implements IFireShow {
  type: string = "老虎"
  singleFire() {
    console.log(`${this.name}穿越了单火圈`)
  }
  doubleFire() {
    console.log(`${this.name}穿越了双火圈`)
  }
}

export class Monkey extends Animal implements IBalanceShow {
  type: string = "猴子"
  dumuqiao() {
    console.log(`${this.name}表演了走独木桥`)
  }
  zougangsi() {
    console.log(`${this.name}表演了走钢丝`)
  }
}

export class Dog extends Animal implements IWisdomShow {
  type: string = "狗狗"
  suanshuti() {
    console.log(`${this.name}表演了做算术题`)
  }
  dance() {
    console.log(`${this.name}表演了跳舞`)
  }
}

export function hasWisdomShow (ani:object): ani is IWisdomShow {
  if((ani as IWisdomShow).suanshuti && (ani as IWisdomShow).dance) {
    return true;
  } else {
    return false;
  }
}

export function hasFireShow(ani:object): ani is IFireShow {
  if((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
    return true;
  } else {
    return false;
  }
}