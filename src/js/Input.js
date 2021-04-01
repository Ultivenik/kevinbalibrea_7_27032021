import DOMElement from "./DOMElement"

export default class Input {
    static create(type, placeholder)
    {
        const Elm = DOMElement.create("input")
        Elm.type = type
        Elm.placeholder = placeholder
        return Elm
    }
}