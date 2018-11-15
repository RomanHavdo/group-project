import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {
    }

    getCarouselData() {
        return this.http.get('http:/api/carousel_data')
            .pipe(map(res => res));
    }

    getCardItems() {
        return this.http.get('http:/api/card_items')
            .pipe(map(res => res));
    }

    getMenuItems(): Observable<any> {
        return this.http.get('http:/api/menu_items')
            .pipe(map(res => res));
    }

    getUserInformation(): Observable<any> {
        return this.http.get('http:/user')
            .pipe(map(res => res));
    }

    createUser(info) {
        this.http.post('http:/user', info).subscribe();

    }
    userAuthentication(data){
        this.http.post('http:/login', data).subscribe();
    }
}
