console.log("JournalForm.js");

import { getEntries, useEntries } from './JournalDataProvider.js'
import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entriesContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "record") {
        console.log("true")
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

const render = (journalEntryArray) => {
    contentTarget.innerHTML = `
    ${journalEntryArray.map(entryObj => {
        return `
            <section id="entry--${entryObj.id}" class="journalEntry"></section>
            <ul id="priorJournalEntries">
            <li id="priorDate"><h2>${entryObj.dateEntry}</h2></li>
            <li id="priorMood"><p><strong>Mood</strong>:  ${entryObj.moodEntry}</p></li>
            <li id="priorConcepts"><p><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p></li>
            <li id="priorEntry"><p><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p></li>
            </ul>
        `
    }).join("")}
    `
}

export const journalEntryForm = () => {
    getEntries()
        .then(() => {
            render(useEntries())
        })
}