import NumberSchema from "./NumberSchema.js"
import ArraySchema from "./ArraySchema.js"
import StringSchema from "./StringSchema.js"
import ObjectSchema from "./ObjectSchema.js"
export default class Validator {
    constructor() {
        this.rules = []
    }
    number() {
        return new NumberSchema()
    }
    array() {
        return new ArraySchema()
    }
    string() {
        return new StringSchema()
    }
    object() {
        return new ObjectSchema()
    }
}

