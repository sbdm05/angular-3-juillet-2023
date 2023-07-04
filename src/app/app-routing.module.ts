import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // DEFINIR DES ROUTES
  // OBJET AVEC UN PATH ET UN COMPOSANT ASSOCIE
  // REDIRECTION
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  // lazy loading pour orders

  // rendre le chargement du composant optionnel
  // LAZY LOADING
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then(
        (m) => m.OrdersModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
