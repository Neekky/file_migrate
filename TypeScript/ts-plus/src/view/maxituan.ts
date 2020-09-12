
import { Lion, Tiger, Monkey, Dog, Animal, hasFireShow, hasWisdomShow } from "./animals";

const animals: Animal[] = [
  new Lion("王富贵", 12),
  new Tiger("阿飞", 21),
  new Monkey("小六", 7),
  new Dog("棉花糖", 2),
  new Dog("点点", 4),
]

// 1.所有动物打招呼
// animals.forEach(a => a.sayHello());

// 2.所有会火圈表演的动物，完成火圈表演

// 类型保护函数
animals.forEach(a => {
  if (hasFireShow(a)) {
    a.singleFire();
    a.doubleFire();
  }
});

// 所有会智慧表演的动物，完成智慧表演
animals.forEach(a => {
  if (hasWisdomShow(a)) {
    a.suanshuti();
    a.dance();
  }
});

class A {
  a1: string = ""
  a2: string = ""
  a3: string = ""
}

class B {
  b1: number = 0
  b2: number = 0
  b3: number = 0
}

// 接口继承类
interface C extends A, B {

}

const c: C = {
  a1: "1",
  a2: "1",
  a3: "1",
  b1: 0,
  b2: 0,
  b3: 0,
}