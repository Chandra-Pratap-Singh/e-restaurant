import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css'],
})
export class ForgotPasswordFormComponent implements OnInit {
  token: string;
  password: string;
  confirmPassword: string;
  loader: boolean;
  error: string;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showPasswordIcon = faEye;
  HidePasswordIcon = faEyeSlash;
  constructor(
    private route: ActivatedRoute,
    private forgotPasswordService: ForgotPasswordService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
  }
  resetPassword() {
    if (this.password === this.confirmPassword) {
      this.loader = true;
      this.forgotPasswordService
        .changePassword(this.token, this.password)
        .subscribe(
          () => {
            this.loader = false;
            window.location.replace('/');
          },
          (err) => {
            this.error = err.error?.message || 'Error occured';
            this.loader = false;
          }
        );
    }
  }
}
