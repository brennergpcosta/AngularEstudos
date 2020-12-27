import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // @HostBinding('class') classes: string;
  // flag: boolean = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click') toogleOpen() {
    // this.isOpen = !this.isOpen;
    // if (this.flag) {
    //   this.classes = 'btn-group open';
    // } else {
    //   this.classes = 'btn-group';
    // }
    // this.flag = !this.flag;
  }

  @HostListener("document:click", ["$event"]) toggled(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
  }
}


