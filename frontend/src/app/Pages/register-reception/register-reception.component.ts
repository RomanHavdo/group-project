import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {ToastrService} from "../../toastr.service";

@Component({
  selector: 'app-register-reception',
  templateUrl: './register-reception.component.html',
  styleUrls: ['./register-reception.component.css']
})
export class RegisterReceptionComponent implements OnInit {

  queryId: number;
  doctorInfo: any;
  userInf: any = {
    name: '',
    email: '',
    phone: '',
  };
  isLogin: boolean;
  staticAlertClosed = false;

  constructor(private route: ActivatedRoute, private router: Router, private _auth: AuthService, private toastrService: ToastrService) {
    this.doctorInfo = this.route.snapshot.data['doctorInfo'][0];
  }

  ngOnInit() {
    if (this._auth.authUser == null) {
      this.isLogin = false;
    } else if (this._auth.authUser) {
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
