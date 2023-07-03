import { Component } from '@angular/core';

// META DATA
// DECORATOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';

  // créer propriété pour le ngClass
  public open: boolean = false;

  // CREER DES PROPRIETES ET DES METHODES

  public onClick() {
    // ici on inverse la valeur avec le point d'exclamation
    this.open = !this.open;
    console.log(this.open);
  }
}
