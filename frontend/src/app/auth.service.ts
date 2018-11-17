import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
    authUser: any = [];

    constructor(private http: HttpClient) {
    }

    getUserInformation(): Observable<any> {
        return this.http.get('http:/user')
            .pipe(map(res => res));
    }

    createUser(info) {
        this.http.post('http:/user', info).subscribe();

    }

    userAuthentication(data) {
        return this.http.post('http:/login', data).pipe(map(res => this.authUser = res)).subscribe();
    }
}
