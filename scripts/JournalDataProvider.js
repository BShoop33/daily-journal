console.log("JournalDataProvider.js");

/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/10/2020",
        concept: "HTML & CSS",
        entry: "Today we did introductions and orientation. Then we did our first lesson. It introduced basic commands using the command terminal.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "08/11/2020",
        concept: "HTML & CSS",
        entry: "Today we worked on creating an index file and CSS as well as opening Visual Studio from the command line. We also learned how to create a basic website with HTML and CSS and how to use FlexBox to create dynamic shapes on the page.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "08/12/2020",
        concept: "HTML & CSS",
        entry: "Today we learned a bit about how to use GitHub and we started the Hello World Travel Agency team project. I learned to use the Ubuntu command line rather than the Ubuntu 18.04 LTS command line. I also had a technical problem with getting images to load in my locally hosted HTML page.",
        mood: "Ok"
    },
    {
        id: 4,
        date: "08/13/2020",
        concept: "HTML & CSS",
        entry: "Today we continued team work on the Hello World Travel Agency project. We figured out how to bypass the HTML images technincal issue by dragging the image directly into VSCode rather than putting them in directories.",
        mood: ""
    }
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate;
};

