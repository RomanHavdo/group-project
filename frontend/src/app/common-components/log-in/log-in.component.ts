import {Component, Input} from '@angular/core';
import {AuthService} from "../../auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from '../../interfaces/menuItem';
import {HttpService} from "../../http.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    @Input() menuItems:MenuItem;
    authError: string;
    closeResult: string;

  constructor(private modalService: NgbModal, private authService: AuthService, private httpService: HttpService) {
    }
    open(content) {
        this.authError = '';
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    login(email,password) {
        const checkUser = {
            email: email.viewModel,
            password: password.viewModel
        };
        this.httpService.userAuthentication(checkUser);
    }
    // login(logInEmail, logInPassword) {
    //     const user = this.authService.checkUser(logInEmail, logInPassword);
    //     if (user) {
    //         this.authError = '';
    //         console.log('in');
    //         this.modalService.dismissAll();
    //     } else {
    //         this.authError = 'Такого користувача не існує!';
    //     }
    // }
}
