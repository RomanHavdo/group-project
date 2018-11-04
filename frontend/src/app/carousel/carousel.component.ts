import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    animations: [
        trigger('imgState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active', style({
                opacity: 1
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('300ms ease-in')),
        ])
    ]
})

export class CarouselComponent implements OnInit {

    @Input() images: Array<string>;
    counter = 0;
    activeButton = '';

    onClickInc() {
        const total = this.images.length - 1;
        this.counter = this.counter < total ? this.counter + 1 : 0;
        this.setActive(`btn${this.counter}`);
    }
    onClickDec() {
        const total = this.images.length - 1;
        this.counter = this.counter > 0 ? this.counter - 1 : total;
        this.setActive(`btn${this.counter}`);
    }
    onClickItem(event) {
        this.counter = Number(event.explicitOriginalTarget.value);
        this.setActive(`btn${this.counter}`);
    }

    setActive(buttonName) {
        this.activeButton = buttonName;
    }

    isActive(buttonName) {
        return this.activeButton === buttonName;
    }

    constructor(private _httpService: HttpService) {
        setInterval(() => {
            this.onClickInc();
        }, 3000);
    }


    ngOnInit(){
     this._httpService.getCarouselData()
     .subscribe(res => {
       console.log(res);
     })
    }

}
