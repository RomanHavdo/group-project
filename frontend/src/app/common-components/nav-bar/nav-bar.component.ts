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
    constructor(private _httpService: HttpService) {
    }

    ngOnInit() {
      this._httpService.getMenuItems().subscribe((res) => {
        this.menuItems = res[0];
      });
    }

}
