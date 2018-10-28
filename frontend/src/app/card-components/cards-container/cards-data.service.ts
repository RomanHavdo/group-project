export class CardsDataService {
    private cards = [
        {url: '../../../assets/img/cards/call-doctor.jpg', link: {
            name: 'Виклик лікаря додому',
            route: '/some-rote-link'
        },
        subscribe: 'Якісна медична допомога у доступна з максимальною зручністю.'
    },
        {url: '../../../assets/img/cards/review.jpg', link: {
            name: 'Комплексні обстеження',
            route: '/some-rote-link'
        },
        subscribe: 'Консультації та обстеження у спеціалістів дозволяють отримати найдетальнішу інформацію про стан вашої дитини.'
    },
        {url: '../../../assets/img/cards/contact.jpg', link: {
            name: 'Контакти',
            route: '/some-rote-link'
        },
        subscribe: 'Ми на зв’язку цілодобово.'
    },
        {url: '../../../assets/img/cards/services.jpg', link: {
            name: 'Послуги',
            route: '/some-rote-link',
        },
        subscribe: 'Широкий вибір медичних послуг для забезпечення міцного здоров’я ваших дітей.'
    },
        {url: '../../../assets/img/cards/patients.jpg', link: {
            name: 'Пацієнтам',
            route: '/some-rote-link'
        },
        subscribe: 'Ми піклуємося про ваших дітей.'
    },
        {url: '../../../assets/img/cards/doctors.jpg', link: {
            name: 'Наші лікарі',
            route: '/some-rote-link'
        },
        subscribe: 'Висококваліфіковані різнопрофільні спеціалісти завжди готові допомогти вашим дітям.'
    }
    ];

    getData() {
        return this.cards;
    }
}
