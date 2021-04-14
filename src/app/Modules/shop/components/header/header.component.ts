import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchCartItems } from 'src/app/Modules/user/store/actions/cart.action';
import { totalCartValueSelector } from 'src/app/Modules/user/store/selectors/cartItem.selector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  $totalcartValue: Observable<number>;
  logoutModal: boolean = false;
  public isMenuCollapsed = true;
  mobileCartIon = faHamburger
  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.store.dispatch(fetchCartItems());
    this.$totalcartValue = this.store.select(totalCartValueSelector);
  }

  logout() {
    this.authService.logout();
  }

  openLogoutModal() {
    this.isMenuCollapsed = true;
    this.logoutModal = true;
  }
}
