import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    images:Array<any> = [];

    constructor(private httpService: HttpService) {
    }


    ngOnInit() {
        this.httpService.getCarouselData().subscribe((data: any[]) => this.images = data);
    }

}
