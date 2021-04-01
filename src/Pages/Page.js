import Header from "../component/Header";
import Main from "../component/Main";

export default class Page
{
    static create()
    {
        const header = Header.create()
        const main = Main.create()

        document.body.appendChild(header)
        document.body.appendChild(main)
    }
}