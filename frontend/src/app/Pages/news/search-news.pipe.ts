import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchNews'
})
export class SearchNewsPipe implements PipeTransform {
    transform(news: Array<any>, searchStr?: string): any {

        if (!searchStr) {
            return news;
        }

        return news.filter( post => {
            searchStr = searchStr.toUpperCase();
            const theme = post.theme.toUpperCase();
            return theme.includes(searchStr);
        });
    }
}
