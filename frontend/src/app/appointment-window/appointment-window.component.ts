import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ToastrService} from "../toastr.service";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-appointment-window',
    templateUrl: './appointment-window.component.html',
    styleUrls: ['./appointment-window.component.css']
})
export class AppointmentWindowComponent {
    closeResult: string;
    public visible = true;
    userInfo: any = {
        name: '',
        email: '',
        phone: '',
    };

    sendMessage(email, phone) {
        if (!email && !phone) {
            this.toastrService.Error('Повідомлення не надіслано. Додайте телефон або пошту');
        } else {
            this.toastrService.Success('Повідомлення надіслано');
        }
    }

    checkUserInformation() {
        if (this.authService.authUser !== null) {
            this.userInfo = this.authService.authUser;
        }
    }

    constructor(private modalService: NgbModal, private router: Router, private toastrService: ToastrService, private authService: AuthService) {
        this.router.events.subscribe((event) => {
            if (this.router.url !== '/') {
                this.visible = false;
            } else {
                this.visible = true;
            }
        });
    }

    open(content) {
        this.checkUserInformation();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

}

