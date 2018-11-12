import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from '../../http.service';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: ['./cards-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContainerComponent implements OnInit {

    cards: Array<Card> = [];
    leftCardsColumn: Array<Card> = [];
    rightCardsColumn: Array<Card> = [];

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this._httpService.getCardItems().subscribe((res) => {
            this.cards = res[0].gridItems;
            this.leftCardsColumn = this.cards.slice(0, this.cards.length / 2);
            this.rightCardsColumn = this.cards.slice(this.cards.length / 2);
          console.log(this.leftCardsColumn);
          console.log(this.rightCardsColumn);
        });
      }

}
