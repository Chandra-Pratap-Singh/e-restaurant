import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-forgot-password-email-form',
  templateUrl: './forgot-password-email-form.component.html',
  styleUrls: ['./forgot-password-email-form.component.css'],
})
export class ForgotPasswordEmailFormComponent implements OnInit {
  loader: boolean;
  email: string;
  mailStatus: boolean = false;
  error: string;
  constructor(private forgotPasswordService: ForgotPasswordService) {}

  ngOnInit(): void {}

  save() {
    if (this.email) {
      this.loader = true;
      this.forgotPasswordService.sendResetPasswordMail(this.email).subscribe(
        () => {
          this.mailStatus = true;
          this.loader = false;
        },
        (err) => {
          this.error = err.error?.message || 'Error occured';
          this.loader = false;
        }
      );
    }
  }
}
