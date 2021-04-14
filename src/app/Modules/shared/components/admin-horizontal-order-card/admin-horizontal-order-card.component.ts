import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IadminOrder } from 'src/app/Modules/admin/modal/interfaces/IadminOrder.interface';
import { getTotalPrice } from '../../utils/getTotalPrice';

@Component({
  selector: 'app-admin-horizontal-order-card',
  templateUrl: './admin-horizontal-order-card.component.html',
  styleUrls: ['./admin-horizontal-order-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHorizontalOrderCardComponent implements OnInit {
  @Input() order: IadminOrder;

  getTotalPrice = getTotalPrice;

  constructor() {}

  ngOnInit(): void {}
}
