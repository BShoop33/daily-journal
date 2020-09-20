console.log("JournalForm.js");

import { getEntries, useJournalEntries } from './JournalDataProvider.js'
// import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "record") {
//         const journalDate = document.querySelector("#journalDate");
//         const conceptsCovered = document.querySelector("#conceptsCovered");
//         const journalEntry = document.querySelector("#journalEntry");
//         const mood = document.querySelector("#mood");
//         const newJournalEntry = {
//             dateEntry: journalDate.value,
//             conceptEntry: conceptsCovered.value,
//             journalEntry: journalEntry.value,
//             moodEntry: mood.value
//         }
//         saveEntry(newJournalEntry)
//     }
// })

const render = (journalEntryArray) => {
    contentTarget.innerHTML = `
    <section id="entry--${journalEntryArray.id}" class="journalEntry">
    <ul>
        <li><h2>${journalEntryArray.date}</h2></li>
        <li><p><strong><u>Mood</u></strong>:  ${journalEntryArray.mood}</p></li>
        <li><p><strong><u>Concepts Covered</u></strong>:  ${journalEntryArray.concept}</p></li>
        <li><p><strong><u>Journal Entry</u></strong>:  ${journalEntryArray.entry}</p></li>
    </ul>
    `
}

export const journalEntryForm = () => {
    getEntries()
        .then(() => {
            render(useJournalEntries())
        })
}