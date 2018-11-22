import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumb } from '../../interfaces/breadCrumb';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  bcData: BreadCrumb;
  bc: Array<string>;
  params: string;

  @Input() navigation;

  constructor(private router: Router, private route: ActivatedRoute, public cd: ChangeDetectorRef, private _navs: NavigationService) {
    this.cd.detach();
  }

  ngOnChanges() {
    this.bcData = this._navs.updatePathData(this.navigation);
    this.bc = this.bcData.breadcrumbs;
    this.params = this.bcData.queryParams;
    this.cd.detectChanges();
  }

  ngOnInit() {
  }

}
