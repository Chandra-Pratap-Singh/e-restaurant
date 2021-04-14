import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent implements OnInit, OnChanges {
  @Input() type: string = 'secondary';
  bgColorClass: string = 'bg-secondary';
  textColorClass: string = 'text-white';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.type === 'primary') {
      this.bgColorClass = 'bg-primary';
      this.textColorClass = 'text-primary';
    }
  }
}
