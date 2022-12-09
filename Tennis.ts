export class Tennis {
    private firstPlayerPointCount: number = 0;
    private secondPlayerPointCount: number = 0;

    constructor(private firstPlayer: string, private secondPlayer: string) {
    }

    score(): string {
        if (this.onePlayerHasAdvantage()) {
            return this.scoreAdvantage()
        }
        if (this.isDeuce()) {
            return this.scoreDeuce();
        }
        if (this.isScoreEquality()) {
            return this.scoreEquality();
        }
        return this.scoreDifferent()
    }

    private onePlayerHasAdvantage() {
        return Math.abs(this.firstPlayerPointCount - this.secondPlayerPointCount) === 1 && this.firstPlayerPointCount >= 3;
    }

    private scoreAdvantage() {
        return `advantage ${this.hasFirstPlayerAdvantage() ? this.firstPlayer : this.secondPlayer}`;
    }

    private hasFirstPlayerAdvantage() {
        return (this.firstPlayerPointCount - this.secondPlayerPointCount) === 1;
    }

    private scoreDeuce() {
        return "deuce";
    }

    private isDeuce() {
        return this.firstPlayerPointCount >= 3 && this.isScoreEquality();
    }

    private isScoreEquality() {
        return this.firstPlayerPointCount === this.secondPlayerPointCount;
    }

    private scoreDifferent() {
        return `${Tennis.scoreByCount(this.firstPlayerPointCount)} ${Tennis.scoreByCount(this.secondPlayerPointCount)}`;
    }

    private scoreEquality() {
        return `${Tennis.scoreByCount(this.firstPlayerPointCount)} all`;
    }

    private static scoreByCount(scoreCount: number) {
        if (scoreCount === 0) return "love";
        if (scoreCount === 1) return "15";
        if (scoreCount === 2) return "30";
        return "40";
    }

    firstPlayerWinPoint(): void {
        this.firstPlayerPointCount++;
    }

    secondPlayerWinPoint(): void {
        this.secondPlayerPointCount++;
    }
}