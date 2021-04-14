import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IadminProduct } from 'src/app/Modules/admin/modal/interfaces/IadminProduct.interface';
import Iproduct from 'src/app/Modules/shop/modal/interfaces/Iproduct.interface';
import { IcartItem } from 'src/app/Modules/user/modal/interfaces/Icart.interface';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrls: ['./product-horizontal-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHorizontalCardComponent implements OnInit {
  @Input() product: IcartItem & IadminProduct & Iproduct;
  @Input('quantity') productQuantity: number;
  @Input() isCartItem: boolean = false;
  @Input() isOrderItem: boolean = false;
  @Output('addItemToCart') dispatchAddItemToCart = new EventEmitter();
  @Output('removeItemFromCart')
  dispatchRemoveItemFromCart = new EventEmitter();
  cartLoader: boolean = false;
  plusIcon = faPlus;
  minusIcon = faMinus;
  constructor() {}

  ngOnInit(): void {}

  addItemToCart() {
    this.cartLoader = true;
    this.dispatchAddItemToCart.emit();
  }
  removeItemFromCart() {
    this.cartLoader = true;
    this.dispatchRemoveItemFromCart.emit();
  }
}
