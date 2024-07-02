export const users = [
    {
        id: 1,
        name: 'Zebi Lamouche',
        email: 'zebil@mail.com',
    },
    {
        id: 2,
        name: 'Avld Hazari',
        email: 'avldh@mail.com',
    },
    {
        id: 3,
        name: 'Archle Slefa',
        email: 'archles@mail.com',
    }
]

export const categories = [
    {
        id: 1,
        nameCode: 'get-started',
        name: 'Get Started',
    },
    {
        id: 2,
        nameCode: 'accessibility',
        name: 'Accessibility',
    },
    {
        id: 3,
        nameCode: 'announcement',
        name: 'Announcement',
    },
    {
        id: 4,
        nameCode: 'suggestions',
        name: 'Suggestions',
    },
    {
        id: 5,
        nameCode: 'issues',
        name: 'Issues',
    },
    {
        id: 6,
        nameCode: 'off-topic',
        name: 'Off Topic',
    },
    {
        id: 7,
        nameCode: 'your-story',
        name: 'Your Story',
    },
]

export const posts = [
    {
        title: 'Hello World',
        description: '',
        content: 'Lorem ispum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        authorId: 1,
        categoryId: 1,
        createdAt: '2024-07-02 10:23:17',
        likes: 10,
        replies: [
            {
                content: 'Nice post!',
                authorId: 2,
                createdAt: '2024-07-02 10:23:17',
            },
            {
                content: 'I agree!',
                authorId: 3,
                createdAt: '2024-07-02 10:23:17',
            }
        ],

    },
]