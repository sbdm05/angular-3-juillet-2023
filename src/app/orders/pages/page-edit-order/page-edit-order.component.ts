import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  // étapes
  /**
   *
  1 - récupérer le paramètre de l'url id
  2 - faire appel à la bdd avec l'id (vers le service)
  3 - récupère l'objet concerné
  4 - stocker dans une propriété
  5 - passer l'obj à app-form-order


  récupérer l'objet modifié
  faire un appel pour update (vers le service)
   */

  public item!: Order; // undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(typeof id); // string

    if (id) {
      this.ordersService.getItemById(id).subscribe((data) => {
        // console.log(data);
        this.item = data;
      });
    }
  }

  public onEdit(obj: Order) {
    //console.log(obj, 'obj modifié');
    // appel au service
    this.ordersService.update(obj).subscribe((data) => {
      console.log(data, 'objet modifié');
      // redirection - attention à faire à l'intérieur du subscribe
      this.router.navigate(['']);
    });
  }

  public onDelete(obj:Order){

    this.ordersService.delete(obj.id.toString()).subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
