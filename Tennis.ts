export class Tennis {
    private firstPlayerScoreCount: number = 0;
    private secondPlayerScoreCount: number = 0;

    score(): string {
        const firstPlayerScore = Tennis.scoreByCount(this.firstPlayerScoreCount);
        if (this.firstPlayerHasScored()) {
            return `${firstPlayerScore} ${Tennis.scoreByCount(this.secondPlayerScoreCount)}`
        }
        return `${firstPlayerScore} all`
    }

    private firstPlayerHasScored() {
        return this.firstPlayerScoreCount > 0;
    }

    private static scoreByCount(scoreCount: number) {
        if (scoreCount === 0) return "love";
        if (scoreCount === 1) return "15";
        if (scoreCount === 2) return "30";
        return "40";
    }

    firstPlayerScore() {
        this.firstPlayerScoreCount++;
    }
}