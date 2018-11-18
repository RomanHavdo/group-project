import {Component, Input} from '@angular/core';
import {AuthService} from "../../auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from '../../interfaces/menuItem';

import {ToastrService} from "../../toastr.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    authUser: Observable<any>;
    @Input() menuItems: MenuItem;
    authError: string;
    closeResult: string;

    constructor(private modalService: NgbModal, private authService: AuthService, private toastrService: ToastrService) {
    }

    open(content) {
        this.authError = '';
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    SuccessLogin() {
        this.toastrService.Success('Ви успішно залоновані');
    }

    ErrorLogin() {
        this.toastrService.Error('Невірно введена пошта чи пароль');
    }

    checkIfObjectReturned() {
        this.authUser = this.authService.authUser;
        if (this.authUser !== null) {
            this.SuccessLogin();
        } else if (this.authUser == null) {
            this.ErrorLogin();
        }
    }

    login(email, password) {
        const checkUser = {
            email: email.viewModel,
            password: password.viewModel
        };
        this.authService.userAuthentication(checkUser).subscribe(() => {
            this.checkIfObjectReturned()
        });

    }
}