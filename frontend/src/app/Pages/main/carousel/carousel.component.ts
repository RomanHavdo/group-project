import {Component, Input, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {HttpService} from '../../../http.service';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    animations: [
        trigger('imgState', [
            state('inactive', style({
                opacity: 0
            }
            )),
            state('active', style({
                opacity: 1
            })),

            transition('inactive => active', animate('300ms ease-in-out')),
            transition('active => inactive', animate('300ms ease-in-out'))
        ]),
    ]
})
export class CarouselComponent implements OnInit {

    images: any = [];
    counter  = 0;
    counterText = 0;
    counterInfo = 0;
    activeButton = '';
    id: any;

    runTimeout(): void {
        this.id = setTimeout(() => {
            this.onClickInc();
        }, 3000);
    }

    runTimeout2(): void {
        this.id = setTimeout(() => {
            this.runTimeout();
        }, 7000);
    }

    mouseEnterSpan(el): void {
        el.classList.remove('span-btn-none');
        clearTimeout(this.id);
        this.runTimeout2();
    }
    mouseLeaveSpan(el): void {
       el.classList.add('span-btn-none');
    }

    onClickInc(): void {
        clearTimeout(this.id);
        this.runTimeout();
        const total = this.images.length - 1;
        const totalText = this.images.length - 1;
        const totalInfo = this.images.length - 1;

        this.counter = this.counter < total ? this.counter + 1 : 0;
        this.counterText = this.counterText < totalText ? this.counterText + 1 : 0;
        this.counterInfo = this.counterInfo < totalInfo ? this.counterInfo + 1 : 0;

        this.setActive(`btn${this.counter}`);
    }

    onClickDec(): void {
        clearTimeout(this.id);
        this.runTimeout();
        const total = this.images.length - 1;
        const totalText = this.images.length - 1;
        const totalInfo = this.images.length - 1;

        this.counterInfo = this.counterInfo > 0 ? this.counterInfo - 1 : totalInfo;
        this.counterText = this.counterText > 0 ? this.counterText - 1 : totalText;
        this.counter = this.counter > 0 ? this.counter - 1 : total;

        this.setActive(`btn${this.counter}`);
    }

    onClickItem(event: any): void {
        clearTimeout(this.id);
        this.runTimeout();
        this.counter = Number(event.target.value);
        this.counterText = Number(event.target.value);
        this.counterInfo = Number(event.target.value);
        this.setActive(`btn${this.counter}`);
    }

    setActive(buttonName: string): void {
        this.activeButton = buttonName;
    }

    isActive(buttonName: string): any {
        return this.activeButton === buttonName;
    }


    constructor(private _httpService: HttpService) {
        this.runTimeout();
        this.setActive('btn0');
    }

    ngOnInit() {
        this._httpService.getCarouselData().subscribe((res) => {
            this.images = res;
            this.images = this.images[0].carouselItems;
        });
    }

}

