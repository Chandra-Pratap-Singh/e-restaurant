import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updatePassword } from '../../store/actions/user.action';
import { updatePasswordLoaderSelector } from '../../store/selectors/user.selector';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  showNewPassword: boolean = false;
  showOldPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showPasswordIcon = faEye;
  HidePasswordIcon = faEyeSlash;
  $updatePasswordLoader: Observable<boolean>;
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(null, Validators.required),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmNewPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$updatePasswordLoader = this.store.select(
      updatePasswordLoaderSelector
    );
  }
  save() {
    const newPassword = this.changePasswordForm.get('newPassword').value;
    const confirmNewPassword = this.changePasswordForm.get('confirmNewPassword')
      .value;
    const oldPassword = this.changePasswordForm.get('oldPassword').value;
    if (newPassword === confirmNewPassword)
      this.store.dispatch(updatePassword({ newPassword, oldPassword }));
  }
}
