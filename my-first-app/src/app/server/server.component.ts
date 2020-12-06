import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['server.component.css']
})
export class ServerComponent {

  serverID = "1"
  serverStatus = "offline"

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'Online' ? "Green" : "Red"
  }
}
