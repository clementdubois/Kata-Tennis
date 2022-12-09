export class Tennis {
    private firstPlayerPointCount: number = 0;
    private secondPlayerPointCount: number = 0;

    score(): string {
        if (this.isScoreEquality()) {
            return this.isDeuce() ? this.scoreDeuce() : this.scoreEquality();
        }
        return this.scoreDifferent()

    }

    private scoreDeuce() {
        return "deuce";
    }

    private isDeuce() {
        return this.firstPlayerPointCount === 3 && this.secondPlayerPointCount === 3;
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