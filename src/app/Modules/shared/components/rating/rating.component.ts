import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {

  @Input('rating') currentRate:number = 0;
  @Input() readOnly:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
