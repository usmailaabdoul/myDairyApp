const dairies = [
    {
        id: 1,
        title: 'Very Happy',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'very_happy',
        images: [
            require('./../res/img/dairyImg.jpg'),
            require('./../res/img/dairyImg.jpg'),
        ],
        date: new Date(),
        specialMemory: true
    },
    {
        id: 2,
        title: 'Happy',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'happy',
        images: null,
        date: new Date(),
        specialMemory: true
    },
    {
        id: 3,
        title: 'Bad',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'good',
        images: [
            require('./../res/img/dairyImg.jpg'),
            require('./../res/img/dairyImg.jpg'),
        ],
        date: new Date(),
        specialMemory: true
    },
    {
        id: 4,
        title: 'bleh',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'bleh',
        images: [
            require('./../res/img/dairyImg.jpg'),
            require('./../res/img/dairyImg.jpg'),
        ],
        date: new Date(),
        specialMemory: false
    },
    {
        id: 5,
        title: 'not_so_great',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'not_so_great',
        images: [
            require('./../res/img/dairyImg.jpg'),
            require('./../res/img/dairyImg.jpg'),
        ],
        date: new Date(),
        specialMemory: false
    },
    {
        id: 6,
        title: 'very_unhappy',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'very_unhappy',
        images: [
            require('./../res/img/dairyImg.jpg'),
            require('./../res/img/dairyImg.jpg'),
        ],
        date: new Date(),
        specialMemory: false
    },
];

const reminders = [
    {
        id: 1,
        title: 'Play football with friends',
        date: '2 days ago',
        completed: false,
        color: 'green',
    },
    {
        id: 2,
        title: 'Go parting with friends',
        date: '3 days ago',
        completed: false,
        color: 'yellow',
    },
    {
        id: 3,
        title: 'Study for Exams',
        date: 'Dec, 2018',
        completed: true,
        color: 'purple',
    },
    {
        id: 4,
        title: 'Start going to Gym',
        date: 'Feb, 2019',
        completed: true,
        color: 'red',
    },
    {
        id: 5,
        title: 'Trying out something to new',
        date: 'Mar, 2019',
        completed: true,
        color: 'brown',
    },
    
]
export {
    dairies,
    reminders
}