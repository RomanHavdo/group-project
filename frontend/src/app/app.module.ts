import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentWindowComponent } from './appointment-window/appointment-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from './carousel/carousel.module';

import { CardsContainerComponent } from './card-components/cards-container/cards-container.component';
import { CardComponent } from './card-components/card/card.component';
import { LeftCardsColumnComponent } from './card-components/left-cards-column/left-cards-column.component';
import { RightCardsColumnComponent } from './card-components/right-cards-column/right-cards-column.component';

// enableProdMode();

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
        CardsContainerComponent,
        CardComponent,
        LeftCardsColumnComponent,
        RightCardsColumnComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        CarouselModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}


