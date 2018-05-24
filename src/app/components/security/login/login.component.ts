import { UserService } from './../../../services/user.service';
import { User } from './../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';
import { CurrentUser } from '../../../model/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '');
  shared: SharedService;
  message: String;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {}

  login() {
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
        this.shared.token = userAuthentication.token;
        this.shared.user = userAuthentication.user;
        this.shared.showTemplate.emit(true);
        this.router.navigate(['/']);
      }, err => {
        this.shared.token = null;
        this.shared.user = null;
        this.shared.showTemplate.emit(false);
        this.message='Erro';
      }
    );
  }

  cancelLogin() {
    this.message = '';
    this.user = new User('', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }

  getFromGroupClass(isInvalid: boolean, isDirty): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty 
    };
  }

}
