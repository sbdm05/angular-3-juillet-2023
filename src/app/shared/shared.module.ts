import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './icons/icon-close/icon-close.component';
import { IconNavComponent } from './icons/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// DECORATOR
@NgModule({
  declarations: [
    // LISTE DES COMPOSANTS ASSOCIES A CE MODULE

    IconCloseComponent,
    IconNavComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconCloseComponent, IconNavComponent],
})

// REGLE DE NOMMMAGE ng generate module SharedModule
export class SharedModule {}
