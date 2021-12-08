class DiaryCardObject{
  private _title:string;
  private _subtitle:string;
  private _description:string;

  constructor(title: string, subtitle: string, description: string) {
    this._title = title;
    this._subtitle = subtitle;
    this._description = description;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}

export default DiaryCardObject;
