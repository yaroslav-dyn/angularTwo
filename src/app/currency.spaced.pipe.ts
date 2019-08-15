import { Pipe, PipeTransform } from '@angular/core';
const currencySymbol = '$';
@Pipe({
  name: 'currencySpaced'
})

export class CurrencySpacedPipe implements PipeTransform {

  transform(sum) {
    return sum.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ` ${currencySymbol}`;
    }
  }

