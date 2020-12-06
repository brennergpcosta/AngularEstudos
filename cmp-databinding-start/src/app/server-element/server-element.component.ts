import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("servElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ContentChild('contentParagraph') contentParagraph: ElementRef

  constructor() {
    console.log("Constructor called.");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called.");
    console.log(changes);
    console.log(this.name);
  }

  ngOnInit(): void {
    console.log("ngOninit called.");
  }

  ngDoCheck() {
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Called!");
    console.log('Paragraph: ' + this.contentParagraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called!");
  }
}
