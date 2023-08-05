import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
  // value bizim pipe'ımızın değiştirmeye çalıştığı değer burada value'muz unitprice'ın kendisi
  // rate bizim ilk parametremiz yani 10
}
