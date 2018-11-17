import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {MenuItem} from '../../interfaces/menuItem';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input()  menuItems: MenuItem;
  isShow = false;
    constructor(private _httpService: HttpService) {
    }

    showBreadcrumb() {
       this.isShow = true;
    }

    showMenu(){
      this.isShow = false;
    }

    ngOnInit() {
      this._httpService.getMenuItems().subscribe((res) => {
        this.menuItems = res[0];
      });
    }

}
