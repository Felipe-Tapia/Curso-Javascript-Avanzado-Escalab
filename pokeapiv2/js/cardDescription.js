import { templateSoloCards } from "./templates.js"
import { closeWindow } from "./buttons.js"


export const pintarCardDescription = (data) => {
    templateSoloCards(data)
    closeWindow()
    
}