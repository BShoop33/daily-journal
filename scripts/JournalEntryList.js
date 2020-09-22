console.log("JournalEntryList.js")

import { JournalEntryComponent } from './JournalEntry.js'
import { getEntry, useEntry, deleteEntry } from './JournalDataProvider.js'

const contentTarget = document.querySelector(".entriesContainer")
const eventHub = document.querySelector(".container")

let entryObj = [];
//==========================================================================
//D1////////////////////////////////////////////////////////////////////////
const render = (newEntry) => {
    contentTarget.innerHTML = newEntry.map((entryObj) => {
        return JournalEntryComponent()
    }).join("")
    return JournalEntryComponent(entryObj)
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//D2////////////////////////////////////////////////////////////////////////
export const entryList = () => {
    getEntry()
        .then(() => {
            const entryObj = useEntry()
            render(entryObj)
        })
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//D3////////////////////////////////////////////////////////////////////////
eventHub.addEventListener("noteStateChanged", () => {
    const newEntry = useEntry()
    render(newEntry)
})
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//D4////////////////////////////////////////////////////////////////////////
eventHub.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteEntry(id)
    }
})
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// console.log("JournalEntryList.js");

// import { useJournalEntries } from './JournalDataProvider.js'
// import { JournalEntryComponent } from './JournalEntry.js'

// // DOM reference to where all entries will be rendered
// const entryLog = document.querySelector(".entryLog");

// // Use the journal entry data from the data provider component
// export const EntryListComponent = () => {
//     const entries = useJournalEntries()
//     entryLog.innerHTML += entries.map(entry => JournalEntryComponent(entry)).join("")
// };