export default class NumberSchema {
  constructor(rules = []) {
    this.rules = [...rules, (el) => typeof el === 'number'];
  }

  isValid(el) {
    return this.rules.every((func) => func(el) === true);
  }

  even() {
    return new NumberSchema([...this.rules, (el) => el % 2 === 0]);
  }

  odd() {
    return new NumberSchema([...this.rules, (el) => el % 2 !== 0]);
  }
}
