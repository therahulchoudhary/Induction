import { Injectable } from '@angular/core';
import { USERS} from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(){return USERS;}
}
