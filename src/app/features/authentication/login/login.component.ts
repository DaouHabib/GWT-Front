import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(  private authService: AuthenticationService,
    ) {this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
  }); }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe(
        (data) => {
            console.log(data);
            this.authService.saveToken(data.token);

        },
        (error) => {
        }
    );
}
}
