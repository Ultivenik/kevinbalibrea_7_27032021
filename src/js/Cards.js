import DOMElement from './DOMElement'

export default class Card
{
    static create(recipe)
    {
        const container = DOMElement.create("div")
        const img = DOMElement.create("img")
        const textContainer = DOMElement.create("div")
        const title = DOMElement.create("h5")
        const time = DOMElement.create("div")
        const listTextContainer = DOMElement.create("div")
        const ingredientList = DOMElement.create("ul")
        const recipeText = DOMElement.create("p")
        const icon = DOMElement.create("i")

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
            const list = DOMElement.create("li")
            list.innerHTML = `${item.ingredient}: ${item.quantity} ${item.unit} `
            ingredientList.appendChild(list)
        })
        return container
    }
}