import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})

export class AppComponent {
    
    images ={
        "pictures": [
            'assets/img/slides/slide1.jpg',
            'assets/img/slides/slide2.jpg',
            'assets/img/slides/slide3.jpg',
            'assets/img/slides/slide4.jpg',
            'assets/img/slides/slide5.jpg',
        ],
        textH1:[
            'Opening',
            'Closing',
            'Check',
            'Move',
            'What'
        ],
        textInfo:[
            'Opening new hospital',
            'Closing new hospital',
            'Check hospital',
            'Move our hospital',
            'What is gooing'
        ]

    } 

    
    menuItems = {
        logo: '/assets/img/logo.png',
        clinicName: 'BabyMed',
        main: 'Головна',
        about: 'Про нас',
        services: 'Послуги та ціни',
        doctors: 'Наші лікарі',
        contacts: 'Контакти',
        signIn: 'Увійти',
        logIn: 'Зареєструватися'
    };
}
