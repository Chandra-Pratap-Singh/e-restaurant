import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iuser } from '../../modal/interfaces/Iuser.interface';
import { fetchUser } from '../../store/actions/user.action';
import {
  fetchUserLoaderSelector,
  userSelector,
} from '../../store/selectors/user.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  $user: Observable<Iuser>;
  $fetchUserLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUser());
    this.$user = this.store.select(userSelector);
    this.$fetchUserLoader = this.store.select(fetchUserLoaderSelector);
  }
}
