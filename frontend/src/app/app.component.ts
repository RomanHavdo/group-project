import {Component} from '@angular/core';
import {HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]

})

export class AppComponent {
    menuItems = {
        logo: '/assets/img/logo.png',
        clinicName: 'BabyMed',
        main: 'Головна',
        services: 'Послуги',
        doctors: 'Наші спеціалісти',
        news: 'Новини',
        about: 'Про нас',
        logIn: 'Увійти',
        signUp: 'Зареєструватися',
        user:'Особистий кабінет',
        exit: 'Вихід'
    };
    contacts = {
        phone: '321-654-98',
        mail: 'BabyMed@gmail.com'
    };

    constructor() {}

}
