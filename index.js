const recipeArray = Window.DATA
let results = []
let tags = []
let word = ""
let ingredientFilterInput = ""
let ustensilFilterInput = ""
let appliancesFilterInput = ""

// DOM CONSTRUCT
const filter = (color, type, nameClass) => {
    const containerFilter = container(color)
    const filterIcon = iconFilter()
    const filterButton = button(color, type)
    const filterSearchBar = searchBarFilter(color, nameClass)
    const filterListContainer = listContainer(color, type)
    const list = filterListContainer.childNodes

    containerFilter.classList.add(nameClass)
    containerFilter.appendChild(filterButton)
    containerFilter.appendChild(filterSearchBar)
    containerFilter.appendChild(filterIcon)
    containerFilter.appendChild(filterListContainer)
    filterListContainer.style.display = "none"
    filterSearchBar.style.display ="none"

    filterButton.addEventListener("click", (e) => {
        const typeButton = e.currentTarget.textContent
        filterButton.style.display ="none"
        filterSearchBar.style.display ="block"
        filterIcon.classList.replace("fa-chevron-down", "fa-chevron-up")
        filterListContainer.removeAttribute("style")
        filterListContainer.classList.add("d-flex", "flex-wrap")
        containerFilter.classList.add("col-4")
        filterSearchBar.focus()

        list.forEach(item =>{
            item.addEventListener("click", () =>{
                filterButton.style.display = "block"
                filterSearchBar.style.display ="none"
                filterIcon.classList.replace("fa-chevron-up", "fa-chevron-down")
                filterListContainer.classList.remove("d-flex", "flex-wrap")
                containerFilter.classList.remove("col-4")
                filterListContainer.style.display = "none"
            })
        })
        //Filtering in the filter dropdown
        switch (typeButton) {
            case "Ingredients":
            document.getElementById("IngredientsInput").addEventListener("input", (e)=>{
                ingredientFilterInput = e.currentTarget.value
                displayResults()
            })
            break
            case "Appareils":
                document.getElementById("ApplianceInput").addEventListener("input", (e)=>{
                    appliancesFilterInput = e.currentTarget.value
                    displayResults()
                })
            break
            case "Ustensiles":
                document.getElementById("UstensilsInput").addEventListener("input", (e)=>{
                    ustensilFilterInput = e.currentTarget.value
                    displayResults()
                })
            break;
        }
    })
    return containerFilter
}

const container = (color) =>
{
    const containerBox = document.createElement("div")
    containerBox.classList.add("dropdown", `bg-${color}`, "rounded-3", "d-flex", "justify-content-between")
    return containerBox
}

const button = (color, content) => {
    const filterButton = document.createElement("button")
    filterButton.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
    filterButton.innerHTML = content

    return filterButton
}

const searchBarFilter = (color, type) => {
    const filterInput = document.createElement("input")
    filterInput.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
    filterInput.id = `${type}Input`
    filterInput.placeholder = "Rechercher un " + type

    return filterInput
}

const listContainer = (color, type) => {
    const filterList = document.createElement("ul")
    filterList.classList.add("dropdown-menu", `bg-${color}`, `${type}`)
    filterList.id = `${type}`
    return filterList
}

const createList = (content, color) => {
    const list = document.createElement("li")
    list.classList.add("dropdown-item", "text-light")
    list.innerHTML = content
    list.addEventListener("click", () => {
        let tag = searchtag(content, color)
        document.querySelector(".input-container").appendChild(tag)
        tags.push(content)

            //cliquer sur une liste reafiche la recherche  avec l'occurence choisie
        recipeContainer.innerHTML = ""
        filterResultByTag()
        displayResults()

        //cliquer sur un tag supprime le filtre
        tag.addEventListener('click', (e)=>{
            const tagValue = e.target.textContent
            tags = tags.filter(tag => tag !== tagValue)
            filterResults(word)
            filterResultByTag()
            displayResults()
        })
    })
    return list
}

const iconFilter = () => {
    const icon = document.createElement("i")
    icon.classList.add("fas", "fa-chevron-down", "p-3", "text-light", "align-self-center")
    return icon
}
// CARDS ********************************************************************

const createCards = (recipe) =>
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

    container.classList.add("card", "mb-5")
    img.classList.add("img-fluid")
    textContainer.classList.add("card-body", "d-flex", "justify-content-between")
    listTextContainer.classList.add("card-body", "d-flex", "justify-content-between")
    title.classList.add("card-title", "title")
    recipeText.classList.add("card-text")
    icon.classList.add("far", "fa-clock")
    time.classList.add("d-flex", "align-items-baseline", "time")

    img.src = "./img.png"


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
    if (recipeText.innerHTML.length > 200) {
        recipeText.innerHTML = recipe.description.substring(0, 220) + "..."
    }

    recipe.ingredients.map(item =>{
        const list = document.createElement("li")
        if (item.quantity === undefined || item.unit === undefined) {
            list.innerHTML = `${item.ingredient}`
        }else{
            list.innerHTML = `${item.ingredient}: <span>${item.quantity} ${item.unit}</span>`
        }
        ingredientList.appendChild(list)
    })
    return container
}

// ************************************************************************************************SORTING ALGORYTHM ********************************************************************

const quickSort = (array) =>
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
    }else if (rightArray.length > 0){
        return[...quickSort(rightArray), pivot]
    }else{
        recipeContainer.innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc."
    }
}

//*************************************************************************************************  SEARCH TAGS ****************************************************************************

