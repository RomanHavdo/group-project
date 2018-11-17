import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../appRoutes';
import { SpecialistsPageComponent } from './specialists-page.component';
import { SpecialistCardComponent } from './specialist-card-component/specialist-card.component';
import { HoverDirective } from '../specialists/hover.directive';
import { SearchPipe } from './search-doctor.pipe';
import { FormsModule } from '@angular/forms';

import { SpecialistsResolverService } from './specialists-resolver.service';
import { SpecialistsPageResolverService } from './specialists-page-resolver.service';

@NgModule({
    declarations: [
        SpecialistsPageComponent,
        SpecialistCardComponent,
        SearchPipe,
        HoverDirective
    ],
    providers: [
        SpecialistsResolverService,
        SpecialistsPageResolverService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes, {scrollPositionRestoration: 'enabled'}
        )],
    exports: [SpecialistsPageComponent]
})
export class SpecialistsPageModule {

}
