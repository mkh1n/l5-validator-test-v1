export default class ArraySchema{
    constructor(rules=[]){
        this.rules = [...rules, (el)=> Array.isArray(el)]
    }
    isValid(el){
        return this.rules.every((func)=>func(el)==true)
    }
    length(len){
        return new ArraySchema([...this.rules, (el)=>el.length == len])
    }
}
//test
