import {Tennis} from "./Tennis";

describe('Tennis', () => {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis();
    });

    function scoreShouldBe(expectedScore: string) {
        const score = tennis.score();
        expect(score).toEqual(expectedScore);
    }

    it('Should return "love all"', () => {
        // THEN
        scoreShouldBe("love all");
    });

    it('Should return "15 love"', () => {
        tennis.firstPlayerScore();
        scoreShouldBe("15 love")
    });
});