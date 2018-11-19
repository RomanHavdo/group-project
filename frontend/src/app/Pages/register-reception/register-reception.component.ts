import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService} from '../../auth.service';


@Component({
  selector: 'app-register-reception',
  templateUrl: './register-reception.component.html',
  styleUrls: ['./register-reception.component.css']
})
export class RegisterReceptionComponent implements OnInit {

  constructor(private _http:HttpService, private route: ActivatedRoute, private router: Router, private _auth:AuthService) { }
   queryId:number;
   doctorInfo:any;
   staticAlertClosed = false;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.queryId = params.id;
    });
    this._http.getDoctorById(this.queryId).subscribe((res) => {

      this.doctorInfo = res[0];
    });
  }

  showMsg(){
    this.staticAlertClosed = true;
   setTimeout(() => {
    this.router.navigate(['/']);
   }, 2000)
  }

}
