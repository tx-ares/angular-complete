import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  public getServerStatus() {
    return this.serverStatus;
  }

  public getColor() {
    return this.serverStatus === 'online' ? 'green' : 'tomato';
  }

  ngOnInit() {
  }

}
