import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { toastTypes, toastTypeToClassMapping } from '../../constants';
import { Itoast } from '../../modal/interfaces/Itoast.interface';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Itoast[] = [];
  toastSubjectSubscription: Subscription;
  toastTypes = toastTypes;
  toastTypestoClassMapping = toastTypeToClassMapping;
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastSubjectSubscription = this.toastService.toastSubject.subscribe(
      (data) => {
        this.toasts.push(data);
        setTimeout(
          () =>
            (this.toasts = this.toasts.filter((toast) => toast.id !== data.id)),
          10000
        );
      }
    );
  }

  ngOnDestroy() {
    this.toastSubjectSubscription.unsubscribe();
  }
}
