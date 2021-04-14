import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-confirmation-pop-up',
  templateUrl: './confirmation-pop-up.component.html',
  styleUrls: ['./confirmation-pop-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationPopUpComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() yes = new EventEmitter();
  @Output() no = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  forwardClose() {
    this.close.emit();
  }

  receivedYes() {
    this.yes.emit();
  }

  receivedNo() {
    this.no.emit();
  }
}
