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
import {CardsContainerComponent} from './card-components/cards-container/cards-container.component';
import {CardComponent} from './card-components/card/card.component';
import {LinkButtonComponent} from './card-components/link-button/link-button.component';
import {OnHoverLinkButtonDirective} from './card-components/card/on-hover-link-button.directive';
import {ServicesComponent} from './Pages/services/services.component';
import {DoctorsComponent} from './Pages/doctors/doctors.component';
import {NewsComponent} from './Pages/news/news.component';
import {AboutComponent} from './Pages/about/about.component';
import {MainComponent} from './Pages/main/main.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'services', component: ServicesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AppointmentWindowComponent,
        CardsContainerComponent,
        CardComponent,
        LinkButtonComponent,
        OnHoverLinkButtonDirective,
        ServicesComponent,
        DoctorsComponent,
        NewsComponent,
        AboutComponent,
        MainComponent

    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
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


