import { Component, OnInit } from '@angular/core';
import {CardsDataService} from './cards-data.service';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: ['./cards-container.component.scss'],
    providers: [CardsDataService],
})
export class CardsContainerComponent implements OnInit {

    cards = [];
    leftCardsColumn = [];
    rightCardsColumn = [];
    constructor(private cardsDataService: CardsDataService) {}

    ngOnInit() {
        this.cards = this.cardsDataService.getData();
        this.leftCardsColumn = this.cards.slice(0, this.cards.length / 2);
        this.rightCardsColumn = this.cards.slice(this.cards.length / 2);
    }

}
