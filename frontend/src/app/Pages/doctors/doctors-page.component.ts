import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-doctors-page',
    templateUrl: './doctors-page.component.html',
    styleUrls: ['./doctors-page.component.scss']
})
export class DoctorsPageComponent implements OnInit {
    public doctors: Array<any>;
    public pageData: Array<any>;
    public textData: Array<any>;

    constructor(private route: ActivatedRoute) {
        this.doctors = this.route.snapshot.data['doctors'];
        this.pageData = this.route.snapshot.data['pageData'];
    }

    ngOnInit() {
        this.textData = this.pageData[1].textData[0];
    }

}
