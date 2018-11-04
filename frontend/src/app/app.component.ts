import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    images ={} 
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

constructor(private httpService: HttpService) { }

ngOnInit() {
    this.httpService.getCarouselData().subscribe((data: any[]) => this.images = data);
}
}
