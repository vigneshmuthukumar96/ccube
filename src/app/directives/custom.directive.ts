import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }

}


@Directive({
  selector: '[dotRestrict]'
})

export class dotRestrictDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { }
  @HostListener('input', ['$event']) oninput(event) {
    if (event.target.value) {
      let number = event.target.value;
      if (number.toString().indexOf(".") > -1) {
        event.target.value = parseInt(number.toString().slice(0, number.toString().indexOf("."))) ? parseInt(number.toString().slice(0, number.toString().indexOf("."))) : 0;
        let eve: Event = document.createEvent("Event");
        eve.initEvent('input', true, true);
        Object.defineProperty(eve, 'target', { value: this.el.nativeElement, enumerable: true });
        this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [eve]);

      }
    }
  }
}

@Directive({
  selector: '[onlyNumber]'
})
export class OnlynumberDirective {
  @Input() onlyNumber: boolean;
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event']) onkeydown(event) {
    let e = <KeyboardEvent>event;
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true) ||
      //  Allow: Ctrl+v
      (e.keyCode == 86 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      return
    } else {
      let regex = /\d+/;
      if (regex.test(e.key) == false) {
        return false;
      } else {
        return true
      }
    }
  }
}
