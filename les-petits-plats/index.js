import './style.css'
import recipes from './recipes'

// HEADER ********************************************************************
const header = document.createElement("header")
const logo = document.createElement("img")
logo.src = "./logo.png"
logo.classList.add("mx-auto", "d-block", "w-3", "mt-5", "mb-5")
document.body.appendChild(header)
header.appendChild(logo)

// MAIN ********************************************************************
const main = document.createElement("main")
main.classList.add("col-10", "mx-auto")
document.body.appendChild(main)

// FILTER ********************************************************************
const filterContainer = document.createElement("div")
const ingredientFilter = filter("Ingredients", "primary")
const applianceFilter = filter("Appareil", "success")
const ustensilFilter = filter("Ustensiles", "danger")

filterContainer.classList.add("d-flex", "filterResult")
applianceFilter.classList.add("ms-3", "me-3")


// CONTAINER & SEARCHBAR ********************************************************************
const row = document.createElement("div")
const mxAuto = document.createElement("div")
const inputGroup = document.createElement("div")
const input = document.createElement("input")
const icon = document.createElement("i")
const recipeContainer = document.createElement("div")
const results = []
const recipeArray = recipes.recipes

row.classList.add("row")
mxAuto.classList.add("mx-auto")
inputGroup.classList.add("input-group", "mb-3")
input.classList.add("form-control", "p-3", "bg-light")
icon.classList.add("fas", "fa-search", "fs-3", "position-absolute", "end-0", "me-3", "mt-2")
recipeContainer.classList.add("d-flex", "justify-content-between","flex-wrap", "body-search", "mt-5")

input.type = "text"
input.placeholder = "Rechercher un ingrédient, appareil, ustensiles ou une recette"

main.appendChild(row)
row.appendChild(mxAuto)
mxAuto.appendChild(inputGroup)
inputGroup.appendChild(input)
inputGroup.appendChild(icon)
main.appendChild(filterContainer)
filterContainer.appendChild(ingredientFilter)
filterContainer.appendChild(applianceFilter)
filterContainer.appendChild(ustensilFilter)

input.addEventListener("keydown", (e) =>{
    const parent = e.target.parentElement
    const word = e.target.value
    const tag = searchtag(word)
    const error = document.createElement("div")
    error.innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc"
    if (e.key === "Enter") {
        parent.parentElement.appendChild(tag)
    }
})
input.addEventListener("input", (e)=>{
    if (e.target.value.length >= 3) {
        let word = e.target.value
        // recipeArray.forEach((recipe) => {
        //     const name = recipe.name.toLowerCase()
        //     const appliance = recipe.appliance.toLowerCase()
        //     const ingredient = recipe.ingredients.map(ingredient => {return ingredient.ingredient.toLowerCase()})
        //     const ustensil = recipe.ustensils.map(ustensil => {return ustensil.toLowerCase()})
        //     // Est que l'input %% name ?
        //     if (name.indexOf(word) !== -1) {
        //         results.push(createCards(recipe))
        //         quickSort(results)
        //     }else if (appliance.indexOf(word) !== -1) {
        //         results.push(createCards(recipe))
        //         quickSort(results)
        //     }else if (ingredient.indexOf(word) !== -1) {
        //         results.push(createCards(recipe))
        //         quickSort(results)
        //     }else if (ustensil.indexOf(word) !== -1) {
        //         results.push(createCards(recipe))
        //         quickSort(results)
        //     }
        // })
        search(recipeArray, (item)=>{
            const ingredient = item.ingredients.map(ingredient => {return ingredient.ingredient.toLowerCase()})
            const ustensil = item.ustensils.map(ustensil => {return ustensil.toLowerCase()})
            if (item.name.toLowerCase().indexOf(word) !== -1) {
                return item
            }
            if (item.appliance.toLowerCase().indexOf(word) !== -1) {
                return item
            }
            if (ingredient.indexOf(word) !== -1) {
                return item
            }
            if (ustensil.indexOf(word) !== -1) {
                return item
            }
            recipeContainer.appendChild(createCards(item))
        })
        // results.forEach((result) => {
        //     recipeContainer.appendChild(result)
        // })
    }else {
        recipeContainer.innerHTML = ""
        results.length = 0
    }
})
main.appendChild(recipeContainer)

