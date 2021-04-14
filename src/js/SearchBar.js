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
        iconSearch.classList.add("fas", "fa-search", "fs-3", "position-absolute", "end-0", "me-3", "mt-2")

        row.appendChild(childRow)
        childRow.appendChild(inputGroup)
        inputGroup.appendChild(input)
        inputGroup.appendChild(iconSearch)

        return row
    }

}