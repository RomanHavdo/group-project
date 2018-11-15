import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
    UserInfo: any = [];

    constructor(private _httpService: HttpService) {
    }

    ngOnInit() {
        this._httpService.getUserInformation().subscribe((res) => {
            this.UserInfo = res;
            this.UserInfo = this.UserInfo[0];
            console.log( this.UserInfo )
        });
    }

}
