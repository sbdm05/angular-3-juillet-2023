import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // string interpolation {{ propriete }}
  public title = 'Liste des commandes';

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
  constructor(private ordersService: OrdersService, private router: Router) {
    // console.log(this.ordersService.sumUp(1, 2));

    this.ordersService.getDatas().subscribe((data) => {
      this.tab = data;
      console.log(this.tab);
    });
  }

  // méthode pour calculer les montants HT et TTC avec tva en optionnel
  // remplacée par le pipe Total
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('déclenché');// 6 console.log
  //   // CHANGE DETECTION
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public goToEdit(id: number){
    // importer Router pour faire redirection
    // orders/edit/2
    this.router.navigate(['orders', 'edit', id])
  }
}
