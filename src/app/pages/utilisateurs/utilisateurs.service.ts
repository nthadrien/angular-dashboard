import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserInterface {
  id: number ;
  password: string;
  role: 'admin' | 'client';
  gender: 'male' | 'female';
  online: boolean; 
  transactions: { 
    id: number; 
    items: string[];
    total:number
  };
}

const generateDummyUsers = (count: number): UserInterface[] => {
  const users: UserInterface[] = [];
  const roles: ('admin' | 'client')[] = ['admin', 'client'];
  const genders: ('male' | 'female')[] = ['male', 'female'];

  for (let i = 1; i <= count; i++) {
    const user: UserInterface = {
      id: i,
      password: `password${i}`,
      role: roles[Math.floor(Math.random() * roles.length)],
      gender: genders[Math.floor(Math.random() * genders.length)],
      online: Math.random() < 0.5, // Randomly assign online status
      transactions: {
        id: i,
        items: [`item${Math.ceil(Math.random() * 10)}`, `item${Math.ceil(Math.random() * 10)}`],
        total: parseFloat((Math.random() * 100).toFixed(2)) // Random total between 0 and 100
      }
    };
    users.push(user);
  }

  return users;
};

const users:UserInterface[] = generateDummyUsers(40);



@Injectable({
  providedIn: 'root',
})
export class utilisateursService {
  // url = 'http://localhost:3000/users';

  constructor(
    private http : HttpClient
  ) {}

  async getUsers(): Promise<UserInterface[]> {
    const results:UserInterface[] = await new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve(users) , 2000 )
    })
    return results;
  }

  async getUserById(text: string) : Promise<any> {
    const data: (UserInterface | any) = users.find( user => user.role === text );
    return data[0] ?? undefined ;
  };
}
