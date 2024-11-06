export class SetStatus {
  static readonly type = '[Status] Set';
  constructor(public payload: string) {}
}
