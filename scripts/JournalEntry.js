console.log("JournalEntry.js")

const eventHub = document.querySelector(".container")

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
//==========================================================================
//B1////////////////////////////////////////////////////////////////////////
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
                <div class="entry--timestamp"><h2>${entry.date}</h2></div>
                <div class="entry--mood">Mood:  ${entry.mood}</div>
                <div class="entry--concept">Concepts Covered:  ${entry.concept}</div>
                <div class="entry--entry">Journal Entry:  ${entry.entry}</div>
                
                <br>
            </ul>
        </section>
    `
};
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\