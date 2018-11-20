import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpService } from '../../http.service';
import { Observable } from 'rxjs';

@Injectable()
export class NewsPageResolverService implements Resolve<Array<any>> {
  constructor(private _httpService: HttpService) { }

  resolve(): Observable<Array<any>> {
    return this._httpService.getNewsPageData();
  }
}
