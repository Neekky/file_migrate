import { Deck, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enums";

export function createDeck(): Deck {
  const deck: Deck = [];
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
      deck.push(card)
    }
  }
  let joker: Joker = {
    type: 'small',
    getString() {
      return "jo";
    }
  }
  deck.push(joker)
  joker = {
    type: 'big',
    getString() {
      return "JO";
    }
  }
  deck.push(joker)
  return deck;
}

export function printDeck(deck: Deck) {
  let result = '\n';
  deck.forEach((card, i) => {
    let str = card.getString();
    result += str + "\t";
    if ((i + 1) % 6 === 0) {
      result += "\n";
    }
  })
  console.log(result)
}

export function findCards(color: Color) {

}
