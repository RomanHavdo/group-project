import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from '../../http.service';
import { Observable } from 'rxjs';

@Injectable()
export class DoctorsResolverService implements Resolve<Array<any>> {
  constructor(private _httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<any>> {
    return this._httpService.getFiltratedListOfDoctors(route.queryParams.serviceType);
  }
}
