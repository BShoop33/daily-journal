import { getEntry, useEntry, deleteEntry, editEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("#container")

/* creates and renders the HTML structure for the prior entries container on the DOM */
export const priorEntriesForm = () => {
    const contentTarget = document.querySelector("#priorEntriesForm");
    contentTarget.innerHTML = `
        <div id="priorEntriesHeaderContainer">    
            <div id="priorEntriesHeader">Prior Entries</div>
        </div>
        <div id="priorEntriesContainer"></div>
`
}

/* creates the HTML structure for the prior entries data that is returned from the API */
const render = () => {
    const contentTarget = document.querySelector("#priorEntriesContainer")
    contentTarget.innerHTML = useEntry().map(entryObj => {
        return `
            <section class="journalEntry">
            <div id="newJournalEntry"></div>
            <p id="newDate"><strong>${entryObj.dateEntry}</strong></p>
            <p id="newConcepts"><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p>
            <p id="newEntry"><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p>
            <p id="newMood"><strong>Mood</strong>:  ${entryObj.moodEntry}</p>
            <button onClick="location.reload(true)" class="deleteEntry" id="deleteEntry--${entryObj.id}">Delete Entry</button>
            <button class="editEntry" id="editEntry--${entryObj.id}">Edit Entry</button>
            </section>
        `
    }).join("")
}

/* renders the prior entries from the API onto the DOM using the FETCH operation */
export const entryList = () => {
    getEntry()
        .then(render)
};

/* listens for the delete entry button to be clicked and when it is clicked deletes the entry from the API using the DELETE operation, which also removes that entry from the prior entries container */
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteEntry(id)
    }
});






// eventHub.addEventListener("click", event => {
//     if (event.target.id === "editEntry") {
//         entryList()
//     }
// })

// let contentTarget1;

// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("editEntry")) {
//         const [prefix, id] = event.target.id.split("--")
//         let x = useEntry().find(entry => {
//             return parseInt(entry.id) === parseInt(id)
//         })
//         contentTarget1 = document.querySelector(`#editEntry--${id}`)
//         editForm(x)
//     }
// })

// /* Function that takes an object and displays the object it editable fields in the HTML at a target location */
// const editForm = (entryObj) => {
//     contentTarget1.innerHTML = `
//     <div id="newDate"><h2>${entryObj.dateEntry}</h2></div>
//     <div id="newConcepts"><p><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p></div>
//     <div id="newEntry"><p><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p></div>
//     <div id="newMood"><p><strong>Mood</strong>:  ${entryObj.moodEntry}</p></div> 
//     `
// }


// return `
//             <section class="journalEntry"></section>
//             <div id="newJournalEntry"></div>
//             <div id="newDate"><h2>${entryObj.dateEntry}</h2></div>
//             <div id="newConcepts"><p><strong>Concepts Covered</strong>:  ${entryObj.conceptEntry}</p></div>
//             <div id="newEntry"><p><strong>Journal Entry</strong>:  ${entryObj.journalEntry}</p></div>
//             <div id="newMood"><p><strong>Mood</strong>:  ${entryObj.moodEntry}</p></div>
//             <button onClick="location.reload(true)" class="deleteEntry" id="deleteEntry--${entryObj.id}">Delete Entry</button>
//             <button class="editEntry" id="editEntry--${entryObj.id}">Edit Entry</button
//             </div>
//         `