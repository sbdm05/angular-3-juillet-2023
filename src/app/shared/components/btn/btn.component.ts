import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() label!: string;
  @Input() styleBtn!: string;
  @Input() routeInfo!: string; // undefined

  // {{ label }}
  constructor() {
    console.log(this.label, 'constructor'); // ?? undefined
  }

  // CYCLE DU VIE DU COMPOSANT
  // déclenché plusieurs fois
  ngOnChanges() {
    console.log(this.label, 'ngonchanges'); // ?? undefined
  }

  // déclenché une seule fois
  ngOnInit() {
    console.log(this.label, 'ngoninit'); // ?? undefined
  }

  ngOnDestroy() {
    console.log('détruit');
  }
}
