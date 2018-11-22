import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
    private _path =  {
        breadcrumbs: [],
        queryParams: ''
    };

    updatePathData(url) {

        this._path.breadcrumbs = [];
        const arr = url.split('/');

        arr.forEach(el => {
            if (el.indexOf('services') !== -1) {
                this._path.breadcrumbs.push({title: 'послуги', url: `/${el}`});
            } else if (el.indexOf('specialists') !== -1) {
                this._path.breadcrumbs.push({title: 'спеціалісти', url: `/${el}`});
            } else if (el.indexOf('doctors') !== -1) {
                this._path.breadcrumbs.push({title: 'лікарі', url: `${this._path.breadcrumbs[0].url}/${el}`});
            } else if (el.indexOf('doctor') !== -1) {
                this._path.breadcrumbs.push({title: 'запис на прийом', url: `/${el}`});
            } else if (el.indexOf('serviceType') !== -1) {
                this._path.queryParams = el.substr(el.indexOf('=') + 1);
            }
        });

        return this._path;
    }

}
