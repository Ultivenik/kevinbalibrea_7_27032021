import Algo from "../js/Algo"
import DOMElement from "../js/DOMElement"
import FilterCategory from "../js/FilterCategory"
import SearchBar from "../js/SearchBar"
import recipes from "./../js/recipes"
import Card from './../js/Cards'

const recipeArray = recipes.recipes
export default class Main {
    static create()
    {
        const main = DOMElement.create("main")
        const filterContainer = DOMElement.create("div")
        const searchBar = SearchBar.create()
        const ingredientFilter = FilterCategory.create("Ingredients", "primary")
        const applianceFilter = FilterCategory.create("Appareil", "success")
        const ustensilFilter = FilterCategory.create("Ustensiles", "danger")
        const div = DOMElement.create("div")
        const results = []

        main.classList.add("col-10", "mx-auto")
        filterContainer.classList.add("d-flex", "filterResult")
        applianceFilter.classList.add("ms-3", "me-3")
        div.classList.add("d-flex", "justify-content-between","flex-wrap", "body-search")
        main.appendChild(searchBar)
        main.appendChild(filterContainer)
        filterContainer.appendChild(ingredientFilter)
        filterContainer.appendChild(applianceFilter)
        filterContainer.appendChild(ustensilFilter)

        ingredientFilter.addEventListener("input", Main.ingredientsSorted)
        searchBar.addEventListener("keydown", Main.tagResult)
        searchBar.addEventListener("input", (e)=>{
            if (e.target.value.length >= 3) {
                let word = e.target.value.toLowerCase()
                recipeArray.forEach((recipe) => {
                    // Est que l'input %% name ?
                    if (recipe.name.toLowerCase().indexOf(word) !== -1) {
                        results.push(Card.create(recipe))
                    }
                    // Est que l'input %% ingredients.ingredient ?
                    recipe.ingredients.forEach((ingredient) => {
                        if (ingredient.ingredient.toLowerCase().indexOf(word) !== -1) {
                            results.push(Card.create(recipe))
                        }
                    })
                    // Est que l'input %% appliance ?
                    if (recipe.appliance.toLowerCase().indexOf(word) !== -1) {
                        results.push(Card.create(recipe))
                    }
                    // Est que l'input %% ustensil ?
                    recipe.ustensils.forEach((ustensil) => {
                        if (ustensil.toLowerCase().indexOf(word) !== -1) {
                            results.push(Card.create(recipe))
                        }
                    })
                })
            }else{
                div.remove()
            }
            results.forEach((result) => {
                div.appendChild(result)
            })
        })
        main.appendChild(div)
        return main
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

    static ingredientsSorted(e)
    {
        // let arr = []
        let word = e.target.value
        recipeArray.map(item => {
            item.ingredients.map(ingredient =>{
                let ingredientResult = ingredient.ingredient
                // arr.push(ingredient.ingredient)
                if (word.length >= 3) {
                    console.log("TOTO");
                }
                // console.log(Algo.QuickSort(ingredientResult.filter(a => )))
            })
        })
        // let sorted = Algo.QuickSort(arr)
    }
}