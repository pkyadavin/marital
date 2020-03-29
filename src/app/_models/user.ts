import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  religion: string;
  cast: string;
  education: string;
  email: string;
  phonenumber: string;
  refererusername: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
  roles?: string[];
}
