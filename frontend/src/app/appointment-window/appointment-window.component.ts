import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ToastrService} from '../toastr.service';
import {AuthService} from '../auth.service';

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
    if (email || phone) {
      this.toastrService.Success('Повідомлення надіслано');
    }
  }

  checkUserInformation() {
    if (JSON.parse(localStorage.getItem('authUser'))) {
      this.userInfo = JSON.parse(localStorage.getItem('authUser'));
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

