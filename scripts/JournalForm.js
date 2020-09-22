console.log("JournalForm.js");

import { getEntry, useEntry } from './JournalDataProvider.js'
import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entriesContainer")
//==========================================================================

//C1/////////////////////////////////////////////////////////////////////////
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
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//C2////////////////////////////////////////////////////////////////////////
const render = (journalEntryArray) => {
    contentTarget.innerHTML = `
    ${journalEntryArray.map(entryObj => {
        return `
            <section class="journalEntry"></section>
            <ul id="newJournalEntry">
            <li id="newDate"><h2>${entryObj.dateEntry}</h2></li>
            <li id="newConcepts"><p><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p></li>
            <li id="newEntry"><p><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p></li>
            <li id="newMood"><p><strong>Mood</strong>:  ${entryObj.moodEntry}</p></li>
            <button id="deleteEntry--${entryObj.id}">Delete</button>
            </ul>
        `
    }).join("")}
    `
}
export const journalEntryForm = () => {
    getEntry()
        .then(() => {
            render(useEntry())
        })
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\