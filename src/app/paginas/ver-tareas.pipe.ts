import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verTareas',
  standalone: true
})
export class VerTareasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
