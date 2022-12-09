export class Tennis {
    private firstPlayerScoreCount: number = 0;

    score(): string {
        if (this.firstPlayerScoreCount > 0) {
            return "15 love"
        }
        return "love all"
    }

    firstPlayerScore() {
        this.firstPlayerScoreCount++;
    }
}