import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
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
        signIn: 'Увійти',
        logIn: 'Зареєструватися'
    };
    contacts={
        phone:'321-654-98',
        mail:'BabyMed@gmail.com'
    }
}
