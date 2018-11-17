import {AboutComponent} from './Pages/about/about.component';
import {Routes} from '@angular/router';
import {NewsComponent} from './Pages/news/news.component';
import {MainComponent} from './Pages/main/main.component';
import {ServicesComponent} from './Pages/services/services.component';
import {DoctorsBySpecializationComponent} from './Pages/services/doctors-by-specialization/doctors-by-specialization.component';
import {AppointmentComponent} from './common-components/appointment/appointment.component';
import { SpecialistsPageComponent } from './Pages/specialists/specialists-page.component';

import { SpecialistsResolverService } from './Pages/specialists/specialists-resolver.service';
import { SpecialistsPageResolverService } from './Pages/specialists/specialists-page-resolver.service';
import { DoctorsPageComponent } from './Pages/doctors/doctors-page.component';
import { DoctorsResolverService } from './Pages/doctors/doctors-resolver.service';
import { DoctorsPageResolverService } from './Pages/doctors/doctors-page-resolver.service';

export const appRoutes: Routes = [
        {path: '', component: MainComponent},
        {path: 'about', component: AboutComponent},
        {path: 'specialists/doctors', component: DoctorsPageComponent,
            resolve: {
                doctors: DoctorsResolverService,
                pageData: DoctorsPageResolverService
            }
        },
        {path: 'specialists', component: SpecialistsPageComponent,
            resolve: {
                doctors: SpecialistsResolverService,
                pageData: SpecialistsPageResolverService
            },
        },
        {path: 'news', component: NewsComponent},
        {path: 'services/doctors', component: ServicesComponent},
        {
            path: 'services',
            component: ServicesComponent,
            data: {breadcrumb: 'послуги'},
            children: [
                {
                    path: 'doctorsBySpecialization',
                    component: DoctorsBySpecializationComponent,
                    data: {breadcrumb: 'спеціалісти'},
                    children: [
                        {
                            path: 'appointment',
                            component: AppointmentComponent,
                            data: {breadcrumb: 'запис'},
                        }]
                }
            ]
        }
    ]
;
