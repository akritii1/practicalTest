import { Component, OnInit } from '@angular/core';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor(private train:TraininfoService) { }
  use:any[];
  no:String='';
  ngOnInit(): void {
    this.use=this.train.train;
    console.log(this.no);
  }
 
}
