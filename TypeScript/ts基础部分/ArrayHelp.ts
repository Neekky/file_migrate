/**
 * 在类中使用泛型
 */
export class ArrayHelper<T> {
  
  constructor(public arr: T[]) {

  } 

  take(n: number): T[] {
    if (n >= this.arr.length) {
      return this.arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
      newArr.push(this.arr[i]);
    }
    return newArr
  }

  private getRandom(min: number, max: number) {
    const dec = max - min;//求插值
    return Math.floor(Math.random() * dec + min)
  }

  shuffle() {
    for (let i = 0; i < this.arr.length; i++) {
      const targetIndex = this.getRandom(0, this.arr.length);
      const temp = this.arr[i];
      this.arr[i] = this.arr[targetIndex];
      this.arr[targetIndex] = temp;
    }
  }
}