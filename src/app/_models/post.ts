import {Topic} from './topic';
import {User} from './user';

export class Post {

   id: number;


   content: string;


   createdAt: Date;


   updatedAt: Date;


   topic: Topic;


   user: User;
}
