import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  public onAdd(obj: Order) {
    console.log(obj);
    this.ordersService.add(obj).subscribe((data) => {
      console.log(data);
      // redirection
      this.router.navigate(['']);
    });
  }
}
