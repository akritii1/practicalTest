import { Injectable } from '@angular/core';
import { Passenger } from './passengerinfo';

@Injectable({
  providedIn: 'root'
})
export class PassinfoService {
  pass: any[];

  constructor() { }
  passenger : Passenger[] = [
    {
      id: '1',
      name: 'Padmini',
      age: '21',
      gender: 'F',
      contact: '9849867024',
    },
    {
      id: '2',
      name: 'Bhavya',
      age: '20',
      gender: 'F',
      contact: '9182800301',
    },
    {
      id: '3',
      name: 'Ram',
      age: '26',
      gender: 'M',
      contact: '8500029785',
    },
    {
      id: '4',
      name: 'Noah',
      age: '29',
      gender: 'M',
      contact: '9182897260',
    },
    {
      id: '5',
      name: 'Michelle',
      age: '32',
      gender: 'M',
      contact: '9189217838',
    },
    
  ] 
}



