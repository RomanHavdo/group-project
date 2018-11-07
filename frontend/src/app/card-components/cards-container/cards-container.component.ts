import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {CardsDataService} from './cards-data.service';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: ['./cards-container.component.scss'],
    providers: [CardsDataService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContainerComponent implements OnInit {

    cards:Array<Card> = [];
    leftCardsColumn:Array<any> = [];
    rightCardsColumn:Array<any> = [];
    constructor(private cardsDataService: CardsDataService) {}

    ngOnInit() {
        this.cards = this.cardsDataService.getData();
        this.leftCardsColumn = this.cards.slice(0, this.cards.length / 2);
        this.rightCardsColumn = this.cards.slice(this.cards.length / 2);
    }

}
