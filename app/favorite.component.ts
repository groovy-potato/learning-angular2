import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "favorite",
    template: `<i (click)="isFavorite= !isFavorite; this.change.emit({newValue: isFavorite});" 
    [ngClass] = "{'glyphicon':true,'glyphicon-star': isFavorite, 'glyphicon-star-empty': !isFavorite}"
></i>`
})

export class FavoriteComponent{
 @Input("is-favorite") isFavorite;
 @Output() change = new EventEmitter();
 
  
}

