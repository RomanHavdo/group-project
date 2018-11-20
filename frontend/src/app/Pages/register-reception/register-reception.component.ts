import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {User} from "../../interfaces/user";
import {ToastrService} from "../../toastr.service";

@Component({
  selector: 'app-register-reception',
  templateUrl: './register-reception.component.html',
  styleUrls: ['./register-reception.component.css']
})
export class RegisterReceptionComponent implements OnInit {

  constructor(private _http: HttpService, private route: ActivatedRoute, private router: Router, private _auth: AuthService, private toastrService: ToastrService) {
  }

  queryId: number;
  doctorInfo: any;
  userInf: any = {
    name: '',
    email: '',
    phone: '',
  };
  isLogin: boolean;
  staticAlertClosed = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.queryId = params.id;
    });
    this._http.getDoctorById(this.queryId).subscribe((res) => {

      this.doctorInfo = res[0];
    });
    if (this._auth.authUser == null) {
      this.isLogin = false;
    }
    else if (this._auth.authUser) {
      this.isLogin = true;
      this.userInf = this._auth.authUser;
    }
  }

  showMsg() {
    this.toastrService.Success('Ви успішно записались до лікаря!');
    setTimeout(() => {
      this.router.navigate(['/']);
      setTimeout(() => {
        location.reload();
      })
    }, 2000)
  }

}
