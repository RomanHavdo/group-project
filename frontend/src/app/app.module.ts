import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {AppointmentWindowComponent} from './appointment-window/appointment-window.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CarouselModule} from './carousel/carousel.module';

import {ServicesComponent} from './Pages/services/services.component';
import {DoctorsComponent} from './Pages/doctors/doctors.component';
import {NewsComponent} from './Pages/news/news.component';
import {AboutComponent} from './Pages/about/about.component';
import {MainComponent} from './Pages/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { CardsComponentModule } from './card-components/cards-component.module';
import { HttpService } from './http.service';

import {appRoutes} from './appRoutes';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
        ServicesComponent,
        DoctorsComponent,
        NewsComponent,
        AboutComponent,
        MainComponent,
        LogInComponent,
        SignUpComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
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