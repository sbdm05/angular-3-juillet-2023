import { Pipe, PipeTransform } from '@angular/core';

// DECORATOR
@Pipe({
  name: 'total',
})

// {{ arg | total}}
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    // console.log('déclenché depuis le pipe total')
    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}
