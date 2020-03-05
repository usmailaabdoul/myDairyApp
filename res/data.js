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
        date: new Date(),
        completed: false,
        colorId: 1,
    },
    {
        id: 2,
        title: 'Go parting with friends',
        date: new Date(),
        completed: false,
        colorId: 2,
    },
    {
        id: 3,
        title: 'Study for Exams',
        date: new Date(),
        completed: true,
        colorId: 3,
    },
    {
        id: 4,
        title: 'Start going to Gym',
        date: new Date(),
        completed: true,
        colorId: 4,
    },
    {
        id: 5,
        title: 'Trying out something to new',
        date: new Date(),
        completed: true,
        colorId: 5,
    },
    
]

export {
    dairies,
    reminders
}