import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-appointment-window',
    templateUrl: './appointment-window.component.html',
    styleUrls: ['./appointment-window.component.css']
})
export class AppointmentWindowComponent {
    closeResult: string;

    constructor(private modalService: NgbModal) {
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

