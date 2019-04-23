import { Photo } from "./Photo";

export interface User {
  id: number;
  username: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastActiveL: Date;
  photoUrl: string;
  city: string;
  country: string;
  introduction: string;
  interests?: string;
  lookingFor?: string;
  photos?: Photo[];
}
