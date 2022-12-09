import {Tennis} from "./Tennis";

describe('Tennis', () => {
  it('Should return "love all"', () => {
    // GIVEN
    const tennis = new Tennis();
    // WHEN
    const score = tennis.score();
    // THEN
    expect(score).toEqual("love all");
  });
});