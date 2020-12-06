import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() recipesOnInput: boolean
  @Output() recipesOnOutput = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage() {
    this.recipesOnOutput.emit(!this.recipesOnInput)
  }
}
