import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { BreadCrumb } from "../../interfaces/breadCrumb";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<BreadCrumb>;
  breadcrumbs1: Array<BreadCrumb>;
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.breadcrumbs = []
    this.breadcrumbs1 = []
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.breadcrumbs1.push({ label: this.router.url, url: this.router.url })

      var arrt = this.breadcrumbs1[0].label.split('/');
      if (arrt.length >= 3) {
        this.breadcrumbs[0] = { label: arrt[1], url: '/' + arrt[1] }
        this.breadcrumbs[1] = { label: arrt[2], url: '/' + arrt[1] + '/' + arrt[2] }

        if (arrt[1] == 'services') {
          this.breadcrumbs[0].label = 'послуги'
        }
        if (arrt[2] == 'doctorsBySpecialization') {
          this.breadcrumbs[1].label = 'спеціалісти'
        }
        if (this.breadcrumbs1.length > 1) {
          var arrt2 = this.breadcrumbs1[1].label.split('/');
          this.breadcrumbs[2] = { label: arrt2[3], url: '/' + arrt[1] + '/' + arrt[2] + '/' + arrt2[3] }
          if (arrt2[3] == 'appointment') {
            this.breadcrumbs[2].label = 'запис'
          }
        }
      }
      else {
        this.breadcrumbs[0] = { label: arrt[1], url: '/' + arrt[1] }
        if (arrt[1] == 'specialists') {
          this.breadcrumbs[0].label = 'спеціалісти'
        }
        if (this.breadcrumbs1.length > 1) {
          var arrt3 = this.breadcrumbs1[1].label.split('/');
          this.breadcrumbs[1] = { label: arrt3[2], url: '/' + arrt[1] + '/' + arrt3[2] + '/' + arrt3[3] }
          if (arrt3[2] == 'doctor') {
            this.breadcrumbs[1].label = 'лікар'
          }
        }
      }
    });
  }
}
