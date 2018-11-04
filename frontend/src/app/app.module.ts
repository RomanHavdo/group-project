import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentWindowComponent } from './appointment-window/appointment-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from './carousel/carousel.module';

import { CardsContainerComponent } from './card-components/cards-container/cards-container.component';
import { CardComponent } from './card-components/card/card.component';
import { LinkButtonComponent } from './card-components/link-button/link-button.component';
import { OnHoverLinkButtonDirective } from './card-components/card/on-hover-link-button.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
        CardsContainerComponent,
        CardComponent,
        LinkButtonComponent,
        OnHoverLinkButtonDirective


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


