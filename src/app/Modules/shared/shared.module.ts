import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductHorizontalCardComponent } from './components/product-horizontal-card/product-horizontal-card.component';
import { AdminOrderCardComponent } from './components/admin-order-card/admin-order-card.component';
import { AdminHorizontalOrderCardComponent } from './components/admin-horizontal-order-card/admin-horizontal-order-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './components/order/order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Modal } from './components/modal/modal.component';
import { DynamicComponentPlaceholderDirective } from './directives/dynamic-component-placeholder.directive';
import { ConfirmationPopUpComponent } from './components/confirmation-pop-up/confirmation-pop-up.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BadgeComponent } from './components/badge/badge.component';
import { DiaplayMessageComponent } from './components/diaplay-message/diaplay-message.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    ProductCardComponent,
    ProductHorizontalCardComponent,
    AdminOrderCardComponent,
    AdminHorizontalOrderCardComponent,
    RatingComponent,
    OrderComponent,
    Modal,
    DynamicComponentPlaceholderDirective,
    ConfirmationPopUpComponent,
    ToastComponent,
    LoaderComponent,
    BadgeComponent,
    DiaplayMessageComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
  ],
  exports: [
    ProductCardComponent,
    ProductHorizontalCardComponent,
    AdminOrderCardComponent,
    AdminHorizontalOrderCardComponent,
    RatingComponent,
    OrderComponent,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    Modal,
    DynamicComponentPlaceholderDirective,
    ConfirmationPopUpComponent,
    ReactiveFormsModule,
    ToastComponent,
    LoaderComponent,
    BadgeComponent,
    MatSidenavModule,
  ],
})
export class SharedModule {}
