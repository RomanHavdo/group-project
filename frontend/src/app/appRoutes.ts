import {AboutComponent} from './Pages/about/about.component';
import {Routes} from '@angular/router';
import {NewsComponent} from './Pages/news/news.component';
import {MainComponent} from './Pages/main/main.component';
import {DoctorsComponent} from './Pages/doctors/doctors.component';
import {ServicesComponent} from './Pages/services/services.component';
import {DoctorsBySpecializationComponent} from './Pages/services/doctors-by-specialization/doctors-by-specialization.component';
import {AppointmentComponent} from './common-components/appointment/appointment.component';

export const appRoutes: Routes = [
        {path: '', component: MainComponent},
        {path: 'about', component: AboutComponent, data: {breadcrumb: 'про нас'}},
        {path: 'doctors', component: DoctorsComponent, data: {breadcrumb: 'лікарі'}},
        {path: 'news', component: NewsComponent, data: {breadcrumb: 'новини'}},
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
