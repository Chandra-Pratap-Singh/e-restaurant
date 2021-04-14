import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaplay-message',
  templateUrl: './diaplay-message.component.html',
  styleUrls: ['./diaplay-message.component.css'],
})
export class DiaplayMessageComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}
}
