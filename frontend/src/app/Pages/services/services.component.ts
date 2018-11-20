import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpService } from '../../../app/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('ulState', [
      state('closed', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0,
      }
      )),
      state('open', style({
        height: '*',
        overflow: 'hidden',
        opacity: 1,
      })),

      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('500ms ease-in'))
    ]),
  ]
})
export class ServicesComponent implements OnInit {

  servicesList: any = [];
  newItem;
  oldItem = 'isOpen';

  isOpen = true;
  status1 = true;
  isOpenKomplex = false;
  status2 = false;
  isOpenDiagnostic = false;
  status3 = false;
  isOpenAnaliz = false;
  status4 = false;
  isOpenVakcina = false;
  status5 = false;

  switcher(newItem) {
    this.newItem = newItem;
    if (newItem === this.oldItem) {
      switch (this.oldItem) {
        case 'isOpen':
          this.isOpen = !this.isOpen;
          this.status1 = !this.status1;
          break;
        case 'isOpenKomplex':
          this.isOpenKomplex = !this.isOpenKomplex;
          this.status2 = !this.status2;
          break;
        case 'isOpenDiagnostic':
          this.isOpenDiagnostic = !this.isOpenDiagnostic;
          this.status3 = !this.status3;
          break;
        case 'isOpenAnaliz':
          this.isOpenAnaliz = !this.isOpenAnaliz;
          this.status4 = !this.status4;
          break;
        case 'isOpenVakcina':
          this.isOpenVakcina = !this.isOpenVakcina;
          this.status5 = !this.status5;
          break;
        default:
          alert('somethink goes wrong!');
      }
      return;

    }
    switch (this.oldItem) {
      case 'isOpen':
        this.isOpen = false;
        this.status1 = false;
        break;
      case 'isOpenKomplex':
        this.isOpenKomplex = false;
        this.status2 = false;
        break;
      case 'isOpenDiagnostic':
        this.isOpenDiagnostic = false;
        this.status3 = false;
        break;
      case 'isOpenAnaliz':
        this.isOpenAnaliz = false;
        this.status4 = false;
        break;
      case 'isOpenVakcina':
        this.isOpenVakcina = false;
        this.status5 = false;
        break;
      default:
        alert('somethink goes wrong!');
    }
    setTimeout(() => {
      switch (this.newItem) {
        case 'isOpen':
          this.isOpen = true;
          this.status1 = true;
          break;
        case 'isOpenKomplex':
          this.isOpenKomplex = true;
          this.status2 = true;
          break;
        case 'isOpenDiagnostic':
          this.isOpenDiagnostic = true;
          this.status3 = true;
          break;
        case 'isOpenAnaliz':
          this.isOpenAnaliz = true;
          this.status4 = true;
          break;
        case 'isOpenVakcina':
          this.isOpenVakcina = true;
          this.status5 = true;
          break;
        default:
          alert('somethink goes wrong!');
      }

      this.oldItem = this.newItem;
    }, 500);

  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getServicesData().subscribe((res) => {
      this.servicesList = res[0];
      this.servicesList = this.servicesList.servicesItems[0];
   });
  }

}
