import { Component, Input, OnInit, AfterViewChecked, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';
import { Card } from '../../../../interfaces/card';

@Component({
    selector: 'app-left-cards-column',
    templateUrl: './left-cards-column.component.html',
    styleUrls: ['./left-cards-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('appearLeft', [
            state('hidden', style({
                opacity: 0,
                transform: 'translateX(-100%)'
            })),
            state('visible', style({
                opacity: 1,
                transform: 'translateX(0%)'
            })),
            transition('hidden => visible', [animate('0.5s 100ms ease-out')])
        ])
    ]
    })
export class LeftCardsColumnComponent implements OnInit, AfterViewChecked {
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
