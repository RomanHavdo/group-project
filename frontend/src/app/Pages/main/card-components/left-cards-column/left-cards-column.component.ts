import { Component, Input, OnInit, AfterViewChecked, ChangeDetectorRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
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
            transition('hidden => visible', [animate('0.8s 50ms ease-out')])
        ])
    ]
    })
export class LeftCardsColumnComponent implements OnInit, AfterViewChecked {
    @Input() cards: Array<Card>;

    appear = false;

    constructor(public cd: ChangeDetectorRef) {}

    ngOnInit() {}

    ngAfterViewChecked() {
        this.cd.detectChanges();
    }

    show(): void {
        this.appear = true;
    }

    @HostListener('window:scroll', ['$event']) onMouseEnter(e) {
        if (window.pageYOffset > 300) {
            this.show();
        }
    }
}
