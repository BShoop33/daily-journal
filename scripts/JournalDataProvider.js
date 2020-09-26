import { entryList } from './JournalEntryList.js'

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
};

eventHub.addEventListener("entryStateChanged", event => {
    entryList()
});

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
        .then(getEntries)
        .then(dispatchStateChangeEvent)
};