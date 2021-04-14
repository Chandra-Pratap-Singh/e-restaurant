import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHeaderComponent implements OnInit {
  logoutModal: boolean = false;
  isMenuCollapsed: boolean = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
