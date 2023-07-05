import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[apphighlight]',
  standalone: true,
})
export class Highlight {
  constructor(private elementref: ElementRef) {
    elementref.nativeElement.style.background = 'red';
    console.log(10, 'test1');
  }
  @HostListener('mouseenter')
  onmouseenter(): void {
    alert(this.elementref.nativeElement.innerText);
  }
}
