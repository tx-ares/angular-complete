import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: []
})
export class ServerComponent implements OnInit {

  serverId: 10;
  serverStatus: 'offline';

  constructor() { }

  ngOnInit() {
  }

}
