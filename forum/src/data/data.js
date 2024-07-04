export const usersList = [
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
    },
    {
        id: 4,
        name: 'Élodie Martin',
        email: 'elodiem@mail.com',
    },
    {
        id: 5,
        name: 'Lucas Dubois',
        email: 'lucasd@mail.com',
    },
    {
        id: 6,
        name: 'Chloé Lefevre',
        email: 'chloel@mail.com',
    },
    {
        id: 7,
        name: 'Mathieu Bernard',
        email: 'mathieub@mail.com',
    },
    {
        id: 8,
        name: 'Léa Moreau',
        email: 'leam@mail.com',
    },
    {
        id: 9,
        name: 'Julien Petit',
        email: 'julienp@mail.com',
    },
    {
        id: 10,
        name: 'Sophie Richard',
        email: 'sophier@mail.com',
    },
    {
        id: 11,
        name: 'Thomas Roux',
        email: 'thomasr@mail.com',
    },
    {
        id: 12,
        name: 'Camille Fournier',
        email: 'camillef@mail.com',
    },
    {
        id: 13,
        name: 'Arthur Girard',
        email: 'arthurg@mail.com',
    },
    {
        id: 14,
        name: 'Louise Dupont',
        email: 'louised@mail.com',
    },
    {
        id: 15,
        name: 'Maxime Lambert',
        email: 'maximel@mail.com',
    }
];

export const categoriesList = [
    {
        id: 1,
        nameCode: 'get-started',
        name: 'Get Started',
        description: 'New to the community? Start here!',
        iconName: 'mdi-rocket-launch-outline',
        color: 'green',
    },
    {
        id: 2,
        nameCode: 'accessibility',
        name: 'Accessibility',
        description: 'Discuss tools and solutions to increase accessibility for all users.',
        iconName: 'mdi-magic-staff',
        color: 'blue',
    },
    {
        id: 3,
        nameCode: 'announcement',
        name: 'Announcement',
        description: 'Stay up to date with the latest news and announcements.',
        iconName: 'mdi-bullhorn-outline',
        color: 'orange',
    },
    {
        id: 4,
        nameCode: 'suggestions',
        name: 'Suggestions',
        description: 'Have an idea to improve the community or the platform? Share it here!',
        iconName: 'mdi-lightbulb-on-outline',
        color: 'yellow',
    },
    {
        id: 5,
        nameCode: 'issues',
        name: 'Issues',
        description: 'Report bugs and issues you encounter while using the platform.',
        iconName: 'mdi-bug-outline',
        color: 'red',
    },
    {
        id: 6,
        nameCode: 'off-topic',
        name: 'Off Topic',
        description: 'Discuss anything not related to the other categories.',
        iconName: 'mdi-chat-outline',
        color: 'purple',
    },
    {
        id: 7,
        nameCode: 'your-story',
        name: 'Your Story',
        description: 'Share your story with the community.',
        iconName: 'mdi-pencil-outline',
        color: 'pink',
    },
]

