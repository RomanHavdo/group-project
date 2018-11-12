import {Component, Input} from '@angular/core';
import {AuthService} from '../../auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {MenuItem} from '../../interfaces/menuItem';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    @Input() menuItems: MenuItem;
    sexs: string[] = ['Чоловіча', 'Жіноча'];
    closeResult: string;

    constructor(private modalService: NgbModal, private authService: AuthService) {
    }

    registerUser(name, dateofbirth, sex, homeAddress, emailAddress, phoneNumber, password) {
        const user: User = new User(
            name.viewModel,
            dateofbirth.viewModel,
            sex.value,
            homeAddress.viewModel,
            emailAddress.viewModel,
            phoneNumber.viewModel,
            password.viewModel);
        this.authService.register(user);
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}
