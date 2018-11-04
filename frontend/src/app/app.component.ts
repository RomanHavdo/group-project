import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]

})
export class AppComponent implements OnInit {
    images = [];

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
    contacts = {
        phone: '321-654-98',
        mail: 'BabyMed@gmail.com'
    };

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getCarouselData().subscribe((data: any[]) => this.images = data);
    }
}
