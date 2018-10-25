import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
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
