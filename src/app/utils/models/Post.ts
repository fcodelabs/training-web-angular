export default class Post{

  private _title:string;
  private _description:string;
  private _user:string;

  constructor( user:string,title: string, description: string) {
    this._title = title;
    this._description = description;
    this._user=user;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  set user(value: string) {
    this._user = value;
  }
  get user(): string {
    return this._user;
  }
}
