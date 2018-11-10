import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { filter } from 'rxjs/operators';
import {BreadCrumb} from "../../interfaces/breadCrumb";

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: Array<BreadCrumb>;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.breadcrumbs = [];
        this.updateBreadcrumb();
        this.initBreadcrumbsListening();
    }

    private initBreadcrumbsListening() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {  // note, we don't use event
                this.breadcrumbs = [];
                this.updateBreadcrumb();
            });
    }

    private updateBreadcrumb() {
        let currentRoute = this.route.root,
            url = '';
        do {
            let childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(route => {
                if (route.outlet === 'primary') {
                    let routeSnapshot = route.snapshot;
                    url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                    this.breadcrumbs.push({
                        label: route.snapshot.data.breadcrumb,
                        url: url
                    });
                    console.log(JSON.stringify(this.breadcrumbs));
                    currentRoute = route;
                }
            })
        } while (currentRoute);
    }
}
