import { Component, OnInit } from '@angular/core';
import { PassinfoService } from '../passinfo.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor(private pass:PassinfoService) { }

  use:any[];
  no:String='';
  ngOnInit(): void {
    this.use=this.pass.passenger;
    console.log(this.no);
  }


}
