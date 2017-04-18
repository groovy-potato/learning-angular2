"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VoteComponent = (function () {
    function VoteComponent() {
        this.totalVotes = 10;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoteComponent.prototype.upVote = function () {
        if (this.myVote == 1) {
            return false;
        }
        this.myVote++;
        this.vote.emit({
            myVote: this.myVote
        });
    };
    VoteComponent.prototype.downVote = function () {
        if (this.myVote == -1) {
            return false;
        }
        this.myVote--;
        this.vote.emit({
            myVote: this.myVote
        });
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VoteComponent.prototype, "totalVotes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "vote", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "\n    <ul>\n        <li>\n            <i [ngClass]=\"{\n                'glyphicon glyphicon-menu-up':true,\n                'highlight':myVote==1\n            }\"\n               (click)=\"upVote()\" \n            ></i>\n        </li>\n        <li>{{ totalVotes + myVote}}\n        <li>\n            <i [ngClass]=\"{\n                'glyphicon glyphicon-menu-down':true,\n                'highlight':myVote==-1\n            }\"\n                (click)=\"downVote()\"\n            ></i>\n        </li>\n    </ul>\n    ",
        styleUrls: ["app/vote.component.css"]
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map