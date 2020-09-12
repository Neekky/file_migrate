// import { printDeck, createDeck } from "./funcs";
// const deck = createDeck();
// printDeck(deck)
/**
 * 扑克牌小练习
 * 1.创建一副扑克牌（不包括大小王），打印该扑克牌
 * 2.使用枚举创造程序
 * 3.使用模块化
 * 4.用接口改造程序，加入大小王
 * 5.用类改造程序 ,增加洗牌功能
 */

import { Deck } from "./deck"

const deck = new Deck();
deck.shuffle();
console.log("===========洗牌之后===========")
deck.print();
const pokerResult = deck.publish();
console.log("===========发牌之后===========")

console.log('===========玩家1===========')
pokerResult.player1.print()

console.log('===========玩家2===========')
pokerResult.player2.print()

console.log('===========玩家3===========')
pokerResult.player3.print()

console.log('===========桌面剩余牌===========')
pokerResult.left.print()

