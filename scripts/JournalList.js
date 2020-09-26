import { getEntry, useEntry, deleteEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")

const render = () => {
    const contentTarget = document.querySelector(".entriesContainer")
    contentTarget.innerHTML = useEntry().map(entryObj => {
        return `
            <section class="journalEntry"></section>
            <ul id="newJournalEntry">
            <li id="newDate"><h2>${entryObj.dateEntry}</h2></li>
            <li id="newConcepts"><p><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p></li>
            <li id="newEntry"><p><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p></li>
            <li id="newMood"><p><strong>Mood</strong>:  ${entryObj.moodEntry}</p></li>
            <button onClick="location.reload(true)" id="deleteEntry--${entryObj.id}">Delete</button>
            </ul>
        `
    }).join("")
}

export const entryList = () => {
    getEntry()
        .then(render)
};

eventHub.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteEntry(id)
    }
});