console.log("JournalEntryList.js");

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog");
const entries = useJournalEntries();

// Use the journal entry data from the data provider component
export const EntryListComponent = () => {
    let journalHTMLRepresentation = "";
    for (const entry of entries) {
        journalHTMLRepresentation += JournalEntryComponent(entry);
        entryLog.innerHTML += `
            ${journalHTMLRepresentation}
        `
    };
};