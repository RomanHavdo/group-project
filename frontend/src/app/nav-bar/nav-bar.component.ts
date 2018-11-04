import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from "../interfaces/user";
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    @Input() menuItems;
    closeResult: string;

    authError: string;
    sexs: string[] = ["Чоловіча", "Жіноча"];

    constructor(private modalService: NgbModal, private authService: AuthService) {
    }


    login(logInEmail, logInPassword) {
        let user = this.authService.checkUser(logInEmail, logInPassword);
        if (user) {
            this.authError = '';
            console.log('in');
            this.modalService.dismissAll();
        } else {
            this.authError = 'Такого користувача не існує!';
        }
    }


    registerUser(name, dateofbirth, sex, homeAddress, emailAddress, phoneNumber, password) {
        let user: User = new User(name.viewModel, dateofbirth.viewModel, sex.value, homeAddress.viewModel, emailAddress.viewModel, phoneNumber.viewModel, password.viewModel);
        this.authService.register(user);
    }


    open(content) {
        this.authError = '';
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

}
