export default class StringSchema {
  // eslint-disable-next-line class-methods-use-this
  isValid(el) {
    return typeof el === 'string';
  }
}
