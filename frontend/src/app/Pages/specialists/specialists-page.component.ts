import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-specialists-page',
    templateUrl: './specialists-page.component.html',
    styleUrls: ['./specialists-page.component.scss']
})
export class SpecialistsPageComponent implements OnInit {
    public doctors = [];
    public searchStr = '';
    public selectedValue = 'Усі лікарі';
    public pageData = [];

    constructor(private route: ActivatedRoute) {
        this.doctors = this.route.snapshot.data['doctors'][0].doctors;
        this.pageData = this.route.snapshot.data['pageData'][0].items[0];
     }

    ngOnInit() {

    }
}
