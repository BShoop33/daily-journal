console.log("JournalEntryList.js")

import { getEntry, useEntry, deleteEntry } from './JournalDataProvider.js'
import { journalEntryForm } from './JournalForm.js'
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entriesContainer")

let entryObj = [];

//C1
eventHub.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteEntry(id)
    }
})

//C2
const render = (notes) => {
    contentTarget.innerHTML = notes.map(noteObj => {
        return journalEntryForm(noteObj.id)
    }).join("")
}

//C3
export const entryList = () => {
    getEntry()
        .then(() => {
            const entryObj = useEntry()
            render(entryObj)
        })
}

//C4 I don't think this is needed because it was used in glassdale to join criminals data with note data when delete fetch fires
// eventHub.addEventListener("noteStateChanged", () => {
//     const newEntry = useEntry()
//     render(newEntry)
// })