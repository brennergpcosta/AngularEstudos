import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlighDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "green";
    this.elementRef.nativeElement.style.color = "white";
  }

  ngOnInit() {
  }
}
