"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses.component");
var course_service_1 = require("./course.service");
var authors_component_1 = require("./authors.component");
var author_service_1 = require("./author.service");
var tweets_service_1 = require("./tweets.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var favorite_component_1 = require("./favorite.component");
var like_component_1 = require("./like.component");
var vote_component_1 = require("./vote.component");
var tweet_component_1 = require("./tweet.component");
var zippy_component_1 = require("./zippy.component");
var subscribe_component_1 = require("./subscribe.component");
var forms_1 = require("@angular/forms");
var signup_form_component_1 = require("./signup-form.component");
var change_password_component_1 = require("./change-password.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            courses_component_1.CoursesComponent,
            authors_component_1.AuthorsComponent,
            auto_grow_directive_1.AutoGrowDirective,
            favorite_component_1.FavoriteComponent,
            like_component_1.LikeComponent,
            vote_component_1.VoteComponent,
            tweet_component_1.TweetComponent,
            zippy_component_1.ZippyComponent,
            subscribe_component_1.SubscribeComponent,
            signup_form_component_1.SignUpFormComponent,
            change_password_component_1.ChangePasswordComponent
        ],
        providers: [
            course_service_1.CourseService,
            author_service_1.AuthorService,
            tweets_service_1.TweetsService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map