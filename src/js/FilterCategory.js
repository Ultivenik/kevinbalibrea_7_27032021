import DOMElement from "./DOMElement"
import Input from "./Input"

export default class FilterCategory
{
    static create(content, color)
    {
        const filterContainer = DOMElement.create("div")
        const ingredientbutton = DOMElement.create("button")
        const ingredientInput = Input.create("search", `Rechercher un ${content}`)
        const ingredientList = DOMElement.create("ul")
        const icon = DOMElement.create("i")

        filterContainer.classList.add("dropdown", `bg-${color}`)
        ingredientbutton.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
        ingredientList.classList.add("dropdown-menu", `bg-${color}`)
        icon.classList.add("fas", "fa-chevron-down", "p-3", "text-light")

        ingredientbutton.dataset.bsToggle = "dropdown"
        ingredientbutton.innerHTML = content

        filterContainer.appendChild(ingredientbutton)
        filterContainer.appendChild(ingredientList)
        filterContainer.appendChild(icon)

        // swap button into search bar for filtering
        filterContainer.addEventListener("click", () => {
            filterContainer.replaceChild(ingredientInput, ingredientbutton)
            ingredientInput.focus()
            ingredientInput.classList.add(`bg-${color}`, "p-3", "border-0", "text-light")
            icon.classList.replace("fa-chevron-down", "fa-chevron-up")
        })

        ingredientInput.addEventListener("blur", () => {
            filterContainer.replaceChild(ingredientbutton, ingredientInput)
            icon.classList.replace("fa-chevron-up", "fa-chevron-down")
        })
        return filterContainer
    }
}