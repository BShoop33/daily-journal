console.log("JournalForm.js");

import { getEntry, useEntry } from './JournalDataProvider.js'
import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entriesContainer")

//B1 creates the object structure for POST operation
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "record") {
        const journalDate = document.querySelector("#journalDate");
        const conceptsCovered = document.querySelector("#conceptsCovered");
        const journalEntry = document.querySelector("#journalEntry");
        const mood = document.querySelector("#mood");
        const newJournalEntry = {
            dateEntry: journalDate.value,
            conceptEntry: conceptsCovered.value,
            journalEntry: journalEntry.value,
            moodEntry: mood.value
        }
        saveEntry(newJournalEntry)
    }
})



export const journalEntryForm = () => {
    getEntry()
        .then(() => {
            render(useEntry())
        })
}
