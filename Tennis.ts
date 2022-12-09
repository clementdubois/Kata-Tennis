export class Tennis {
    private firstPlayerScoreCount: number = 0;
    private secondPlayerScoreCount: number = 0;

    score(): string {
        const firstPlayerScore = Tennis.scoreByCount(this.firstPlayerScoreCount);
        if (this.firstPlayerScoreCount === 1 || this.firstPlayerScoreCount === 2) {
            return `${firstPlayerScore} ${Tennis.scoreByCount(this.secondPlayerScoreCount)}`
        }
        return `${firstPlayerScore} all`
    }

    private static scoreByCount(scoreCount: number) {
        if (scoreCount === 0) return "love";
        if (scoreCount === 1) return "15";
        return "30";
    }

    firstPlayerScore() {
        this.firstPlayerScoreCount++;
    }
}