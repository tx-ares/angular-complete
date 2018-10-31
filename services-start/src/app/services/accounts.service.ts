import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable() // Injectable decorator can be used to add metadata like whats passed into @Component() or @Directive().  Angular needs this in order to inject a service within another service.
export class AccountsService { //  Important to note, that the @Injectable decorator belongs on the class/service on which you are injecting another service into.
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}
