"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.title = "Default title";
        this.open = false;
    }
    ZippyComponent.prototype.toggle = function () {
        this.open = !this.open;
    };
    return ZippyComponent;
}());
ZippyComponent = __decorate([
    core_1.Component({
        selector: "zippy",
        template: "\n        <div class=\"zippy-head\">\n            <ul>\n                <li></li>\n                <li>{{title}}</li>\n                <li><button (click)=\"toggle()\" ><i class=\"glyphicon\" [ngClass]=\"{'glyphicon-chevron-down': !open, 'glyphicon-chevron-up': open}\"></i></button></li>\n            </ul>\n        </div>\n        <div *ngIf=\"open\">\n            <ng-content></ng-content>\n        </div>\n    ",
        styles: ["\n        ul li{\n            float:left;\n            list-style:none\n        }\n        .zippy-head button{\n            float:right;\n        }\n    "]
    })
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map