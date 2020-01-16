import {User} from './user';
import {Book} from './book';

export class Review {

   id: number;


   content: string;

  note: string;


  createdAt: Date;


  updatedAt: Date;


  user: User;

  book: Book;
}
