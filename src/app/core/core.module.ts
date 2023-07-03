import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    /** 1/2 pour utilisation en dehors du CoreModule*/
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
})
export class CoreModule {}
// commande ng g c header --export
// ajoute le composant à l'export
