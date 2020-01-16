import {User} from './user';

export class Story {

  id: number;


  name: string;


  genre: string;
  description: string;

  createdAt: Date;


  updatedAt: Date;


  owner: User;

}
