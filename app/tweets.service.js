"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TweetsService = (function () {
    function TweetsService() {
    }
    TweetsService.prototype.getTweets = function () {
        return [
            {
                image: "http://lorempixel.com/100/100/people?",
                displayName: "WINNER",
                username: "winner-winner",
                text: "Lorem Ipsum",
                isLiked: false,
                numLikes: 23
            },
            {
                image: "http://lorempixel.com/100/100/people?1",
                displayName: "I am Jin",
                username: "Jinu",
                text: "Lorem Ipsum",
                isLiked: false,
                numLikes: 10
            }
        ];
    };
    return TweetsService;
}());
exports.TweetsService = TweetsService;
//# sourceMappingURL=tweets.service.js.map