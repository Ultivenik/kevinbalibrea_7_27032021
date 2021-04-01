import './style.css'
import Page from './Pages/Page'

class App {
    static create()
    {
        Page.create()
    }
}
document.addEventListener("DOMContentLoaded", App.create)