function filter(content, color)
{
    const filter = document.createElement("div")
    const filterButton = document.createElement("button")
    const filterInput = document.createElement("input")
    const filterList = document.createElement("ul")
    const icon = document.createElement("i")

    filter.classList.add("dropdown", `bg-${color}`, "rounded-3")
    filterButton.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
    filterList.classList.add("dropdown-menu", `bg-${color}`)
    icon.classList.add("fas", "fa-chevron-down", "p-3", "text-light")

    filterButton.innerHTML = content
    filterInput.placeholder = "Rechercher un" + content
    filterButton.dataset.bsToggle = "dropdown"

    filter.appendChild(filterButton)
    filter.appendChild(filterList)
    filter.appendChild(icon)

    // Swap button into search bar for filtering
    filter.addEventListener("click", () => {
        filter.replaceChild(filterInput, filterButton)
        filterInput.focus()
        filterInput.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
        icon.classList.replace("fa-chevron-down", "fa-chevron-up")
    })

    filterInput.addEventListener("blur", () => {
        filter.replaceChild(filterButton, filterInput)
        icon.classList.replace("fa-chevron-up", "fa-chevron-down")
    })
    return filter
}

// CARDS ********************************************************************

function createCards(recipe)
{
    const container = document.createElement("div")
    const img = document.createElement("img")
    const textContainer = document.createElement("div")
    const title = document.createElement("h5")
    const time = document.createElement("div")
    const listTextContainer = document.createElement("div")
    const ingredientList = document.createElement("ul")
    const recipeText = document.createElement("p")
    const icon = document.createElement("i")

    container.classList.add("card")
    img.classList.add("card-img-top")
    textContainer.classList.add("card-body", "d-flex", "justify-content-between")
    listTextContainer.classList.add("card-body", "d-flex", "justify-content-between")
    title.classList.add("card-title")
    recipeText.classList.add("card-text")
    icon.classList.add("far", "fa-clock")
    time.classList.add("d-flex", "align-items-baseline")

    img.src = "..."

    container.appendChild(img)
    container.appendChild(textContainer)
    container.appendChild(listTextContainer)
    textContainer.appendChild(title)
    textContainer.appendChild(time)
    time.prepend(icon)
    listTextContainer.appendChild(ingredientList)
    listTextContainer.appendChild(recipeText)

    title.innerHTML = recipe.name
    time.innerHTML = "<i class='far fa-clock me-2'></i>" + recipe.time + "min"
    recipeText.innerHTML = recipe.description

    recipe.ingredients.map(item =>{
        const list = document.createElement("li")
        if (item.quantity === undefined || item.unit === undefined) {
            list.innerHTML = `${item.ingredient}`
        }else{
            list.innerHTML = `${item.ingredient}: ${item.quantity} ${item.unit} `
        }
        ingredientList.appendChild(list)
    })
    return container
}

// SORTING ALGORYTHM ********************************************************************

function quickSort(array)
{
    if (array.length === 1) {
        return array
    }
    const pivot = array[array.length - 1]
    const leftArray = []
    const rightArray = []

    for (let i = 0; i < array.length -1 ; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    if (leftArray.length > 0 && rightArray.length > 0) {
        return[...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    }else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    }else{
        return[...quickSort(rightArray), pivot]
    }
}

// SEARCH TAGS ********************************************************************

function searchtag(contentText) {
    let span = document.createElement("div")
    let containerContent = document.createElement("div")
    let content = document.createElement("div")
    let icon = document.createElement("i")

    span.classList.add("toast", "show", "text-white", "bg-primary", "border-0", "d-inline-block", "w-0", "me-2", "mb-3")
    containerContent.classList.add("d-flex")
    content.classList.add("toast-body")
    icon.classList.add("far", "fa-times-circle","me-2", "m-auto")

    span.appendChild(containerContent)
    containerContent.appendChild(content)
    containerContent.appendChild(icon)

    content.innerHTML = contentText
    span.addEventListener("click", ()=>{
        span.remove()
    })
    return span
}

function search(array, searchAction){
    const filteredELements = array.filter((item) => searchAction(item))
    return filteredELements
}