export class conexionConstants {
  static readonly PUBLIC_KEY = '2d1b33fc3462cffca5b4ead88df521ca';
  static readonly HASH = '4b4f28540d407316cae75ed77ee732a7';
  static readonly BASE_URL = 'http://gateway.marvel.com/v1/public/characters';
  static readonly QUESTION = '?';
  static readonly AND = '&';
  static readonly FINAL_URL = `ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
}
