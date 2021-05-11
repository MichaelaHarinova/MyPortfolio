export class Item {
  constructor(
    public placeName: string,
    public plan: string,
    public date: Date,
  ) {
    this.placeName = placeName;
    this.plan = plan;
    this.date = new Date();
  }

}
