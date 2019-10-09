export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) { }

  get token() { // Notice that in the above constructor token and tokenExpirationDate are private.  This is because we don't want these attributes to be able to be publically accessed and will be set programmatically by using a 'getter' function.
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return this._token;
    }
  }
}
