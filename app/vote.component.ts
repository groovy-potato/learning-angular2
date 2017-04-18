import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vote',
    template: `
    <ul>
        <li>
            <i [ngClass]="{
                'glyphicon glyphicon-menu-up':true,
                'highlight':myVote==1
            }"
               (click)="upVote()" 
            ></i>
        </li>
        <li>{{ totalVotes + myVote}}
        <li>
            <i [ngClass]="{
                'glyphicon glyphicon-menu-down':true,
                'highlight':myVote==-1
            }"
                (click)="downVote()"
            ></i>
        </li>
    </ul>
    `,
    styleUrls: [ "app/vote.component.css" ]
})

export class VoteComponent{
    @Input() totalVotes: number = 10;
    @Input() myVote= 0;

    @Output() vote = new EventEmitter();


    upVote(){
         
        if(this.myVote == 1){ return false;}
          this.myVote++;
        this.vote.emit({
            myVote: this.myVote
        })
    }

    downVote(){
        if(this.myVote == -1){ return false;}
            this.myVote--;
        this.vote.emit({
            myVote: this.myVote
        })
    }




}