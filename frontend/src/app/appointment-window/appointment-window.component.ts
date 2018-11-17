import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';




@Component({
    selector: 'app-appointment-window',
    templateUrl: './appointment-window.component.html',
    styleUrls: ['./appointment-window.component.css']
})
export class AppointmentWindowComponent {
    closeResult: string;
    public visible = true;

    constructor(private modalService: NgbModal, private router: Router) {
        this.router.events.subscribe((event) => {
            if (this.router.url !== '/') {
                this.visible = false;
            } else {
                this.visible = true;
            }
      });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

