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
    },
    {
        id: 2,
        title: 'Happy',
        dairyContent: 'simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the indus',
        mood: 'happy',
        images: null,
        date: new Date(),
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
    },
];

export {
    dairies
}