import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { OnHoverDirective } from './card/card-hover.directive';

import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './card/card.component';
import { LeftCardsColumnComponent } from './left-cards-column/left-cards-column.component';
import { RightCardsColumnComponent } from './right-cards-column/right-cards-column.component';

import { appRoutes } from '../../../appRoutes';


@NgModule({
    declarations: [
        CardComponent,
        CardsContainerComponent,
        LeftCardsColumnComponent,
        RightCardsColumnComponent,
        OnHoverDirective
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
        )],
    exports: [CardsContainerComponent]
})
export class CardsComponentModule {

}
