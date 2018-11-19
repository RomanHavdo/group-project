import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
    UserInfo: any = [];

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.UserInfo = this.authService.authUser;
    }

}
