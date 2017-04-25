import { Component } from '@angular/core';


@Component({
    selector: "subscribe",
    templateUrl: "app/subscribe.component.html"
})

export class SubscribeComponent{
    onSubmit(form){
        console.log(form)
    }
}