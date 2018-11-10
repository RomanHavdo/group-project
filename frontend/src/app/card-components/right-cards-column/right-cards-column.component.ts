import { Component, Input, OnInit, AfterViewChecked, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-right-cards-column',
    templateUrl: './right-cards-column.component.html',
    styleUrls: ['./right-cards-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('appearLeft', [
            state('hidden', style({
                opacity: 0,
                transform: 'translateX(100%)'
            })),
            state('visible', style({
                opacity: 1,
                transform: 'translateX(0%)'
            })),
            transition('hidden => visible', [animate('0.6s 300ms ease-out')])
        ])
    ]
    })
export class RightCardsColumnComponent implements OnInit, AfterViewChecked {
    @Input() cards:Array<Card>;

    appear = false;

    constructor(public cd: ChangeDetectorRef) {}

    ngOnInit() {}

    ngAfterViewChecked() {
        this.show();
        this.cd.detectChanges();
    }

    show(): void {
        this.appear = true;
    }

}
