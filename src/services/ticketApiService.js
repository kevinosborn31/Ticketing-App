export const ticketData = [
    {
        id: 1000,
        summary: 'Create table',
        description: 'Need to create new table for customers to eat',
        assignee: 'Kevin Osborn',
        priority: 'Major',
        estimate: 8,
        type: 'Feature',
    },
    {
        id: 1001,
        summary: 'Build API for beverages',
        description: 'Build an API to store all the drinks we have..',
        assignee: 'James Ale',
        priority: 'Major',
        estimate: 5,
        type: 'Feature',
    },
    {
        id: 1002,
        summary: 'Create enum for tickets',
        description: 'Create enum service for tickets API',
        assignee: 'Ana Martinez',
        priority: 'Minor',
        estimate: 2,
        type: 'Enhancement',
    },
    {
        id: 1003,
        summary: 'Remove random popup',
        description: 'There is a random pop up when I click "next" please fix',
        assignee: 'Kevin Osborn',
        priority: 'Major',
        estimate: 1,
        type: 'Bug',
    },
]

export function fetchData () {
    return new Promise((resolve) => {
        setTimeout(resolve, 100, ticketData)
    });
}