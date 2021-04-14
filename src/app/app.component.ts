import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Iuser } from './Modules/user/modal/interfaces/Iuser.interface';
import { fetchUser } from './Modules/user/store/actions/user.action';
import { userSelector } from './Modules/user/store/selectors/user.selector';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'e-restaurant';
  constructor(
    private authSerive: AuthService,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit() {
    if (
      this.authSerive.isUserLoggedIn() &&
      this.authSerive.getUserRole() === 'user'
    )
      this.router.navigate(['/shop']);
    if (
      this.authSerive.isUserLoggedIn() &&
      this.authSerive.getUserRole() === 'admin'
    )
      this.router.navigate(['/admin']);
  }
}
