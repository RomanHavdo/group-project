import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../interfaces/menuItem';
import {Observable} from "rxjs/internal/Observable";
import {AuthService} from "../../auth.service";
import {ChangerService} from '../../changer.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    @Input() menuItems: MenuItem;
    isShow = false;
    change:boolean;
    authUser: Observable<any>;

    constructor(private authService: AuthService, private _changer: ChangerService) {
    }

    chechUserObject() {
        return this.authUser = this.authService.authUser;
    }

    userExit() {
        this.authService.userExit();
    }

    showBreadcrumb() {
        this.isShow = true;
    }

    showMenu() {
        this.isShow = false;
    }

    ngOnInit() {
        this.chechUserObject();
        this._changer.configObservable.subscribe((res) => {
          this.change = res;
        })
    }

}
