import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IuserProfile } from '../../modal/interfaces/Iuser.interface';
import { updateUserProfile } from '../../store/actions/user.action';
import {
  userProfileUpdateLoaderSelector,
  userSelector,
} from '../../store/selectors/user.selector';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: IuserProfile = {
    name: '',
    phone: '',
    email: '',
  };
  $updateUserProfileLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(userSelector).subscribe((data) => {
      this.user = {
        name: data?.name,
        phone: data?.phone,
        email: data?.email,
      };
    });
    this.$updateUserProfileLoader = this.store.select(
      userProfileUpdateLoaderSelector
    );
  }

  save() {
    console.log(this.user);
    this.store.dispatch(updateUserProfile({ userProfile: this.user }));
  }
}
