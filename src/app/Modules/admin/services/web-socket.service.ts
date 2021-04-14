import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import openSocket from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { toastTypes } from '../../shared/constants';
import { ToastService } from '../../shared/services/toast.service';
import { addNewRequestedOrder } from '../store/actions/order.action';

@Injectable()
export class WebSocketService {
  backendBaseUrl: string = environment.backendBaseUrl;
  io;
  newOrderRequestListener;
  constructor(private store: Store, private toastService: ToastService) {
    this.io = openSocket(this.backendBaseUrl);
  }
  listenForNewOrderRequests() {
    if (!this.newOrderRequestListener) {
      this.newOrderRequestListener = this.io.on('newOrderRequest', (data) => {
        const order = data?.order;
        this.store.dispatch(addNewRequestedOrder({ order }));
        this.toastService.showToast(toastTypes.SUCCESS, 'New Order Requested');
      });
    }
  }
}
