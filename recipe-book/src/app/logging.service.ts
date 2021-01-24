import { Injectable } from "@angular/core";

// @Injectable ({ providedIn: 'root'})
export class LoggingService {
  lastlog: string;

  printlog(message: string) {
    console.log(message);
    console.log('Last Log: ',this.lastlog);
    this.lastlog = message;
  }
}
