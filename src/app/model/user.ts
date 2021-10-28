export class User {
  public id!: number;
  public userId: string | undefined;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public logInDateDisplay: Date | undefined;
  public joinDate: Date | undefined;
  public profileImageUrl: string | undefined;
  public active: boolean;
  public notLocked: boolean;
  public role: string;
  public authorities: [];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.username ='';
    this.email = '';
    this.active = false;
    this.notLocked = false;
    this.role = '';
    this.authorities = [];
  }
}
