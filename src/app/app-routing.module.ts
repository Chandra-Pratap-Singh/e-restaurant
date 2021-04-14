import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ForgotPasswordEmailFormComponent } from './components/forgot-password-email-form/forgot-password-email-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckAdminEntryGuard } from './guards/check-admin-entry.guard';
import { CheckCustomerEntryGuard } from './guards/check-customer-entry.guard';

const routes: Routes = [
  {
    path: 'forgot-password/:token',
    component: ForgotPasswordFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordEmailFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'entry',
    component: EntryComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
  {
    path: 'shop',
    canLoad: [CheckCustomerEntryGuard],
    canActivate: [CheckCustomerEntryGuard],
    loadChildren: () =>
      import('./Modules/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'admin',
    canLoad: [CheckAdminEntryGuard],
    canActivate: [CheckAdminEntryGuard],
    loadChildren: () =>
      import('./Modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'entry',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
