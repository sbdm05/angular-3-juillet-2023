import { Directive, HostBinding, Input } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';

// DECORATOR
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() state!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {
    //console.log('depuis la directive');

  }

  ngOnInit() {
    console.log(this.state); // confirmed/ option/cancelled
    this.tdClassName = `state-${this.state.toLowerCase()}`
  }
}
