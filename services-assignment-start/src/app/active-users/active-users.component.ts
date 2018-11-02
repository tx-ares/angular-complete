import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  public users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
}
