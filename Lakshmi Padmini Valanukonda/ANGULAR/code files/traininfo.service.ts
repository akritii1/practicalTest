import { Injectable } from '@angular/core';
import { TrainInfo } from './traininfo';

@Injectable({
  providedIn: 'root'
})
export class TraininfoService {

  constructor() { }
  train: TrainInfo[]=[
    {
      train_no:"90845",
      train_name:"Deccan Express",
      source:"Hyderabad",
      destination:"Vijaywada",
      total_seats: "150",
    },
    {
      train_no:"91845",
      train_name:"Andaman Express",
      source:"J&K",
      destination:"Andaman",
      total_seats: "190",
    },
    {
      train_no:"90875",
      train_name:"Nagarsaol",
      source:"Nagarsol",
      destination:"Narsapur",
      total_seats: "350",
    },
    {
      train_no:"90845",
      train_name:"Rajadhani Express",
      source:"Hyderabad",
      destination:"Delhi",
      total_seats: "320",
    },
    {
      train_no:"80845",
      train_name:"Garibrath ",
      source:"Bangalore",
      destination:"Vijaywada",
      total_seats: "100",
    },
    {
      train_no:"78345",
      train_name:"Golconda",
      source:"Hyderabad",
      destination:"Vijaywada",
      total_seats: "400",
    }

  ]
}
