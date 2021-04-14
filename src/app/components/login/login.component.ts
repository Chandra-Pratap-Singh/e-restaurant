import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/Modules/user/store/actions/user.action';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl('null', this.passwordValidator),
  });
  loader: boolean = false;
  showPassword: boolean = false;
  showPasswordIcon = faEye;
  HidePasswordIcon = faEyeSlash;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {}

  passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control?.value?.length > 6) return null;
    return { minLength: true };
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const loginSubscription = this.authService.login(email, password).subscribe(
      (data) => {
        this.loader = true;
        if (data.status === 'success') {
          this.store.dispatch(loadUser({ user: data?.user }));
          if (data?.isAdmin) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['shop']);
          }
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loader = false;
        loginSubscription.unsubscribe();
      }
    );
  }
}
