import {Role} from './role';
export class User {
  id:string;
  username:string="";
  password:string="";
  name:string="";
  role: Role;
  token: string="";
}
