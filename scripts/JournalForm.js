import { getEntry, useEntry } from './JournalDataProvider.js'
import { saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("#container");

/* creates the HTML structure and inputs for the journal form */
export const journalForm = () => {
    const contentTarget = document.querySelector("#journalFormBody");
    contentTarget.innerHTML = `
    <section id="journalForm">
        <label id="dateHeader" for="journalDate">Entry Date</label>
            <input type="date" id="journalDate">
        <label id="conceptsHeader" for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="concepts" id="conceptsCovered" placeholder="What concepts did you cover today?">
        <label id="entryHeader" for="journalEntry">Journal Entry</label>
            <textarea rows="11" cols="64" name="entries" id="journalEntry" placeholder="Discuss what you learned about those concepts here"></textarea>
        <label id="moodHeader" for="todaysMood">Today's Mood</label>
            <select id="mood" style="width: 13em">
                <option selected="selected" class="service-small">How do you feel today?</option>
                <option value="Happy">Happy</option>
                <option value="Ok">Ok</option>
                <option value="Sad">Sad</option>
            </select>
        <button id="record">Record Journal Entry</button>
    </section>
    `
}

/* renders the journal form and inputs on the DOM */
export const journalEntryForm = () => {
    getEntry()
        .then(() => {
            journalForm(useEntry())
        })

}

/* listens for the record button to be clicked and then, when it is clicked, sends the values in the journal inputs to the API via a POST operation */
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

// const updates = {
//     date: journalDate.value,
//     concepts: conceptsCovered.value,
//     entry: journalEntry.value,
//     mood: mood.value
// }

// updateUpdates(updates).then(() => {
//     contentTarget.innerHtml = null
// })