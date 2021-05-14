export class Item {
  constructor(
    public name: string,
    public content: string,
    public date: Date,
  ) {
    this.name = name;
    this.content = content;
    this.date = new Date();
  }

}
