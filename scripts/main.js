console.log("main.js");

// import { journalEntryForm } from './JournalForm.js'
import { getEntries, useJournalEntries } from './JournalDataProvider.js'
// import { EntryListComponent } from './JournalEntryList.js'

// journalEntryForm();
useJournalEntries();
getEntries();

// EntryListComponent();