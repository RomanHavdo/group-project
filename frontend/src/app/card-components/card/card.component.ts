import { Component, Input, AfterViewChecked, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

@Component({
    selector: 'app-card-component',
    animations: [
        trigger('show', [
            state('hidden', style({
                opacity: 0,
                width: '30%',
                right: '0%',
                top: '0%',
                transform: 'rotateX(90deg)'
            })),
            state('visible', style({
                opacity: 1,
                width: '80%',
                right: '0%',
                top: '0%',
                transform: 'rotateX(0deg)'
            })),
            transition('hidden => visible', [animate('0.6s')])
        ])
    ],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewChecked {
    isVisible = false;

    @Input() card;

    constructor() { }
    ngOnInit() {}

    ngAfterViewChecked() {
        this.show();
    }

    show(): void {
        this.isVisible = true;
    }

  }
