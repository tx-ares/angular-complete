import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() viewChanged = new EventEmitter<{currentView: string}>();

    public changeView(view: string) {
        console.log('changeView fired!');
        this.viewChanged.emit({currentView: view});
    }
}
