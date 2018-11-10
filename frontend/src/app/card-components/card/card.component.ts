
import { Component, Input, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    @Input() card: Card;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
      this._httpService.getCardItems().subscribe((res) => {
        console.log(res);
      });

    }

  }
