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
                transform: 'translateX(110%)'
            }
            )),
            state('inactive-left', style({
                transform: 'translateX(-110%)'
            }
            )),
            state('active', style({
                transform: 'translateX(0%)'
            })),

            transition('inactive => active', animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))),
            transition('active => inactive', animate('300ms ease-in-out', style({ transform: 'translateX(-110%)' }))),
            transition('inactive-left => active', animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))),
            transition('active => inactive-left', animate('300ms ease-in-out', style({ transform: 'translateX(110%)' }))),
        ]),
    ]
})
export class CarouselComponent implements OnInit {
    counter = 0;
    counterText = 0;
    counterInfo=0;

    activeButton = "";
    stan = 'inactive';
    getState() {
        return this.stan;
    }

    mouseEnterSpan() {
        document.getElementById('carousel-btn').classList.remove('span-btn-none');
    }
    mouseLeaveSpan() {
        document.getElementById('carousel-btn').classList.add('span-btn-none');
    }


    onClickInc() {
        const total = this.images.pictures.length - 1;
        const totalText = this.images.textH1.length - 1;
        const totalInfo = this.images.textInfo.length - 1;
      
        this.stan = 'inactive';
        this.counter = this.counter < total ? this.counter + 1 : 0;
        this.counterText = this.counterText < totalText ? this.counterText + 1 : 0;
        this.counterInfo=this.counterInfo < totalInfo ? this.counterInfo + 1 : 0;

        this.setActive(`btn${this.counter}`);
    }
    onClickDec() {
        const total = this.images.pictures.length - 1;
        const totalText = this.images.textH1.length - 1;
        const totalInfo = this.images.textInfo.length - 1;
      
        this.stan = 'inactive-left';

        this.counterInfo = this.counterInfo > 0 ? this.counterInfo - 1 : totalInfo;
        this.counterText = this.counterText > 0 ? this.counterText - 1 : totalText;
        this.counter = this.counter > 0 ? this.counter - 1 : total;

        this.setActive(`btn${this.counter}`);
    }
    onClickItem(event) {
        this.counter = Number(event.explicitOriginalTarget.value);
        this.counterText = Number(event.explicitOriginalTarget.value);
        this.counterInfo = Number(event.explicitOriginalTarget.value);
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
