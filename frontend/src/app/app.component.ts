import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent {
    images=[
        'assets/img/slides/slide1.jpg',
        'assets/img/slides/slide2.jpg',
        'assets/img/slides/slide3.jpg',
        'assets/img/slides/slide4.jpg',
        'assets/img/slides/slide5.jpg',
    ];
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
