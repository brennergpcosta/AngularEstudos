import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sei',
  templateUrl: './sei.component.html',
  styleUrls: ['./sei.component.css']
})
export class SeiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content = 'Secret Password = tuna'
  contents = []
  show = true
  clicks = []
  count = 0
  background = ''
  fontColor = ''

  display(){
    this.show = !this.show
    this.count++
    // this.clicks.push(this.count)
    this.clicks.push([new Date(), this.count])
    if(this.count > 5){
      this.background = 'blue'
      this.fontColor = 'white'
    }
  }
}
