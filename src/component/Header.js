import DOMElement from "../js/DOMElement";
import Img from "../js/Img";

export default class Header {
    static create()
    {
        const header = DOMElement.create("header")
        const img = Img.create({source: "./logo.png", altText: "logo"})
        img.classList.add("mx-auto", "d-block", "w-3")

        header.appendChild(img)
        return header
    }
}