export class Quote {
  public showBy: boolean;
  constructor(
    public id: number,
    public name: string,
    public by: string,
    public upvote: number,
    public downvote: number) {
    // public date: Date) {
    this.showBy = false
  }
}
