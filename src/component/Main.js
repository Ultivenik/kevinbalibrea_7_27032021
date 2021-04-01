import DOMElement from "../js/DOMElement"
import FilterCategory from "../js/FilterCategory"
import SearchBar from "../js/SearchBar"
import recipes from "./../js/recipes"

const recipesList = recipes.recipes
export default class Main {
    static create()
    {
        const main = DOMElement.create("main")
        const searchBar = SearchBar.create()
        const filterContainer = DOMElement.create("div")
        const ingredientFilter = FilterCategory.create("Ingredients", "primary")
        const applianceFilter = FilterCategory.create("Appareil", "success")
        const ustensilFilter = FilterCategory.create("Ustensiles", "danger")

        main.classList.add("col-9", "mx-auto")
        filterContainer.classList.add("d-flex")
        applianceFilter.classList.add("ms-3", "me-3")
        main.appendChild(searchBar)
        main.appendChild(filterContainer)
        filterContainer.appendChild(ingredientFilter)
        filterContainer.appendChild(applianceFilter)
        filterContainer.appendChild(ustensilFilter)


        return main
    }
}