const searchtag = (contentText, color) => {
    let span = document.createElement("div")
    let containerContent = document.createElement("div")
    let content = document.createElement("div")
    let icon = document.createElement("i")

    span.classList.add("toast", "show", "text-white", `bg-${color}`, "border-0", "d-inline-block", "w-0", "me-2", "mb-3")
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
const FilterList = (itemList, nameclass, color) => {
    const list = createList(itemList, color)
    if (document.querySelector(nameclass)) {
        document.querySelector(nameclass).appendChild(list)
    }
    return list
}

//displaying main result by clicking on tags
const filterResultByTag = () => {
    if (tags.length === 0) {
         return
    }
    const newResult = []
    for (const [index, value] of Object.entries(results)) {
        if (
            value.ingredients.map(item=>tags.map(tag=>item.ingredient.includes(tag)).indexOf(true) > -1).indexOf(true) > -1 ||
            value.appliance.indexOf(tags.map(tag=>value.appliance.includes(tag)).indexOf(true) > -1) > -1 ||
            value.ustensils.map(item=>tags.map(tag=>item.includes(tag)).indexOf(true) > -1).indexOf(true) > -1
        ){
            newResult.push(value)
        }
    }
    results = newResult
}

//************************************************************************************************* SEARCH ALGORYTHM

const search = (array, searchAction) => {
    const filteredElement = []
    for (const item of array) {
        const element = searchAction(item)
        if (element) {
            filteredElement.push(element)
        }
    }
    return filteredElement
}

//display result in filter list section
const displayResults = () => {
    if (document.querySelectorAll(".dropdown-menu") !== null) {
        document.querySelectorAll(".dropdown-menu").forEach(list =>{
            list.innerHTML = ""
        })
    }
    //display ingredient
    const ingredients = results.map(item =>item.ingredients).reduce((value, currentValue)=>
    [...value, ...currentValue.map(value=>value.ingredient)], [])
    for (const ingredient of new Set(ingredients)) {
        if (!ingredientFilterInput || ingredient.toLowerCase().includes(ingredientFilterInput)) {
            FilterList(ingredient, "#Ingredients", "primary")
        }
    }
    //display ustensils
    const ustensils = results.map(item =>item.ustensils).reduce((value, currentValue)=>
    [...value, ...currentValue], [])
    for (const ustensil of new Set(ustensils)) {
        if (!ustensilFilterInput || ustensil.toLowerCase().includes(ustensilFilterInput)) {
            FilterList(ustensil, "#Ustensiles", "danger")
        }
    }
    //display appliance
    const appliance = results.map(item =>item.appliance)
    for (const appliances of new Set(appliance)) {
        if (!appliancesFilterInput || appliances.toLowerCase().includes(appliancesFilterInput)) {
            FilterList(appliances, "#Appareils", "success")
        }
    }
    recipeContainer.innerHTML = ""
    new Set(quickSort(results)).forEach((result) => {
        //display cards
        recipeContainer.appendChild(createCards(result))
    })
}

// displaying results in resultContainer for main search
 const filterResults = (word) =>{
    results = search(recipeArray, (item)=>{
        const ingredients = search(item.ingredients, (ingredient) =>{
            if (ingredient.ingredient.toLowerCase().includes(word)) {
                return ingredient
            }
        }).map(item=> item.ingredient.toLowerCase())
        const ustensils = search(item.ustensils, (ustensil) =>{
            if (ustensil.toLowerCase().includes(word)) {
                return ustensil
            }
        })
        if (item.name.toLowerCase().includes(word) || ingredients.length > 0 || ustensils.length > 0) {
            return item
        }
    })
 }

// **********************************************************************************************HEADER ********************************************************************

const header = document.createElement("header")
const logo = document.createElement("img")
logo.src = "./logo.png"
logo.classList.add("mx-auto", "d-block", "w-3", "pt-5", "pb-5")
document.body.appendChild(header)
header.appendChild(logo)

// ***********************************************************************************************MAIN ********************************************************************

const main = document.createElement("main")
main.classList.add("col-10", "mx-auto")
document.body.appendChild(main)

// ***********************************************************************************************FILTER ********************************************************************
const filterContainer = document.createElement("div")

// INGREDIENTS
const ingredientFilter = filter("primary", "Ingredients", "Ingredients")

// APPLIANCE
const applianceFilter = filter("success", "Appareils", "Appliance")

// USTENSILS
const ustensilFilter = filter("danger", "Ustensiles", "Ustensils")

filterContainer.classList.add("d-flex", "filterResult")
applianceFilter.classList.add("ms-3", "me-3")


// ******************************************************************************************CONTAINER & SEARCHBAR ********************************************************************
const row = document.createElement("div")
const mxAuto = document.createElement("div")
const inputGroup = document.createElement("div")
const input = document.createElement("input")
const icon = document.createElement("i")
const recipeContainer = document.createElement("div")

row.classList.add("row")
mxAuto.classList.add("mx-auto", "input-container")
inputGroup.classList.add("input-group", "mb-3")
input.classList.add("form-control", "p-3", "bg-light", "searchbar")
icon.classList.add("fas", "fa-search", "fs-3", "position-absolute", "end-0", "me-3", "mt-2")
recipeContainer.classList.add("d-flex", "justify-content-between","flex-wrap", "body-search", "mt-5", "mb-5")

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

// Search by name, appliance, ingredient or ustensil (main searchbar)
input.addEventListener("input", (e)=>{
    if ( e.target.value.length > 2 ) {
        word = e.target.value
        recipeContainer.innerHTML = ""
        results = []
        filterResults(word)
        displayResults()
    }else {
        recipeContainer.innerHTML = ""
        results = []
        document.querySelectorAll(".dropdown-menu").forEach(list =>{
            list.innerHTML = ""
        })
    }
})
main.appendChild(recipeContainer)

