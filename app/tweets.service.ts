export class TweetsService{
    getTweets() {
        return [
            {
                image: "http://lorempixel.com/100/100/people?",
                displayName: "MINO",
                username: "winner-winner",
                text: "Lorem Ipsum",
                isLiked: false,
                numLikes:23
            },
            {
                image: "http://lorempixel.com/100/100/people?1",
                displayName: "I am Jin",
                username: "Jinu",
                text: "Lorem Ipsum",
                isLiked: false,
                numLikes:10
            }

        ]
    }
}