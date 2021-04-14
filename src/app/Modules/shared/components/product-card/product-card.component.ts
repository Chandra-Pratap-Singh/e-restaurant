import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import Iproduct from 'src/app/Modules/shop/modal/interfaces/Iproduct.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product: Iproduct;
  @Input() presentInCart: Observable<number> = of(0);
  @Output('addItemToCart') dispatchAddItemToCart = new EventEmitter();
  @Output('removeItemFromCart')
  dispatchRemoveItemFromCart = new EventEmitter();
  cartLoader: boolean = false;
  presentInCardSubscription: Subscription;
  quantityPresentInCart: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.presentInCardSubscription = this.presentInCart.subscribe((data) => {
      this.quantityPresentInCart = data;
      this.cartLoader = false;
    });
  }

  addItemToCart() {
    this.cartLoader = true;
    this.dispatchAddItemToCart.emit();
  }

  removeItemFromCart() {
    this.cartLoader = true;
    this.dispatchRemoveItemFromCart.emit();
  }

  ngOnDestroy() {
    this.presentInCardSubscription.unsubscribe();
  }
}
