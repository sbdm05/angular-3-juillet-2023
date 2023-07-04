import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  public item: Order = new Order();
}
