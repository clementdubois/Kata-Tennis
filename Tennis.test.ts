import {Tennis} from "./Tennis";

describe('Tennis', () => {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis("Bob", "Alice");
    });

    function scoreShouldBe(expectedScore: string) {
        const score = tennis.score();
        expect(score).toEqual(expectedScore);
    }

    function firstPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerWinPoint();
        }
    }

    function secondPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerWinPoint();
        }
    }

    function playersEqualityScoreTimes(times: number) {
        firstPlayerScoreTimes(times)
        secondPlayerScoreTimes(times)
    }

    function firstPlayerHasAdvantage() {
        firstPlayerScoreTimes(4);
        secondPlayerScoreTimes(3);
    }

    function secondPlayerHasAdvantage() {
        firstPlayerScoreTimes(3);
        secondPlayerScoreTimes(4);
    }

    describe('Equality', () => {
        it('Should return "love all"', () => {
            scoreShouldBe("love all");
        });

        it('Should return "15 all"', () => {
            playersEqualityScoreTimes(1);
            scoreShouldBe("15 all")
        });

        it('Should return "30 all"', () => {
            playersEqualityScoreTimes(2);
            scoreShouldBe("30 all")
        });

        it('Should return "deuce"', () => {
            playersEqualityScoreTimes(3);
            scoreShouldBe("deuce")
        });
        it('Should return "deuce" after Alice advantage lost', () => {
            secondPlayerHasAdvantage();
            firstPlayerScoreTimes(1);
            scoreShouldBe("deuce")
        });

        it('Should return "deuce" after Bob advantage lost', () => {
            firstPlayerHasAdvantage();
            secondPlayerScoreTimes(1);
            scoreShouldBe("deuce")
        });
    });

    describe("different score", () => {
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

        it('Should return "love 15"', () => {
            secondPlayerScoreTimes(1)
            scoreShouldBe("love 15")
        });

        it('Should return "love 30"', () => {
            secondPlayerScoreTimes(2);
            scoreShouldBe("love 30")
        });

        it('Should return "love 40"', () => {
            secondPlayerScoreTimes(3);
            scoreShouldBe("love 40")
        });
    })

    describe("Advantage", () => {

        it('Should return "advantage Bob"', () => {
            firstPlayerHasAdvantage();
            scoreShouldBe("advantage Bob")
        });

        it('Should return "advantage Alice"', () => {
            secondPlayerHasAdvantage();
            scoreShouldBe("advantage Alice")
        });

        it('Should return "advantage Bob when Bob retake advantage"', () => {
            firstPlayerHasAdvantage();
            secondPlayerScoreTimes(1);
            firstPlayerScoreTimes(1);
            scoreShouldBe("advantage Bob")
        });

        it('Should return "advantage Alice when Alice retake advantage"', () => {
            secondPlayerHasAdvantage();
            firstPlayerScoreTimes(1);
            secondPlayerScoreTimes(1);
            scoreShouldBe("advantage Alice")
        });
    })

    describe("Win", () => {
        it('Should return "Bob win" if Bob win the game', () => {
            firstPlayerScoreTimes(4);
            scoreShouldBe("Bob win")
        });

        it('Should return "Alice win" if Alice win the game', () => {
            secondPlayerScoreTimes(4);
            scoreShouldBe("Alice win")
        });
    })


});