import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './carousel.component';

@NgModule({
    imports: [BrowserAnimationsModule],
    exports: [CarouselComponent],
    declarations: [CarouselComponent]
})

export class CarouselModule {
}
