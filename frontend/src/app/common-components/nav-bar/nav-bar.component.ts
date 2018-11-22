import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    @Input() menuItems: MenuItem;
    isShow = false;
    public navPath: string;

    authUser: Observable<any>;

    constructor(private router: Router, private route: ActivatedRoute,
        private authService: AuthService) {

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.navPath = decodeURI(this.router.url);
            this.showBreadcrumb(this.router.url);
        });
      }

    chechUserObject() {
        return this.authUser = JSON.parse(localStorage.getItem('authUser'));
    }

    userExit() {
        this.authService.userExit();
    }

    showBreadcrumb(url) {
        if ( url.includes('services') || url.includes('specialists')) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }

    ngOnInit() {
    }

}
