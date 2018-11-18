import {Injectable} from '@angular/core';

declare var toastr: any;

@Injectable()
export class ToastrService {
    constructor() {}

    Success(message?: string) {
        toastr.success(message);
    };

    Error(message?: string) {
        toastr.error(message);
    }
}
