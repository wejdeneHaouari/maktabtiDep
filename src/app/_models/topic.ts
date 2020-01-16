import {User} from './user';
import {Forum} from './forum';

export class Topic {


  id: number;


  name: string;


  createdAt: Date;


  updatedAt: Date;


   user: User;


   forum: Forum;
}
