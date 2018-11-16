import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {SuggestionComponent} from './Pages/main/suggestion/suggestion.component';
import {NavBarComponent} from './common-components/nav-bar/nav-bar.component';
import {FooterComponent} from './common-components/footer/footer.component';

import {AppointmentWindowComponent} from './appointment-window/appointment-window.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CarouselModule} from './Pages/main/carousel/carousel.module';

import {ServicesComponent} from './Pages/services/services.component';
import {DoctorsComponent} from './Pages/doctors/doctors.component';
import {NewsComponent} from './Pages/news/news.component';
import {AboutComponent} from './Pages/about/about.component';
import {MainComponent} from './Pages/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { CardsComponentModule } from './Pages/main/card-components/cards-component.module';
import { HttpService } from './http.service';

import { appRoutes } from './appRoutes';
import { LogInComponent } from './common-components/log-in/log-in.component';
import { SignUpComponent } from './common-components/sign-up/sign-up.component';
import { BreadcrumbComponent } from './common-components/breadcrumb/breadcrumb.component';
import { DoctorsBySpecializationComponent } from './Pages/services/doctors-by-specialization/doctors-by-specialization.component';
import { AppointmentComponent } from './common-components/appointment/appointment.component';
import { RegisterReceptionComponent } from './Pages/register-reception/register-reception.component';


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
        SignUpComponent,
        BreadcrumbComponent,
        DoctorsBySpecializationComponent,
        AppointmentComponent,
        SuggestionComponent,
        RegisterReceptionComponent

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
