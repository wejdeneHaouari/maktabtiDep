import {User} from './user';
import {Story} from './story';

export class Chapter {

  id: number;


  name: string;

  numero: number;
  releaseDate: string;


  createdAt: Date;


  updatedAt: Date;


  story: Story;

  content: string;
}
