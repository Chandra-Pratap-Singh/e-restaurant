import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  loader: boolean = false;
  errorMessage: string;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showPasswordIcon = faEye;
  HidePasswordIcon = faEyeSlash;

  signUpForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      this.confirmPasswordValidator,
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  confirmPasswordValidator(formControl: FormControl): { invalid: boolean } {
    const formGroup = formControl.parent;
    if (formGroup?.value.confirmPassword !== formGroup?.value.password)
      return { invalid: true };
    return null;
  }

  constructor(private authService: AuthService, private route: Router) {}
  ngOnInit(): void {}

  singUp() {
    this.loader = true;
    if (
      this.signUpForm.valid &&
      this.signUpForm.controls.password.value ===
        this.signUpForm.controls.confirmPassword.value
    ) {
      const { confirmPassword, ...user } = this.signUpForm.value;
      const singUpSubscription = this.authService.signUp(user).subscribe(
        (data) => {
          if (data?.status === 'success') this.route.navigate(['/shop']);
          else if (data?.status === 'failed')
            this.errorMessage = data?.error?.message;
        },
        null,
        () => {
          this.loader = false;
          singUpSubscription.unsubscribe();
        }
      );
    }
  }
}
