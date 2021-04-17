import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  constructor(private router: Router, private authSerive: AuthService) {}

  ngOnInit(): void {
    console.log(this.router.url);
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
