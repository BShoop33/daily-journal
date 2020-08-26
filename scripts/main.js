console.log("main.js");
import {useJournalEntries} from './JournalDataProvider.js';
import {EntryListComponent} from './JournalEntryList.js';

useJournalEntries();
EntryListComponent();