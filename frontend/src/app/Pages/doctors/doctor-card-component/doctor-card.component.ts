import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-doctor-card',
    templateUrl: './doctor-card.component.html',
    styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent {
    @Input() doctors;

    constructor(private element: ElementRef) { }

}
