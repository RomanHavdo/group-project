import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService {
    public appConfig;

    constructor(private http: HttpClient) {
    }

    getAppConfigs(): Observable<any> {
        return this.http.get('http:/api/app_configs')
            .pipe(map(res => res));
    }

    getCarouselData(): Observable<any> {
        return this.http.get('http:/api/carousel_data')
            .pipe(map(res => res));
    }

    getCardItems(): Observable<any> {
        return this.http.get('http:/api/card_items')
            .pipe(map(res => res));
    }

    getMenuItems(): Observable<any> {
        return this.http.get('http:/api/menu_items')
            .pipe(map(res => res));
    }

    getListOfDoctors(): Observable<any> {
        return this.http.get('http:/api/all_doctors')
            .pipe(map(res => res));
    }

    getFiltratedListOfDoctors(serviceType: string): Observable<any> {
        return this.http.get('http:/api/doctors?serviceType=' + serviceType)
            .pipe(map(res => res));
    }

    getDoctorById(_id: number): Observable<any> {
        return this.http.get('http:/api/doctor/:' + _id)
            .pipe(map(res => res));
    }

    getSpecialistsPageData(): Observable<any> {
        return this.http.get('http:/api/specialists_page')
            .pipe(map(res => res));
    }

    getDoctorsPageData(serviceType): Observable<any> {
        return this.http.get('http:/api/doctorsPage?serviceType=' + serviceType)
            .pipe(map(res => res));
    }
}
