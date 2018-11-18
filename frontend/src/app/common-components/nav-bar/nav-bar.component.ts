import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../interfaces/menuItem';
import {Observable} from "rxjs/internal/Observable";
import {AuthService} from "../../auth.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    @Input() menuItems: MenuItem;
    isShow = false;

    authUser: Observable<any>;

    constructor(private authService: AuthService) {
    }

    chechUserObject() {
       return this.authUser = this.authService.authUser;
    }

    userExit(){
        this.authService.userExit();
    }

    showBreadcrumb() {
       this.isShow = true;
    }

    showMenu(){
      this.isShow = false;
    }

    ngOnInit() {
        this.chechUserObject();
    }

}
