import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NewsPageComponent } from './news-page.component';
import { NewsCardComponent } from './news-card-component/news-card.component';
import { NewsResolverService } from './news-resolver.service';
import { NewsPageResolverService } from './news-page-resolver.service';
import { SearchNewsPipe } from './search-news.pipe';

    const routes: Routes = [
        {path: '', component: NewsPageComponent,
            resolve: {
                news: NewsResolverService,
                pageData: NewsPageResolverService
            }
        }
    ];

@NgModule({
    declarations: [
        NewsPageComponent,
        NewsCardComponent,
        SearchNewsPipe
    ],
    providers: [
        NewsResolverService,
        NewsPageResolverService
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [NewsPageComponent]
})
export class NewsPageModule {

}
