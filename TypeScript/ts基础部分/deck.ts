import { Card, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enums";

interface PublishResult {
  player1: Deck,
  player2: Deck,
  player3: Deck,
  left: Deck
}

export class Deck {
  private cards: Card[] = [];
  // 允许传参，传参则使用卡牌参数，没传参则默认生成54张牌  
  constructor(cards?: Card[]) {
    if (cards) {
      this.cards =cards;
    } else {
      this.init()
    }
  }
  private init() {
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
      for (const c of colors) {
        // 根据类型兼容性，定义变量传入deck而不报错
        const card: NormalCard = {
          color: c,
          mark: m,
          getString() {
            return this.color + this.mark
          }
        }
        this.cards.push(card)
      }
    }
    let joker: Joker = {
      type: 'small',
      getString() {
        return "jo";
      }
    }
    this.cards.push(joker)
    joker = {
      type: 'big',
      getString() {
        return "JO";
      }
    }
    this.cards.push(joker)
    return Deck;
  }
  print() {
    let result = '\n';
    this.cards.forEach((card, i) => {
      let str = card.getString();
      result += str + "\t";
      if ((i + 1) % 6 === 0) {
        result += "\n";
      }
    })
    console.log(result)
  }
  /**
     * 洗牌-打乱cards数组的顺序
     * 有很多种方式
     */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const targetIndex = this.getRandom(0, this.cards.length);
      const temp = this.cards[i];
      this.cards[i] = this.cards[targetIndex];
      this.cards[targetIndex] = temp;
    }
  }
  /**
   * 发完牌后，得到的结果有4个card数组[]
   */
  publish(): PublishResult {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck
    player1 = this.takeCard(17);
    player2 = this.takeCard(17);
    player3 = this.takeCard(17);
    left = new Deck(this.cards);
    return {player1, player2, player3, left}
  }

  private takeCard(n: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < n; i++) {
      cards.push(<Card>this.cards.shift())
    }
    return new Deck(cards)
  }
  /**
   * 无法取到最大值
   * @param min 
   * @param max 
   */
  private getRandom(min: number, max: number) {
    const dec = max - min;//求插值
    return Math.floor(Math.random() * dec + min)
  }
}