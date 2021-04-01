export default class DOMElement {
    static create(elm)
    {
        const Elm = document.createElement(elm)
        return Elm
    }
}