import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './icons/icon-close/icon-close.component';
import { IconNavComponent } from './icons/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state.directive';


// DECORATOR
@NgModule({
  declarations: [
    // LISTE DES COMPOSANTS ASSOCIES A CE MODULE

    IconCloseComponent,
    IconNavComponent,
    TotalPipe,
    BtnComponent,
    StateDirective,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    TotalPipe,
    BtnComponent,
    StateDirective,
  ],
})

// REGLE DE NOMMMAGE ng generate module SharedModule
export class SharedModule {}
