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

        const div = DOMElement.create("div")
        div.classList.add("d-flex", "justify-content-between","flex-wrap", "body-search")
        input.addEventListener("input", (e) =>{
            let word = e.target.value

            // Filtering by recipe, ingredients, ustensils or appliance
            // const filterRecipe = recipeArray.filter(filtered => Algo.QuickSort(filtered.name).indexOf(word) > 0 ||
            //                                                     Algo.QuickSort(filtered.ingredients).indexOf(word) > 0 ||
            //                                                     Algo.QuickSort(filtered.ustensils).indexOf(word) > 0 ||
            //                                                     Algo.QuickSort(filtered.appliance).indexOf(word) > 0
            // )
            // for (let recipe of filterRecipe) {
            //     const cards = Card.create(recipe.name, recipe.time, recipe.description, recipe)
            //     div.appendChild(cards)
            // }
            for (let i = 0; i < recipeArray.length; i++) {
                const element = recipeArray[i];
                let cards = Card.create(element.name, element.time, element.description, element)
                if (Algo.QuickSort(element.name).indexOf(word) > -1) {
                    div.appendChild(cards)
                }
                if (word.length > 2) {
                    document.querySelector("main").appendChild(div)
                }else{
                    div.remove()
                }
            }
        })
        input.addEventListener("keydown", SearchBar.tagResult)
        return row
    }
    // creating a tag on submit
   static tagResult(e)
    {
        const parent = e.target.parentElement
        const word = e.target.value
        const tag = SearchTag.create(word)
        if (e.key === "Enter") {
            parent.parentElement.appendChild(tag)
        }
    }
}