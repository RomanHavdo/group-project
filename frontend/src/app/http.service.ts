import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getCarouselData() {
        return this.http.get('./assets/db/carousel.json');
    }
}
