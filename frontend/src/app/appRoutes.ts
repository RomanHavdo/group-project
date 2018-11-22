import {AboutComponent} from './Pages/about/about.component';
import {Routes} from '@angular/router';
import {MainComponent} from './Pages/main/main.component';
import {ServicesComponent} from './Pages/services/services.component';
import {UserAccountComponent} from './Pages/user-account/user-account.component';
import {SpecialistsPageComponent} from './Pages/specialists/specialists-page.component';

import {SpecialistsResolverService} from './Pages/specialists/specialists-resolver.service';
import {SpecialistsPageResolverService} from './Pages/specialists/specialists-page-resolver.service';
import {DoctorsPageComponent} from './Pages/doctors/doctors-page.component';
import {DoctorsResolverService} from './Pages/doctors/doctors-resolver.service';
import {DoctorsPageResolverService} from './Pages/doctors/doctors-page-resolver.service';
import {RegisterReceptionComponent} from './Pages/register-reception/register-reception.component';
import { RegisterReciptionsResolverService } from './Pages/register-reception/register-reception-resolve.service';

export const appRoutes: Routes = [
        {path: '', component: MainComponent},
        {path: 'user', component: UserAccountComponent},
        {path: 'about', component: AboutComponent, data: {breadcrumb: 'про нас'}},
        {path: 'news', loadChildren: 'src/app/Pages/news/news-page.module#NewsPageModule'},
        {
            path: 'specialists', component: SpecialistsPageComponent,
            resolve: {
                doctors: SpecialistsResolverService,
                pageData: SpecialistsPageResolverService
            },
        },
        {
            path: 'specialists/doctor/:id', component: RegisterReceptionComponent,
            resolve: {
                doctorInfo: RegisterReciptionsResolverService
            }
        },
        {
            path: 'services/doctors/doctor/:id', component: RegisterReceptionComponent,
            resolve: {
                doctorInfo: RegisterReciptionsResolverService
            }
        },
        {
            path: 'services/doctors', component: DoctorsPageComponent,
            resolve: {
                doctors: DoctorsResolverService,
                pageData: DoctorsPageResolverService
            },
        },
        {path: 'services', component: ServicesComponent},
        {path: '**', redirectTo: '/'}
    ]
;
