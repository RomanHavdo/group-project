// TODO: use ProdMod after dev stage, uncomment two lines of code below
// import { enableProdMode} from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentWindowComponent } from './appointment-window/appointment-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from './carousel/carousel.module';
import { CardsComponentModule } from './card-components/cards-component.module';
import { HttpService } from './http.service';

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
        CarouselModule,
        HttpClientModule,
        CardsComponentModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})

export class AppModule {
}


