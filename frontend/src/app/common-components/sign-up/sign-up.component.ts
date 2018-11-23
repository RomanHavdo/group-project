import {Component, Input} from '@angular/core';
import {AuthService} from '../../auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {MenuItem} from '../../interfaces/menuItem';
import {ToastrService} from "../../toastr.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @Input() menuItems: MenuItem;
  sexs: string[] = ['Чоловіча', 'Жіноча'];
  closeResult: string;
  existUser: any;

  constructor(private modalService: NgbModal, private authService: AuthService, private toastrService: ToastrService) {
  }

  SuccessLogin() {
    this.toastrService.Success('Дякуємо за реєстрацію');
  }

  ErrorLogin() {
    this.toastrService.Error('Такий користувач вже існує');
  }

  checkIfExist() {
    this.existUser = this.authService.existUser;
    if (this.existUser === false) {
      this.ErrorLogin();
    } else {
      this.SuccessLogin();
    }
  }

  registerUser(name, dateOfBirth, sex, homeAddress, email, phone, password) {
    const user: User = new User(
      name.viewModel,
      dateOfBirth.viewModel,
      sex.value,
      homeAddress.viewModel,
      email.viewModel,
      phone.viewModel,
      password.viewModel);
    this.authService.createUser(user).subscribe(() => {
      this.checkIfExist();
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }
}
