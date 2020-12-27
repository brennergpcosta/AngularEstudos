import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true
  serverCreationStatus = "No server was created!"
  newClassText = "btn btn-primary"
  serverName = ''
  serverWasCreated = false
  servers = ['TestServer 1', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! ' + this.serverName
    this.serverWasCreated = true
    this.servers.push(this.serverName)
    this.newClassText === "btn btn-primary" ? this.newClassText = 'btn btn-success' : this.newClassText = "btn btn-primary"
  }

  onUpdateServerName(input: any) {
    this.serverName = input.target.value
  }
}
