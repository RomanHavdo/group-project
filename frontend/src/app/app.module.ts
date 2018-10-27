import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentWindowComponent } from './appointment-window/appointment-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from './carousel/carousel.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}


