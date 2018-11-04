import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {User} from "./user";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {current} from "codelyzer/util/syntaxKind";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    @Input() menuItems;
    closeResult: string;
    newUser: User[] = [{
        name: "Petia",
        dateOfBirth: "12-09-1953",
        sex: "Чоловіча",
        homeAddress: "NY, Manhattan, 22",
        emailAddress: "admin",
        phoneNumber: "+380001234567",
        password: "admin"
    }];
    authError: string;
    sexs: string[] = ["Чоловіча", "Жіноча"];

    constructor(private modalService: NgbModal) {
    }

    checkUser(logInEmail, logInPassword) {
        let foundUser =
            this.newUser.filter(item => item.emailAddress === logInEmail.viewModel && item.password === logInPassword.viewModel)[0];
        if (foundUser) {
            this.authError = '';
            console.log('in');
            this.modalService.dismissAll();
        } else {
            this.authError = 'Такого користувача не існує!';
        }
    }


    onSubmit(name, dateofbirth, sex, homeAddress, emailAddress, phoneNumber, password) {
        this.newUser.push(new User(name.viewModel, dateofbirth.viewModel,sex.value, homeAddress.viewModel, emailAddress.viewModel, phoneNumber.viewModel, password.viewModel));
        console.log(this.newUser);
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
