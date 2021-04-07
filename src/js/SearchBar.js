import DOMElement from "./DOMElement"
import Input from "./Input"
import SearchTag from "./SearchTag"
import Card from "./Cards"
import recipes from "./recipes"
import Algo from "./Algo"

const recipeArray = recipes.recipes
export default class SearchBar
{
    static create()
    {
        const row = DOMElement.create("div")
        const childRow = DOMElement.create("div")
        const inputGroup = DOMElement.create("div")
        const input = Input.create("search", "Rechercher un ingrédient, appareil, ustensiles ou une recette")
        const iconSearch = DOMElement.create("i")

        row.classList.add("row")
        childRow.classList.add("mx-auto")
        inputGroup.classList.add("input-group", "mb-3")
        input.classList.add("form-control", "p-3", "bg-light")
        iconSearch.classList.add("fas", "fa-search", "fs-3", "position-absolute", "end-0")

        row.appendChild(childRow)
        childRow.appendChild(inputGroup)
        inputGroup.appendChild(input)
        inputGroup.appendChild(iconSearch)

        input.addEventListener("input", SearchBar.mainSort)
        input.addEventListener("keydown", SearchBar.tagResult)
        return row
    }
    // creating a tag on submit
   static tagResult(e)
    {
        let parent = e.target.parentElement
        let word = e.target.value
        let tag = SearchTag.create(word)
        if (e.key === "Enter") {
            parent.parentElement.appendChild(tag)
        }
    }

    static mainSort(e)
    {
        let word = e.target.value
        let div = DOMElement.create("div")
        div.classList.add("d-flex", "justify-content-between", "body-search")
        let recipes = recipeArray.map(item => {return item})
        let arr = []
        recipes.forEach(filter =>{
            arr.push(filter.name)
            if (Algo.QuickSort(arr).indexOf(word) > 0) {
                let cards = Card.create(filter.name, filter.time, filter.description, filter)
                div.appendChild(cards)
            }
        })
        document.querySelector("main").appendChild(div)
    }
}