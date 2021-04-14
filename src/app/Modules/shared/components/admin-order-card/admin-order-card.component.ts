import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IadminOrder } from 'src/app/Modules/admin/modal/interfaces/IadminOrder.interface';
import { faArrowRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { getTotalPrice } from '../../utils/getTotalPrice';
import { ORDER_STATUSES } from 'src/app/constants/constant';

@Component({
  selector: 'app-admin-order-card',
  templateUrl: './admin-order-card.component.html',
  styleUrls: ['./admin-order-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminOrderCardComponent implements OnInit {
  nextIcon = faArrowRight;
  menuIcon = faEllipsisV;
  getTotalPrice = getTotalPrice;
  orderStatuses = ORDER_STATUSES;
  @Input('order') order: IadminOrder;
  @Output() move = new EventEmitter();
  @Input() updateOrderStatus: (string) => void;
  isCollapsed: boolean = true;
  constructor() {}
  toggleCollapedstate() {
    this.isCollapsed = !this.isCollapsed;
  }
  moveToNextStep() {
    this.move.emit();
  }

  ngOnInit() {}
}
