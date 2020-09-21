console.log("main.js");

import { journalEntryForm } from './JournalForm.js'
import { getEntries, useEntries } from './JournalDataProvider.js'
// import { EntryListComponent } from './JournalEntryList.js'

journalEntryForm();
useEntries();
getEntries();

// EntryListComponent();