import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleservicesService } from '../sampleservices.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data:any;

  constructor(private src:SampleservicesService,private rou:Router) { }

  ngOnInit(): void {
    this.mydata()
  }

  mydata(){
   this.src.getdata().subscribe((e)=>(this.data=e))
  }

  Deldata(id:any){
    this.src.deldata(id).subscribe()
    this.mydata()
 }
 adddata(){
   this.rou.navigate(["./add"])


 }
}
