import { Component, OnInit } from '@angular/core';
import { SampleservicesService } from '../sampleservices.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private src:SampleservicesService) { }

  ngOnInit(): void {
  }

  postdata(data:any){
    this.src.postdata(data).subscribe()
  }

}
