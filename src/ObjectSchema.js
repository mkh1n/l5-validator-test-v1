export default class ObjectSchema{
    isValid(el){
       return Object.keys(this.userShape)
       .map((key)=>this.userShape[key].isValid(el[key]))
       .every((bool)=>bool==true)
    }
    shape(userShape){
        this.userShape = userShape
        return this
    }
}
