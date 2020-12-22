import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class percent implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (value.toString().indexOf('.') > -1) { value = value.toFixed(2); }
      return value + '%';
    }
    else {
      return '--'
    }
  }
}

@Pipe({
  name: 'indianNumber'
})
export class indianNumber implements PipeTransform {
  constructor(){}
  transform(value: any, args?: any): any {
    if(value || parseInt(value) === 0){
      if(value.toString().indexOf(',') > -1){
        return value
      }
     else if (parseInt(value) === 0 || value) {
      value = Number(value).toLocaleString('en-In', { maximumFractionDigits: 2 });
      return value;
    }
    else {
      return null;
    }
    }
    else{
      return null;
    }
  }
}

