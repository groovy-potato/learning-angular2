import { Component } from '@angular/core';

@Component({
    selector: "zippy",
    template: `
        <div class="zippy-head">
            <ul>
                <li></li>
                <li>{{title}}</li>
                <li><button (click)="toggle()" ><i class="glyphicon" [ngClass]="{'glyphicon-chevron-down': !open, 'glyphicon-chevron-up': open}"></i></button></li>
            </ul>
        </div>
        <div *ngIf="open">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        ul li{
            float:left;
            list-style:none
        }
        .zippy-head button{
            float:right;
        }
    `]
})

export class ZippyComponent{
    title = "Default title"
    open = false;    

    toggle(){
        this.open= !this.open;
    }
}