import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Modal implements OnInit {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.emit();
  }

  stopPropogation(event: Event) {
    event.stopPropagation();
  }
}
