import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../appRoutes';
import { HoverDoctorDirective } from './hover-doctor.directive';
import { FormsModule } from '@angular/forms';
import { DoctorCardComponent } from './doctor-card-component/doctor-card.component';
import { DoctorsPageComponent } from './doctors-page.component';
import { DoctorsResolverService } from './doctors-resolver.service';
import { DoctorsPageResolverService } from './doctors-page-resolver.service';

@NgModule({
    declarations: [
        DoctorsPageComponent,
        DoctorCardComponent,
        HoverDoctorDirective,
    ],
    providers: [
        DoctorsResolverService,
        DoctorsPageResolverService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes, {scrollPositionRestoration: 'enabled'}
        )],
    exports: [DoctorsPageComponent]
})
export class DoctorsPageModule {

}
