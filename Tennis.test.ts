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

    function firstPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore();
        }
    }

    it('Should return "love all"', () => {
        scoreShouldBe("love all");
    });

    it('Should return "15 love"', () => {
        firstPlayerScoreTimes(1)
        scoreShouldBe("15 love")
    });

    it('Should return "30 love"', () => {
        firstPlayerScoreTimes(2);
        scoreShouldBe("30 love")
    });

    it('Should return "40 love"', () => {
        firstPlayerScoreTimes(3);
        scoreShouldBe("40 love")
    });
});