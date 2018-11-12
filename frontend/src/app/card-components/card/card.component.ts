import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {

    @Input() card: Card;

    constructor() { }

}
