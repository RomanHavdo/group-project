import {Component, Input} from '@angular/core';
import {Contact} from '../../interfaces/contact';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    @Input() contacts: Contact;

    constructor() {
    }
}
