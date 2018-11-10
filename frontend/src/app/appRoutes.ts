import {AboutComponent} from "./Pages/about/about.component";
import {Routes} from "@angular/router";
import {NewsComponent} from "./Pages/news/news.component";
import {MainComponent} from "./Pages/main/main.component";
import {DoctorsComponent} from "./Pages/doctors/doctors.component";
import {ServicesComponent} from "./Pages/services/services.component";
import {DoctorsBySpecializationComponent} from "./Pages/services/doctors-by-specialization/doctors-by-specialization.component";
import {AppointmentComponent} from "./common-components/appointment/appointment.component";

export const appRoutes: Routes = [
        {path: '', component: MainComponent},
        {path: 'about', component: AboutComponent},
        {path: 'doctors', component: DoctorsComponent},
        {path: 'news', component: NewsComponent},
        {
            path: 'services',
            component: ServicesComponent,
            children: [
                {
                    path: 'doctorsBySpecialization', component: DoctorsBySpecializationComponent,
                    children: [
                        {
                            path: 'appointment', component: AppointmentComponent,
                        }]
                }
            ]
        }
    ]
;
