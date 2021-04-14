import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { getTotalPrice } from '../../utils/getTotalPrice';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {
  @Input() order;

  getTotalPrice = getTotalPrice;

  constructor() {}

  ngOnInit(): void {}
}
