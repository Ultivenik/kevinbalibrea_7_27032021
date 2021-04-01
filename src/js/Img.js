export default class Img {
    static create({source, altText})
    {
        const Elm = document.createElement("img")
        Elm.src = source
        Elm.alt = altText
        return Elm
    }
}