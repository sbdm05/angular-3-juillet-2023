import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // string interpolation {{ propriete }}
  public title = 'Liste des composants';

  // pour stocker data
  public tab!: Order[];

  // tableau pour stocker les en-têtes
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'Nb Jours',
    'Tjm Ht',
    'Total HT',
    'Total TTC',
    'Etat',
  ];

  // injection de dépendance
  constructor(private ordersService: OrdersService) {
    // console.log(this.ordersService.sumUp(1, 2));

    this.ordersService.getDatas().subscribe((data) => {
      this.tab = data;
      console.log(this.tab);
    });
  }
}
