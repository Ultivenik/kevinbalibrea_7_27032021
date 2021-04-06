import DOMElement from "./DOMElement"

export default class SearchTag
{
    static create(contentText)
    {
            let span = DOMElement.create("div")
            let containerContent = DOMElement.create("div")
            let content = DOMElement.create("div")
            let icon = DOMElement.create("i")

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

}