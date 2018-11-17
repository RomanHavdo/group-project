import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-specialist-card',
    templateUrl: './specialist-card.component.html',
    styleUrls: ['./specialist-card.component.scss']
})
export class SpecialistCardComponent {
    @Input() doctors;
    @Input() searchStr;
    @Input() selectedValue;

    public found = false;

    constructor(private element: ElementRef) { }

    stopPropagation(e) {
        e.stopPropagation();
    }
}
