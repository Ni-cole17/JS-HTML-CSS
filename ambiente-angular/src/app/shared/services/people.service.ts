import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {
        firstName: 'Nicole',
        lastName: 'Charron',
        age: 22
      },
      {
        firstName: 'Nicholas',
        lastName: 'Paulo',
        age: 21
      },
      {
        firstName: 'Maria',
        lastName: 'Carvalho',
        age: 35
      },
    ]
   return of(peopleArray)
  }
}
