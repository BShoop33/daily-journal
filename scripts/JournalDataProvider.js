console.log("JournalDataProvider.js");

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedResponse => {
            const entries = parsedResponse
            console.log(entries)
        })
};

const journal = [];

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate;
};

// export const saveEntry = entry => {
//     return fetch('http://localhost:8088/entries', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(entry)
//     })
// }