export const postsList = [
    // Get Started
    {
        id: 1,
        title: 'Welcome to the Community!',
        content: 'Hello everyone! I just joined this community and I am excited to be here. I look forward to connecting with you all and learning more about this platform.',
        authorId: 1,
        categoryNameCode: 'get-started',
        createdAt: '2023-07-02 09:15:00',
        likes: 25,
        replies: [
            {
                content: 'Welcome aboard! Feel free to ask any questions.',
                authorId: 2,
                createdAt: '2024-07-02 09:30:00',
            },
            {
                content: 'Glad to have you here!',
                authorId: 3,
                createdAt: '2024-07-02 10:00:00',
            }
        ],
    },
    {
        id: 2,
        title: 'Getting Started Guide',
        content: 'For all the newcomers, I recommend checking out the getting started guide. It has everything you need to begin your journey here.',
        authorId: 4,
        categoryNameCode: 'get-started',
        createdAt: '2023-06-27 08:45:00',
        likes: 15,
        replies: [
            {
                content: 'The guide was super helpful, thanks!',
                authorId: 5,
                createdAt: '2024-07-03 09:10:00',
            },
            {
                content: 'A must-read for all newbies.',
                authorId: 6,
                createdAt: '2024-07-03 09:30:00',
            }
        ],
    },

    // Accessibility
    {
        id: 3,
        title: 'Accessible Design Tips',
        content: 'Creating accessible content is crucial for inclusive design. Here are some tips to ensure your content is accessible to everyone.',
        authorId: 7,
        categoryNameCode: 'accessibility',
        createdAt: '2024-07-01 14:20:00',
        likes: 30,
        replies: [
            {
                content: 'Thanks for sharing these tips!',
                authorId: 8,
                createdAt: '2024-07-01 15:00:00',
            },
            {
                content: 'This is very helpful!',
                authorId: 9,
                createdAt: '2024-07-01 15:30:00',
            }
        ],
    },
    {
        id: 4,
        title: 'Tools for Accessibility Testing',
        content: 'I found some great tools for testing accessibility. Check them out and let me know what you think!',
        authorId: 10,
        categoryNameCode: 'accessibility',
        createdAt: '2024-07-03 11:50:00',
        likes: 20,
        replies: [
            {
                content: 'These tools are great! Thanks for sharing.',
                authorId: 11,
                createdAt: '2024-07-03 12:10:00',
            },
            {
                content: 'I use some of these tools regularly.',
                authorId: 12,
                createdAt: '2024-07-03 12:40:00',
            }
        ],
    },

    // Announcement
    {
        id: 5,
        title: 'New Feature Release!',
        content: 'We are excited to announce a new feature that will enhance your experience. Check out the details in the link below.',
        authorId: 13,
        categoryNameCode: 'announcement',
        createdAt: '2024-07-01 10:00:00',
        likes: 40,
        replies: [
            {
                content: 'Can’t wait to try this out!',
                authorId: 14,
                createdAt: '2024-07-01 10:30:00',
            },
            {
                content: 'Great addition to the platform.',
                authorId: 15,
                createdAt: '2024-07-01 11:00:00',
            }
        ],
    },
    {
        id: 6,
        title: 'Upcoming Maintenance Downtime',
        content: 'Please note that the platform will be down for maintenance on July 5th from 1 AM to 3 AM. Thank you for your understanding.',
        authorId: 1,
        categoryNameCode: 'announcement',
        createdAt: '2024-07-02 13:45:00',
        likes: 10,
        replies: [
            {
                content: 'Thanks for the heads-up!',
                authorId: 2,
                createdAt: '2024-07-02 14:00:00',
            },
            {
                content: 'Hope the maintenance goes smoothly.',
                authorId: 3,
                createdAt: '2024-07-02 14:30:00',
            }
        ],
    },

    // Suggestions
    {
        id: 7,
        title: 'New Forum Section Suggestion',
        content: 'I think it would be great to have a section dedicated to project showcases. What do you all think?',
        authorId: 4,
        categoryNameCode: 'suggestions',
        createdAt: '2024-07-01 12:30:00',
        likes: 35,
        replies: [
            {
                content: 'I love this idea!',
                authorId: 5,
                createdAt: '2024-07-01 13:00:00',
            },
            {
                content: 'A project showcase section would be awesome.',
                authorId: 6,
                createdAt: '2024-07-01 13:30:00',
            }
        ],
    },
    {
        id: 8,
        title: 'Dark Mode Suggestion',
        content: 'Would anyone else like to see a dark mode option for the platform? It would be easier on the eyes, especially at night.',
        authorId: 7,
        categoryNameCode: 'suggestions',
        createdAt: '2024-07-02 16:15:00',
        likes: 45,
        replies: [
            {
                content: 'Dark mode would be amazing!',
                authorId: 8,
                createdAt: '2024-07-02 16:45:00',
            },
            {
                content: 'Yes, please add dark mode.',
                authorId: 9,
                createdAt: '2024-07-02 17:00:00',
            }
        ],
    },

    // Issues
    {
        id: 9,
        title: 'Login Issue on Mobile',
        content: 'Is anyone else having trouble logging in on their mobile devices? It keeps redirecting me back to the login page.',
        authorId: 10,
        categoryNameCode: 'issues',
        createdAt: '2024-07-01 08:50:00',
        likes: 5,
        replies: [
            {
                content: 'Yes, I am experiencing the same issue.',
                authorId: 11,
                createdAt: '2024-07-01 09:10:00',
            },
            {
                content: 'The same thing is happening to me.',
                authorId: 12,
                createdAt: '2024-07-01 09:30:00',
            }
        ],
    },
    {
        id: 10,
        title: 'Page Loading Error',
        content: 'I keep getting an error message when trying to load the forum page. Anyone else having this problem?',
        authorId: 13,
        categoryNameCode: 'issues',
        createdAt: '2024-07-03 14:25:00',
        likes: 8,
        replies: [
            {
                content: 'I had the same issue, but it seems to be working now.',
                authorId: 14,
                createdAt: '2024-07-03 14:50:00',
            },
            {
                content: 'Try clearing your cache and cookies. It worked for me.',
                authorId: 15,
                createdAt: '2024-07-03 15:00:00',
            }
        ],
    },

    // Off Topic
    {
        id: 11,
        title: 'Favorite Books',
        content: 'What are some of your favorite books? I’m looking for new recommendations.',
        authorId: 1,
        categoryNameCode: 'off-topic',
        createdAt: '2024-07-02 17:40:00',
        likes: 20,
        replies: [
            {
                content: 'I highly recommend "To Kill a Mockingbird".',
                authorId: 2,
                createdAt: '2024-07-02 18:00:00',
            },
            {
                content: 'You should check out "1984" by George Orwell.',
                authorId: 3,
                createdAt: '2024-07-02 18:20:00',
            }
        ],
    },
    {
        id: 12,
        title: 'Favorite Movies',
        content: 'What are some movies you guys absolutely love? I need something good to watch this weekend.',
        authorId: 4,
        categoryNameCode: 'off-topic',
        createdAt: '2024-07-03 19:10:00',
        likes: 25,
        replies: [
            {
                content: 'I love "Inception". It’s a mind-bender!',
                authorId: 5,
                createdAt: '2024-07-03 19:30:00',
            },
            {
                content: 'You should watch "The Shawshank Redemption".',
                authorId: 6,
                createdAt: '2024-07-03 20:00:00',
            }
        ],
    },

    // Your Story
    {
        id: 13,
        title: 'My Journey into Coding',
        content: 'I started learning to code last year, and it has been an incredible journey. Here’s how it all began for me...',
        authorId: 7,
        categoryNameCode: 'your-story',
        createdAt: '2024-07-01 21:45:00',
        likes: 50,
        replies: [
            {
                content: 'Your story is so inspiring!',
                authorId: 8,
                createdAt: '2024-07-01 22:00:00',
            },
            {
                content: 'Thank you for sharing your journey.',
                authorId: 9,
                createdAt: '2024-07-01 22:30:00',
            }
        ],
    },
    {
        id: 14,
        title: 'From Hobby to Career',
        content: 'What started as a hobby has now turned into my career. Here’s how I made the transition...',
        authorId: 10,
        categoryNameCode: 'your-story',
        createdAt: '2024-07-03 23:10:00',
        likes: 35,
        replies: [
            {
                content: 'I’m in the same boat! Thanks for sharing.',
                authorId: 11,
                createdAt: '2024-07-03 23:30:00',
            },
            {
                content: 'Very motivating! Congratulations on your success.',
                authorId: 12,
                createdAt: '2024-07-04 00:00:00',
            }
        ],
    },
];
