import { entryList } from './JournalList.js'

const eventHub = document.querySelector("#container");

let entries = [];

export const getEntry = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(parsedResponse => {
            entries = parsedResponse
        })
};

export const useEntry = () => {
    return entries.slice()
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(getEntry)
        .then(dispatchStateChangeEvent)
};

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntry)
        .then(dispatchStateChangeEvent)
};

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
};

eventHub.addEventListener("entryStateChanged", event => {
    entryList()
});

/* Function that edits the message in the database. Then calls for the getChat function. Then the dispatchStateChangeEventChat.
*/
export const editEntry = (dateEntry, conceptEntry, journalEntry, moodEntry, id) => {
    return fetch(`http://localhost:8088/entries/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            dateEntry: dateEntry,
            conceptEntry: conceptEntry,
            journalEntry: journalEntry,
            moodEntry: moodEntry,
            id: id
        })
    })
        .then(getEntry)
        .then(dispatchStateChangeEvent)
};