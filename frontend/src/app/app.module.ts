import {enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ToastrService} from './toastr.service';
import {AppComponent} from './app.component';

import {SuggestionComponent} from './Pages/main/suggestion/suggestion.component';
import {NavBarComponent} from './common-components/nav-bar/nav-bar.component';
import {FooterComponent} from './common-components/footer/footer.component';

import {AppointmentWindowComponent} from './appointment-window/appointment-window.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CarouselModule} from './Pages/main/carousel/carousel.module';

import {ServicesComponent} from './Pages/services/services.component';
import {AboutComponent} from './Pages/about/about.component';
import {MainComponent} from './Pages/main/main.component';
import { SpecialistsPageModule } from './Pages/specialists/specialists-page.module';

import {HttpClientModule} from '@angular/common/http';
import {CardsComponentModule} from './Pages/main/card-components/cards-component.module';
import {HttpService} from './http.service';

import {appRoutes} from './appRoutes';
import {LogInComponent} from './common-components/log-in/log-in.component';
import {SignUpComponent} from './common-components/sign-up/sign-up.component';
import {BreadcrumbComponent} from './common-components/breadcrumb/breadcrumb.component';
import {DoctorsBySpecializationComponent} from './Pages/services/doctors-by-specialization/doctors-by-specialization.component';
import {AppointmentComponent} from './common-components/appointment/appointment.component';
import {UserAccountComponent} from './Pages/user-account/user-account.component';
import {AuthService} from './auth.service';

import { RegisterReceptionComponent } from './Pages/register-reception/register-reception.component';
import { DoctorsPageModule } from './Pages/doctors/doctors-page.module';
import { RegisterReciptionsResolverService } from './Pages/register-reception/register-reception-resolve.service';
import { NavigationService } from './navigation.service';


enableProdMode();

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
        ServicesComponent,
        AboutComponent,
        MainComponent,
        LogInComponent,
        SignUpComponent,
        BreadcrumbComponent,
        DoctorsBySpecializationComponent,
        AppointmentComponent,
        SuggestionComponent,
        UserAccountComponent,
        SuggestionComponent,
        RegisterReceptionComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            }
        ),
        BrowserModule,
        FormsModule,
        NgbModule,
        CarouselModule,
        HttpClientModule,
        CardsComponentModule,
        CardsComponentModule,
        SpecialistsPageModule,
        DoctorsPageModule,
    ],
    providers: [
        HttpService,
        AuthService,
        ToastrService,
        RegisterReciptionsResolverService,
        NavigationService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
