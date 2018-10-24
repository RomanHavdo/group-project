import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppointmentWindowComponent} from './appointment-window.component';

describe('AppointmentWindowComponent', () => {
    let component: AppointmentWindowComponent;
    let fixture: ComponentFixture<AppointmentWindowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppointmentWindowComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentWindowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
