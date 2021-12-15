class DiaryCardObject{
  private _title:string;
  private _subtitle:string;
  private _description:string;

  constructor(title: string, subtitle: string, description: string) {
    this._title = title;
    this._subtitle = subtitle;
    this._description = description;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get subtitle(): string {
    return this._subtitle;
  }

  public set subtitle(value: string) {
    this._subtitle = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}

export default DiaryCardObject;
